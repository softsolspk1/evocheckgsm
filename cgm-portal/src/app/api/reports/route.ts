import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const cityDistribution = await prisma.city.findMany({
            include: { _count: { select: { orders: true } } }
        });

        const kamPerformance = await prisma.user.findMany({
            where: { role: 'KAM' },
            include: { _count: { select: { ordersAsKam: true } }, city: true },
            orderBy: { ordersAsKam: { _count: 'desc' } }
        });

        const inventory = await prisma.inventory.findMany({
            include: {
                distributor: {
                    include: { city: true }
                }
            }
        });

        const dailyOrders = await prisma.order.groupBy({
            by: ['createdAt'],
            _count: { id: true },
            orderBy: { createdAt: 'asc' }
        });

        // Grouping daily orders by date
        const ordersByDate = dailyOrders.reduce((acc: any, curr: any) => {
            const date = new Date(curr.createdAt).toLocaleDateString();
            acc[date] = (acc[date] || 0) + curr._count.id;
            return acc;
        }, {});

        const orderTrend = Object.entries(ordersByDate).map(([date, count]) => ({
            date,
            orders: count
        })).slice(-7); // Last 7 days

        return NextResponse.json({
            cityDistribution: cityDistribution.map(c => ({ name: c.name, orders: c._count.orders })),
            kamPerformance: kamPerformance.map(k => ({ name: k.name, orders: k._count.ordersAsKam })),
            inventory: inventory.map(i => ({
                distributor: i.distributor.name,
                available: i.availableStock,
                total: i.totalStock
            })),
            orderTrend
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch reports' }, { status: 500 });
    }
}
