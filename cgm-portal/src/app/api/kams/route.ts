import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const kam = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password, // In a real app, hash this
                employeeCode: body.employeeCode,
                phone: body.phone,
                cityId: body.cityId,
                role: 'KAM'
            }
        });
        return NextResponse.json(kam);
    } catch (error: any) {
        console.error(error);
        if (error.code === 'P2002') {
            return NextResponse.json({ error: 'Email or Employee Code already exists' }, { status: 400 });
        }
        return NextResponse.json({ error: 'Failed to create KAM' }, { status: 500 });
    }
}
