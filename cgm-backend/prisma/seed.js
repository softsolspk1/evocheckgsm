const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    const seedPath = path.join(__dirname, 'seed.json');
    if (!fs.existsSync(seedPath)) {
        console.log('No seed.json found. Run process_excel.py first.');
        return;
    }

    const data = JSON.parse(fs.readFileSync(seedPath, 'utf8'));

    console.log('Seeding cities...');
    for (const city of data.cities) {
        await prisma.city.upsert({
            where: { name: city.name },
            update: {},
            create: { name: city.name },
        });
    }

    console.log('Seeding Super Admin...');
    await prisma.user.upsert({
        where: { email: 'admin@pharmevo.biz' },
        update: {},
        create: {
            email: 'admin@pharmevo.biz',
            name: 'System Administrator',
            role: 'SUPER_ADMIN',
            password: 'admin123',
        },
    });

    console.log('Seeding users (KAMs)...');
    for (const user of data.users) {
        await prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: {
                email: user.email,
                name: user.name,
                employeeCode: user.employeeCode,
                role: user.role,
                password: user.password, // Ideally hashed
            },
        });
    }

    console.log('Seeding completed successfully.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
