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

    // 3. KAM 1
    await prisma.user.upsert({
        where: { email: 'kam1@pharmevo.biz' },
        update: { password: 'password123', role: 'KAM' },
        create: {
            email: 'kam1@pharmevo.biz',
            name: 'KAM 1',
            password: 'password123',
            role: 'KAM',
            employeeCode: 'KAM001'
        }
    });
    console.log('KAM 1: kam1@pharmevo.biz / password123');

    // 4. Distributor 1
    await prisma.user.upsert({
        where: { email: 'distributor1@pharmevo.biz' },
        update: { password: 'password123', role: 'DISTRIBUTOR' },
        create: {
            email: 'distributor1@pharmevo.biz',
            name: 'Distributor 1',
            password: 'password123',
            role: 'DISTRIBUTOR',
            employeeCode: 'DIST001'
        }
    });
    console.log('Distributor 1: distributor1@pharmevo.biz / password123');

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
