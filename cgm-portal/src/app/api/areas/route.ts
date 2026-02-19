import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const cityId = searchParams.get('cityId');

    try {
        const areas = await prisma.area.findMany({
            where: cityId ? { cityId } : {},
            include: { city: true },
            orderBy: { name: 'asc' }
        });
        return NextResponse.json(areas);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch areas' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const area = await prisma.area.create({
            data: {
                name: body.name,
                cityId: body.cityId
            }
        });
        return NextResponse.json(area);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create area' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const area = await prisma.area.update({
            where: { id: body.id },
            data: {
                name: body.name,
                cityId: body.cityId
            }
        });
        return NextResponse.json(area);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update area' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        await prisma.area.delete({
            where: { id: body.id }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete area' }, { status: 500 });
    }
}
