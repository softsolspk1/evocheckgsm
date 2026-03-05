import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
        const refunds = await prisma.refundRequest.findMany({
            include: { kam: true, patient: true },
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(refunds);
    } catch (error) {
        console.error('Fetch refunds error:', error);
        return NextResponse.json({ error: 'Failed to fetch refunds' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const refund = await prisma.refundRequest.create({
            data: {
                kamId: body.kamId,
                patientId: body.patientId,
                status: 'PENDING'
            }
        });
        return NextResponse.json(refund);
    } catch (error) {
        console.error('Create refund error:', error);
        return NextResponse.json({ error: 'Failed to create refund' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const refund = await prisma.refundRequest.update({
            where: { id: body.id },
            data: { status: body.status }
        });
        return NextResponse.json(refund);
    } catch (error) {
        console.error('Update refund error:', error);
        return NextResponse.json({ error: 'Failed to update refund' }, { status: 500 });
    }
}
