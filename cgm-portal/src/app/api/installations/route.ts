import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { OrderStatus } from '@prisma/client';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Ensure order exists
        const order = await prisma.order.findUnique({
            where: { id: body.orderId }
        });

        if (!order) {
            return NextResponse.json({ error: 'Order not found' }, { status: 404 });
        }

        const safeDate = (dateStr: string | null) => {
            if (!dateStr || dateStr.trim() === '') return null;
            const d = new Date(dateStr);
            return isNaN(d.getTime()) ? null : d;
        };

        const visitDate = safeDate(body.visitDate) || new Date();
        const firstActivationDate = safeDate(body.firstActivationDate);

        const postForm = await prisma.postAdministrationForm.create({
            data: {
                orderId: body.orderId,
                patientId: order.patientId,
                kamName: body.kamName,
                kamEmployeeCode: body.kamEmployeeCode,
                region: body.region,
                city: body.city,
                area: body.area,
                referredBy: body.referredBy,
                referralCode: body.referralCode,
                referralTeam: body.referralTeam,
                doctorName: body.doctorName,
                doctorCode: body.doctorCode,
                serviceProvider: body.serviceProvider,
                patientName: body.patientName,
                patientArea: body.patientArea,
                sensorInstalledBy: body.sensorInstalledBy,
                visitDate: visitDate,
                visitTime: body.visitTime,
                numberOfDevices: parseInt(body.numberOfDevices) || 1,
                patientEmail: body.patientEmail,
                patientWhatsApp: body.patientWhatsApp,
                firstActivationDate: firstActivationDate,
                comments: body.comments,
                serialNumber: body.serialNumber,
                reminder: body.reminder === 'true' || body.reminder === true
            }
        });

        // Update order status to DELIVERED if it was submitted
        await prisma.order.update({
            where: { id: body.orderId },
            data: { status: OrderStatus.DELIVERED }
        });

        return NextResponse.json(postForm);
    } catch (error: any) {
        console.error('Installation submission error:', error);

        // Handle unique constraint error (installation already reported for this order)
        if (error.code === 'P2002') {
            return NextResponse.json({
                error: 'Installation has already been reported for this order.'
            }, { status: 400 });
        }

        return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const orderId = searchParams.get('orderId');
        const kamId = searchParams.get('kamId');

        if (orderId) {
            const form = await prisma.postAdministrationForm.findUnique({
                where: { orderId },
                include: { order: true }
            });
            return NextResponse.json(form);
        }

        let where: any = {};
        if (kamId) {
            where.order = { kamId: kamId };
        }

        const forms = await prisma.postAdministrationForm.findMany({
            where,
            include: {
                order: true,
                patient: true
            },
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(forms);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch forms' }, { status: 500 });
    }
}
