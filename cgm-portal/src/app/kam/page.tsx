import MasterList from '@/components/MasterList';
import { prisma } from '@/lib/prisma';

export default async function KamPage() {
    const kams = await prisma.user.findMany({
        where: { role: 'KAM' },
        include: { city: true }
    });

    const displayData = kams.map(kam => ({
        ...kam,
        cityName: kam.city?.name || 'Unassigned',
    }));

    const columns = [
        { key: 'employeeCode', label: 'Employee Code' },
        { key: 'name', label: 'KAM Name' },
        { key: 'cityName', label: 'Assigned City' },
        { key: 'phone', label: 'Phone' },
    ];

    return <MasterList title="KAM" data={displayData} columns={columns} />;
}
