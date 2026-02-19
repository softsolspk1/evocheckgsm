import MasterList from '@/components/MasterList';
import { prisma } from '@/lib/prisma';

export default async function DistributorPage() {
    const distributors = await prisma.distributor.findMany({
        include: { city: true }
    });

    const displayData = distributors.map(d => ({
        ...d,
        cityName: d.city.name,
        contact: 'N/A', // Schema doesn't have contact yet, add placeholder
    }));

    const columns = [
        { key: 'name', label: 'Distributor Name' },
        { key: 'cityName', label: 'City' },
        { key: 'contact', label: 'Contact Number' },
    ];

    return <MasterList title="Distributor" data={displayData} columns={columns} />;
}
