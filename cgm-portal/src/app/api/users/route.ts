import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const users = await prisma.user.findMany({
            include: { city: true },
            orderBy: { name: 'asc' }
        });
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password, // In real app, hash this
                role: body.role,
                employeeCode: body.employeeCode,
                cityId: body.cityId
            }
        });
        return NextResponse.json(user);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const user = await prisma.user.update({
            where: { id: body.id },
            data: {
                name: body.name,
                email: body.email,
                role: body.role,
                employeeCode: body.employeeCode,
                cityId: body.cityId
            }
        });
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        await prisma.user.delete({
            where: { id: body.id }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
    }
}
