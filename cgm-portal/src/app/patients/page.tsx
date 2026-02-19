import MasterList from '@/components/MasterList';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function PatientsPage() {
    const patients = await prisma.patient.findMany({
        include: { city: true }
    });

    const displayData = patients.map(p => ({
        ...p,
        cityName: p.city?.name || 'Unknown',
        status: 'Active',
    }));

    const columns = [
        { key: 'name', label: 'Patient Name' },
        { key: 'phone', label: 'Contact Number' },
        { key: 'cityName', label: 'City' },
        { key: 'status', label: 'Status' },
    ];

    return <MasterList title="Patient" data={displayData} columns={columns} type="Patient" />;
}
