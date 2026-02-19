import MasterList from '@/components/MasterList';
import { prisma } from '@/lib/prisma';

export default async function AreaPage() {
    const areas = await prisma.area.findMany({
        include: { city: true }
    });

    const displayData = areas.map(area => ({
        ...area,
        cityName: area.city.name,
    }));

    const columns = [
        { key: 'name', label: 'Area Name' },
        { key: 'cityName', label: 'City' },
    ];

    return <MasterList title="Area" data={displayData} columns={columns} />;
}
