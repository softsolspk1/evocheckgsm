import MasterList from '@/components/MasterList';
import { prisma } from '@/lib/prisma';

export default async function DistributorPage() {
    const distributors = await prisma.distributor.findMany({
        include: { city: true, area: true }
    });

    const displayData = distributors.map(d => ({
        ...d,
        cityName: d.city?.name || 'Unknown',
        areaName: d.area?.name || 'Unknown',
        region: 'Pakistan',
    }));

    const columns = [
        { key: 'name', label: 'Distributor Name' },
        { key: 'cityName', label: 'City' },
        { key: 'areaName', label: 'Area' },
    ];

    return <MasterList title="Distributor" data={displayData} columns={columns} type="Distributor" />;
}
