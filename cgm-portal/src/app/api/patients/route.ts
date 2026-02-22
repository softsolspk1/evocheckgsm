import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const patients = await prisma.patient.findMany({
            include: { city: true },
            orderBy: { name: 'asc' }
        });
        return NextResponse.json(patients);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch patients' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const patient = await prisma.patient.create({
            data: {
                name: body.name,
                phone: body.phone,
                email: body.email,
                address: body.address,
                cityId: body.cityId
            }
        });
        return NextResponse.json(patient);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create patient' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const patient = await prisma.patient.update({
            where: { id: body.id },
            data: {
                name: body.name,
                phone: body.phone,
                email: body.email,
                address: body.address,
                cityId: body.cityId
            }
        });
        return NextResponse.json(patient);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update patient' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        await prisma.patient.delete({
            where: { id: body.id }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete patient' }, { status: 500 });
    }
}
