import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const kamId = searchParams.get('kamId');
        const date = searchParams.get('date');

        let where: any = {};
        if (kamId) where.kamId = kamId;
        if (date) {
            const startOfDay = new Date(date);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(date);
            endOfDay.setHours(23, 59, 59, 999);
            where.visitDate = { gte: startOfDay, lte: endOfDay };
        }

        const visits = await prisma.doctorVisit.findMany({
            where,
            include: { kam: true },
            orderBy: { visitDate: 'desc' }
        });
        return NextResponse.json(visits);
    } catch (error) {
        console.error('Fetch doctor visits error:', error);
        return NextResponse.json({ error: 'Failed to fetch doctor visits' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Use upsert-like logic: if a record for this KAM and this day exists, update it, otherwise create.
        const visitDate = new Date();
        visitDate.setHours(0, 0, 0, 0);

        const existingVisit = await prisma.doctorVisit.findFirst({
            where: {
                kamId: body.kamId,
                visitDate: visitDate
            }
        });

        let visit;
        if (existingVisit) {
            visit = await prisma.doctorVisit.update({
                where: { id: existingVisit.id },
                data: { visitCount: body.visitCount }
            });
        } else {
            visit = await prisma.doctorVisit.create({
                data: {
                    kamId: body.kamId,
                    visitCount: body.visitCount,
                    visitDate: visitDate
                }
            });
        }

        return NextResponse.json(visit);
    } catch (error) {
        console.error('Record doctor visits error:', error);
        return NextResponse.json({ error: 'Failed to record doctor visits' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        const visit = await prisma.doctorVisit.delete({
            where: { id: body.id }
        });
        return NextResponse.json(visit);
    } catch (error) {
        console.error('Delete doctor visit error:', error);
        return NextResponse.json({ error: 'Failed to delete doctor visit' }, { status: 500 });
    }
}
