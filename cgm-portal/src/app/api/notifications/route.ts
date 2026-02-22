import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get('userId');
        const role = searchParams.get('role');
        const distributorId = searchParams.get('distributorId');
        const kamId = searchParams.get('kamId');

        if (!userId) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
        }

        const notifications: any[] = [];

        // 1. Fetch persistent notifications from DB
        const dbNotifications = await prisma.notification.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: 20
        });
        notifications.push(...dbNotifications);

        // 2. Aggregate Live Alerts (Pseudo-notifications)
        if (role === 'DISTRIBUTOR' && distributorId) {
            // Low Stock Alerts
            const lowStock = await prisma.inventory.findMany({
                where: {
                    distributorId,
                    availableStock: { lt: 10 }
                },
                include: { distributor: true }
            });

            lowStock.forEach(item => {
                notifications.push({
                    id: `low-stock-${item.id}`,
                    title: 'Low Stock Alert',
                    message: `Available stock is only ${item.availableStock} units. Please replenish soon.`,
                    type: 'STOCK_ALERT',
                    createdAt: item.lastUpdated,
                    isRead: false
                });
            });

            // New Orders Alerts (last 24h)
            const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
            const newOrders = await prisma.order.findMany({
                where: {
                    distributorId,
                    status: 'PENDING',
                    createdAt: { gte: yesterday }
                },
                include: { patient: true }
            });

            newOrders.forEach(order => {
                notifications.push({
                    id: `new-order-${order.id}`,
                    title: 'New Order Received',
                    message: `Pending order for ${order.patient?.name || 'Anonymous'}.`,
                    type: 'ORDER_UPDATE',
                    createdAt: order.createdAt,
                    isRead: false
                });
            });
        }

        if (role === 'KAM' && kamId) {
            // Order Status Updates (last 24h)
            const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
            const updatedOrders = await prisma.order.findMany({
                where: {
                    kamId,
                    updatedAt: { gte: yesterday },
                    status: { not: 'PENDING' }
                },
                include: { patient: true }
            });

            updatedOrders.forEach(order => {
                notifications.push({
                    id: `status-upd-${order.id}`,
                    title: 'Order Status Update',
                    message: `Order for ${order.patient?.name || 'Anonymous'} is now ${order.status}.`,
                    type: 'ORDER_UPDATE',
                    createdAt: order.updatedAt,
                    isRead: false
                });
            });
        }

        // Sort all by date
        const sortedNotifications = notifications.sort((a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

        return NextResponse.json(sortedNotifications);
    } catch (error) {
        console.error('Fetch notifications error:', error);
        return NextResponse.json({ error: 'Failed to fetch notifications' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { id, isRead } = body;

        // Only update if it's a real DB notification (UUID format)
        if (id.length > 20) {
            await prisma.notification.update({
                where: { id },
                data: { isRead }
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update notification' }, { status: 500 });
    }
}
