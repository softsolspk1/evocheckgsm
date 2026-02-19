import MasterList from '@/components/MasterList';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function CityPage() {
    const cities = await prisma.city.findMany({
        include: { _count: { select: { areas: true } } }
    });

    const displayData = cities.map(city => ({
        ...city,
        region: 'Pakistan',
        areaCount: city._count.areas,
    }));

    const columns = [
        { key: 'name', label: 'City Name' },
        { key: 'region', label: 'Region' },
        { key: 'areaCount', label: 'Total Areas' },
    ];

    return <MasterList title="City" data={displayData} columns={columns} type="City" />;
}
