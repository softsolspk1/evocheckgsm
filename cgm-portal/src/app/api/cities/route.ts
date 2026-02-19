import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const cities = await prisma.city.findMany({
            orderBy: { name: 'asc' }
        });
        return NextResponse.json(cities);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch cities' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const city = await prisma.city.create({
            data: { name: body.name }
        });
        return NextResponse.json(city);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create city' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const city = await prisma.city.update({
            where: { id: body.id },
            data: { name: body.name }
        });
        return NextResponse.json(city);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update city' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        await prisma.city.delete({
            where: { id: body.id }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete city' }, { status: 500 });
    }
}
