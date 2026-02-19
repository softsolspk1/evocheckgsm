const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding comprehensive data for analytics...');

    const data = [
        { city: 'Karachi', area: 'North', doctor: 'Dr. Nasir', distributor: 'Muller & Phipps' },
        { city: 'Karachi', area: 'South', doctor: 'Dr. Zeeshan', distributor: 'M&P Clifton' },
        { city: 'Lahore', area: 'Central', doctor: 'Dr. Ali', distributor: 'M&P Lahore' },
        { city: 'Lahore', area: 'Model Town', doctor: 'Dr. Fatima', distributor: 'Lahore Logistics' },
        { city: 'Islamabad', area: 'West', doctor: 'Dr. Sara', distributor: 'M&P Islamabad' },
        { city: 'Faisalabad', area: 'East', doctor: 'Dr. Usman', distributor: 'Logistics Faisalabad' },
        { city: 'Peshawar', area: 'South', doctor: 'Dr. Hina', distributor: 'Peshawar Distributors' },
        { city: 'Quetta', area: 'Cantonment', doctor: 'Dr. Ahmed', distributor: 'Quetta Logistics' },
        { city: 'Multan', area: 'Gulgasht', doctor: 'Dr. Raza', distributor: 'Multan Supply' },
        { city: 'Sialkot', area: 'Industrial', doctor: 'Dr. Bilal', distributor: 'Sialkot Meds' }
    ];

    // Create a Super Admin
    const admin = await prisma.user.upsert({
        where: { email: 'admin@pharmevo.biz' },
        update: {},
        create: {
            email: 'admin@pharmevo.biz',
            name: 'Super Admin',
            password: 'password123',
            role: 'SUPER_ADMIN',
            employeeCode: 'ADMIN001'
        }
    });

    for (const item of data) {
        const city = await prisma.city.upsert({
            where: { name: item.city },
            update: {},
            create: { name: item.city }
        });

        const area = await prisma.area.upsert({
            where: { name_cityId: { name: item.area, cityId: city.id } },
            update: {},
            create: { name: item.area, cityId: city.id }
        });

        const distributor = await prisma.distributor.upsert({
            where: { name_areaId: { name: item.distributor, areaId: area.id } },
            update: {},
            create: { name: item.distributor, cityId: city.id, areaId: area.id }
        });

        // Seed Inventory for each distributor
        await prisma.inventory.upsert({
            where: { id: `${distributor.id}-inv` }, // Custom ID for predictability in seed
            update: {
                totalStock: 100,
                availableStock: Math.floor(Math.random() * 80) + 20,
            },
            create: {
                id: `${distributor.id}-inv`,
                distributorId: distributor.id,
                totalStock: 100,
                availableStock: Math.floor(Math.random() * 80) + 20,
            }
        });

        // Create 2-5 orders for each entry to populate graphs
        const orderCount = Math.floor(Math.random() * 4) + 2;
        for (let i = 0; i < orderCount; i++) {
            const patientPhone = `03${Math.floor(100000000 + Math.random() * 900000000)}`;
            const patient = await prisma.patient.upsert({
                where: { phone: patientPhone },
                update: {},
                create: {
                    name: `Patient ${i + 1} for ${item.city}`,
                    phone: patientPhone,
                    cityId: city.id,
                    areaId: area.id
                }
            });

            await prisma.order.create({
                data: {
                    patientId: patient.id,
                    cityId: city.id,
                    distributorId: distributor.id,
                    doctorName: item.doctor,
                    createdById: admin.id,
                    status: Math.random() > 0.3 ? 'CONFIRMED' : 'PENDING',
                    createdAt: new Date(Date.now() - Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000)
                }
            });
        }

        // Create KAM
        const kamEmail = `kam.${item.city.toLowerCase()}@pharmevo.biz`;
        await prisma.user.upsert({
            where: { email: kamEmail },
            update: { cityId: city.id },
            create: {
                email: kamEmail,
                name: `KAM ${item.city}`,
                password: 'password123',
                role: 'KAM',
                employeeCode: `KAM-${item.city.toUpperCase().slice(0, 3)}-${Math.floor(Math.random() * 100)}`,
                cityId: city.id
            }
        });
    }

    console.log('Seeding completed successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
