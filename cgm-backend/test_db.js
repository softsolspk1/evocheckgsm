const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    console.log('Testing connection to:', process.env.DATABASE_URL.split('@')[1]);
    try {
        const result = await prisma.$queryRaw`SELECT 1 as test`;
        console.log('Connection successful:', result);
    } catch (error) {
        console.error('Connection failed:');
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
