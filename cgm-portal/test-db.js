const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Testing Prisma Order Creation with new fields...');

    // 1. Create a mock user (KAM)
    let kam = await prisma.user.findFirst({ where: { role: 'KAM' } });
    if (!kam) {
        kam = await prisma.user.create({
            data: {
                email: 'test_kam@example.com',
                name: 'Test KAM',
                password: 'hashed_password_mock',
                role: 'KAM',
            }
        });
    }

    // 2. Create a mock city
    let city = await prisma.city.findFirst();
    if (!city) {
        city = await prisma.city.create({
            data: {
                name: 'Test City',
                region: 'Test Region',
            }
        });
    }

    // 3. Create or Fetch Patient
    const patientPhone = '03001234567';
    let patient = await prisma.patient.findUnique({ where: { phone: patientPhone } });
    if (!patient) {
        patient = await prisma.patient.create({
            data: {
                name: 'John Doe Testing',
                phone: patientPhone,
                age: 45,
                gender: 'Male',
                address: '123 Fake Street',
            }
        });
    }

    // 4. Create Order
    const order = await prisma.order.create({
        data: {
            patientId: patient.id,
            cityId: city.id,
            kamId: kam.id,
            createdById: kam.id,
            doctorName: 'Dr. Smith',
            doctorCity: 'Test City',
            clinicHospital: 'City Hospital',
            product: 'Sensor A',
            startingMonth: 'January',
            quantity: 2,
            status: 'PENDING',
            source: 'MOBILE',
        }
    });

    console.log('Successfully created Order with ID:', order.id);

    const fetchedOrder = await prisma.order.findUnique({
        where: { id: order.id },
        include: { patient: true }
    });

    console.log('Fetched Order Patient Age:', fetchedOrder.patient.age);
    console.log('Fetched Order Quantity:', fetchedOrder.quantity);
    console.log('Fetched Order Product:', fetchedOrder.product);

    // Clean up
    await prisma.order.delete({ where: { id: order.id } });

    console.log('Clean up complete.');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
