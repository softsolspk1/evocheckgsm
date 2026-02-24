import MasterList from '@/components/MasterList';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function DistributorPage() {
    const distributors = await prisma.distributor.findMany({
        include: { city: true, area: true }
    });

    const displayData = distributors.map(d => ({
        ...d,
        cityName: d.city?.name || 'Unknown',
        areaName: d.area?.name || 'Unknown',
        typeLabel: d.type === 'PREMIER' ? 'Premier' : 'Service Provider',
        region: 'Pakistan',
    }));

    const columns = [
        { key: 'name', label: 'Distributor Name' },
        { key: 'cityName', label: 'City' },
        { key: 'areaName', label: 'Area' },
        { key: 'typeLabel', label: 'Type' },
    ];

    return <MasterList title="Distributor" data={displayData} columns={columns} type="Distributor" />;
}
