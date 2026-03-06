import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
        const replacements = await prisma.replacementRequest.findMany({
            include: { kam: true },
            orderBy: { createdAt: 'desc' }
        });
        return NextResponse.json(replacements);
    } catch (error) {
        console.error('Fetch replacements error:', error);
        return NextResponse.json({ error: 'Failed to fetch replacements' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const replacement = await prisma.replacementRequest.create({
            data: {
                kamId: body.kamId,
                distributorId: body.distributorId,
                cgmSerialNumber: body.cgmSerialNumber,
                daysRemaining: parseInt(body.daysRemaining),
                month: body.month,
                comments: body.comments,
                appPicture: body.appPicture,
                boxPicture: body.boxPicture,
                armPicture: body.armPicture,
                status: 'PENDING'
            }
        });
        return NextResponse.json(replacement);
    } catch (error) {
        console.error('Create replacement error:', error);
        return NextResponse.json({ error: 'Failed to create replacement' }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const replacement = await prisma.replacementRequest.update({
            where: { id: body.id },
            data: { status: body.status }
        });
        return NextResponse.json(replacement);
    } catch (error) {
        console.error('Update replacement error:', error);
        return NextResponse.json({ error: 'Failed to update replacement' }, { status: 500 });
    }
}
