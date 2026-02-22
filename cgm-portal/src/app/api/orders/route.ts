import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const kamId = searchParams.get('kamId');
        const distributorId = searchParams.get('distributorId');

        let where: any = {};
        if (kamId) where.kamId = kamId;
        if (distributorId) where.distributorId = distributorId;

        const orders = await prisma.order.findMany({
            where,
            include: {
                patient: true,
                city: true,
                kam: true,
                distributor: true,
                area: true,
                postForm: true
            },
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(orders);
    } catch (error) {
        console.error('Fetch orders error:', error);
        return NextResponse.json({ error: 'Failed to fetch orders' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { patientName, patientPhone, cityId, kamId, distributorId, doctorName } = body;

        // Find or create patient
        let patient = await prisma.patient.findFirst({
            where: { phone: patientPhone }
        });

        if (!patient) {
            patient = await prisma.patient.create({
                data: {
                    name: patientName,
                    phone: patientPhone,
                    cityId: cityId
                }
            });
        }

        // Get or Create a creator (Fall back to a system user)
        let creator = await prisma.user.findFirst({
            where: { role: 'SUPER_ADMIN' }
        });

        if (!creator) {
            creator = await prisma.user.findFirst();
        }

        if (!creator) {
            return NextResponse.json({ error: 'No user found to assign as creator' }, { status: 400 });
        }

        const order = await prisma.order.create({
            data: {
                patientId: patient.id,
                cityId: cityId,
                kamId: kamId,
                distributorId: distributorId,
                doctorName: doctorName,
                status: 'PENDING',
                createdById: creator.id
            },
            include: {
                patient: true,
                city: true
            }
        });

        // Create Notifications
        const notifications = [];
        if (kamId) {
            notifications.push({
                userId: kamId,
                title: 'New Order Assigned',
                message: `You have a new order for ${patient.name} in ${order.city.name}.`,
                type: 'ORDER_UPDATE'
            });
        }
        if (distributorId) {
            // Find a user associated with this distributor to notify
            // The schema has Distributor model with users relation
            const distributorUser = await prisma.user.findFirst({
                where: { distributorId: distributorId }
            });
            if (distributorUser) {
                notifications.push({
                    userId: distributorUser.id,
                    title: 'New Order Received',
                    message: `New pending order for ${patient.name} in ${order.city.name}.`,
                    type: 'ORDER_UPDATE'
                });
            }
        }

        if (notifications.length > 0) {
            await prisma.notification.createMany({
                data: notifications
            });
        }

        return NextResponse.json(order);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to place order' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const order = await prisma.order.update({
            where: { id: body.id },
            data: {
                status: body.status,
                doctorName: body.doctorName,
                cityId: body.cityId,
                kamId: body.kamId,
                distributorId: body.distributorId
            }
        });
        return NextResponse.json(order);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update order' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        await prisma.order.delete({
            where: { id: body.id }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete order' }, { status: 500 });
    }
}
