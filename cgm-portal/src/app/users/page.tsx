import MasterList from '@/components/MasterList';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function UsersPage() {
    const users = await prisma.user.findMany();

    const columns = [
        { key: 'name', label: 'User Name' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' },
        { key: 'employeeCode', label: 'Code' },
    ];

    return <MasterList title="User" data={users} columns={columns} type="User" />;
}
