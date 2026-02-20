import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Ensuring standard users exist...');

    // 1. Super Admin
    await prisma.user.upsert({
        where: { email: 'admin@pharmevo.biz' },
        update: { password: 'password123', role: 'SUPER_ADMIN' },
        create: {
            email: 'admin@pharmevo.biz',
            name: 'Super Admin',
            password: 'password123',
            role: 'SUPER_ADMIN',
            employeeCode: 'ADMIN001'
        }
    });
    console.log('Super Admin: admin@pharmevo.biz / password123');

    // 2. Sub Admin
    await prisma.user.upsert({
        where: { email: 'subadmin@pharmevo.biz' },
        update: { password: 'password123', role: 'SUB_ADMIN' },
        create: {
            email: 'subadmin@pharmevo.biz',
            name: 'Sub Admin',
            password: 'password123',
            role: 'SUB_ADMIN',
            employeeCode: 'SUB001'
        }
    });
    console.log('Sub Admin: subadmin@pharmevo.biz / password123');

    // 3. KAM (Example from import)
    // Shahid Mehmood (Faisalabad)
    await prisma.user.upsert({
        where: { email: 's01090176@pharmevo.biz' },
        update: { password: 'password123', role: 'KAM' },
        create: {
            email: 's01090176@pharmevo.biz',
            name: 'Shahid Mehmood',
            password: 'password123',
            role: 'KAM',
            employeeCode: 'S01090176'
        }
    });
    console.log('KAM (Faisalabad): s01090176@pharmevo.biz / password123');

    console.log('User provisioning complete!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
