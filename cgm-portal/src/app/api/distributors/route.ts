import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const distributors = await prisma.distributor.findMany({
            include: { city: true, area: true },
            orderBy: { name: 'asc' }
        });
        return NextResponse.json(distributors);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch distributors' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const distributor = await prisma.distributor.create({
            data: {
                name: body.name,
                cityId: body.cityId,
                areaId: body.areaId
            }
        });
        return NextResponse.json(distributor);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create distributor' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const distributor = await prisma.distributor.update({
            where: { id: body.id },
            data: {
                name: body.name,
                cityId: body.cityId,
                areaId: body.areaId
            }
        });
        return NextResponse.json(distributor);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update distributor' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        await prisma.distributor.delete({
            where: { id: body.id }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete distributor' }, { status: 500 });
    }
}
