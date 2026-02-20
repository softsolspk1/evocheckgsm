import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const inventory = await prisma.inventory.findMany({
            include: {
                distributor: {
                    include: {
                        city: true,
                        area: true
                    }
                }
            }
        });

        const formatted = inventory.map(item => ({
            id: item.id,
            distributorName: item.distributor.name,
            cityName: item.distributor.city?.name || 'Unknown',
            areaName: item.distributor.area?.name || 'Unknown',
            totalStock: item.totalStock,
            availableStock: item.availableStock,
            allocatedStock: item.allocatedStock,
            lastUpdated: item.lastUpdated
        }));

        return NextResponse.json(formatted);
    } catch (error) {
        console.error('Inventory fetch error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
