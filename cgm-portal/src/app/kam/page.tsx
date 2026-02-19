import MasterList from '@/components/MasterList';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function KamPage() {
    const kams = await prisma.user.findMany({
        where: { role: 'KAM' },
        include: { city: true }
    });

    const displayData = kams.map(kam => ({
        ...kam,
        city: kam.city?.name || 'Global',
    }));

    const columns = [
        { key: 'name', label: 'KAM Name' },
        { key: 'city', label: 'Assigned City' },
        { key: 'email', label: 'Email' },
        { key: 'phone', label: 'Phone' },
    ];

    return <MasterList title="KAM" data={displayData} columns={columns} type="KAM" />;
}
