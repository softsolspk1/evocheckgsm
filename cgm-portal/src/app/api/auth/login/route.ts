import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user || user.password !== password) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Exclude password from response
        const { password: _, ...userWithoutPassword } = user;

        return NextResponse.json(userWithoutPassword);
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
