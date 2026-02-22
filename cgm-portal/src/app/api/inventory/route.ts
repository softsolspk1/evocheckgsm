import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const distributorId = searchParams.get('distributorId');

        let where: any = {};
        if (distributorId) where.distributorId = distributorId;

        const inventory = await prisma.inventory.findMany({
            where,
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

export async function POST(req: Request) {
    try {
        const { distributorId, quantity } = await req.json();

        if (!distributorId || !quantity) {
            return NextResponse.json({ error: 'Distributor and quantity are required' }, { status: 400 });
        }

        const inventory = await prisma.inventory.upsert({
            where: { id: `${distributorId}-inv` },
            update: {
                totalStock: { increment: parseInt(quantity) },
                availableStock: { increment: parseInt(quantity) }
            },
            create: {
                id: `${distributorId}-inv`,
                distributorId,
                totalStock: parseInt(quantity),
                availableStock: parseInt(quantity)
            }
        });

        return NextResponse.json(inventory);
    } catch (error) {
        console.error('Inventory update error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function PATCH(req: Request) {
    try {
        const { id, totalStock, availableStock, allocatedStock } = await req.json();

        if (!id) {
            return NextResponse.json({ error: 'Inventory ID is required' }, { status: 400 });
        }

        const inventory = await prisma.inventory.update({
            where: { id },
            data: {
                totalStock: totalStock !== undefined ? parseInt(totalStock) : undefined,
                availableStock: availableStock !== undefined ? parseInt(availableStock) : undefined,
                allocatedStock: allocatedStock !== undefined ? parseInt(allocatedStock) : undefined,
            }
        });

        return NextResponse.json(inventory);
    } catch (error) {
        console.error('Inventory edit error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
