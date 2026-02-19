const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding extensive data...');

    const cities = [
        { name: 'Karachi' },
        { name: 'Lahore' },
        { name: 'Islamabad' },
        { name: 'Rawalpindi' },
        { name: 'Faisalabad' },
        { name: 'Multan' },
        { name: 'Peshawar' },
        { name: 'Quetta' },
        { name: 'Sialkot' },
        { name: 'Gujranwala' },
        { name: 'Hyderabad' },
        { name: 'Abbottabad' },
        { name: 'Bahawalpur' },
        { name: 'Sargodha' },
        { name: 'Sukkur' }
    ];

    for (const cityData of cities) {
        const city = await prisma.city.upsert({
            where: { name: cityData.name },
            update: {},
            create: cityData,
        });

        const areas = ['Central', 'North', 'South', 'East', 'West', 'Model Town', 'Satellite Town', 'Saddar', 'Gulberg', 'DHA Phase 1', 'DHA Phase 2'];

        for (const areaName of areas) {
            const area = await prisma.area.upsert({
                where: { name_cityId: { name: areaName, cityId: city.id } },
                update: {},
                create: { name: areaName, cityId: city.id },
            });

            // Add a distributor for each area
            const distName = `${city.name} ${areaName} Logistics`;
            await prisma.distributor.upsert({
                where: { name_areaId: { name: distName, areaId: area.id } },
                update: {},
                create: {
                    name: distName,
                    cityId: city.id,
                    areaId: area.id,
                },
            });
        }
    }

    console.log('Seed completed successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
