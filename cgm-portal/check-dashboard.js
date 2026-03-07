const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkDashboardData() {
    console.log('--- Dashboard Data Diagnostic ---');
    const now = new Date();
    console.log('Current Server Time (UTC):', now.toISOString());
    console.log('Current Timezone Offset:', now.getTimezoneOffset());

    // Dashboard logic for 'today'
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    console.log('Dashboard Start Date (Today):', todayStart.toISOString());

    const totalOrders = await prisma.order.count();
    console.log('Total Orders in DB:', totalOrders);

    const todayOrders = await prisma.order.findMany({
        where: { createdAt: { gte: todayStart } },
        select: { id: true, createdAt: true, status: true }
    });
    console.log(`Orders created since ${todayStart.toISOString()}:`, todayOrders.length);
    if (todayOrders.length > 0) {
        console.log('Sample of Today Orders:', todayOrders.slice(0, 5));
    }

    const recentOrders = await prisma.order.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        select: { id: true, createdAt: true, status: true }
    });
    console.log('Most Recent 5 Orders overall:');
    recentOrders.forEach(o => {
        console.log(`- ID: ${o.id}, CreatedAt: ${o.createdAt.toISOString()}, Status: ${o.status}`);
    });

    // Check الشهر (Month)
    const monthStart = new Date();
    monthStart.setDate(1);
    monthStart.setHours(0, 0, 0, 0);
    const monthOrders = await prisma.order.count({ where: { createdAt: { gte: monthStart } } });
    console.log(`Orders created this month (${monthStart.toISOString()}):`, monthOrders);
}

checkDashboardData()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
