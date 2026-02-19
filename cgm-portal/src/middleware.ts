import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/diagnostic-reachable') {
        return NextResponse.json({ status: 'Next.js Runtime Reachable' });
    }
}

export const config = {
    matcher: '/diagnostic-reachable',
};
