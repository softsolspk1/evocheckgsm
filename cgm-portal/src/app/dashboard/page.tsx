import React from 'react';
import { prisma } from '@/lib/prisma';

const Dashboard = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [todayOrders, monthlyOrders, kamCount, distributorCount] = await Promise.all([
        prisma.order.count({ where: { createdAt: { gte: today } } }),
        prisma.order.count({ where: { createdAt: { gte: new Date(today.getFullYear(), today.getMonth(), 1) } } }),
        prisma.user.count({ where: { role: 'KAM' } }),
        prisma.distributor.count(),
    ]);

    const stats = [
        { label: "Today's Orders", value: todayOrders.toString(), change: "+0%" },
        { label: "Monthly Orders", value: monthlyOrders.toString(), change: "+0%" },
        { label: "Active KAMs", value: kamCount.toString(), change: "0" },
        { label: "Distributors", value: distributorCount.toString(), change: "0" },
    ];

    const recentOrders = await prisma.order.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: { patient: true, city: true, kam: true }
    });

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="card">
                        <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                        <div className="flex items-end justify-between mt-2">
                            <h2 className="text-3xl font-bold text-gray-800">{stat.value}</h2>
                            <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                {stat.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card">
                    <h3 className="text-lg font-semibold mb-4">KAM Performance</h3>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                        <span className="text-gray-400 italic">Chart Placeholder: KAM Activity Level</span>
                    </div>
                </div>
                <div className="card">
                    <h3 className="text-lg font-semibold mb-4">Inventory Status by City</h3>
                    <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                        <span className="text-gray-400 italic">Chart Placeholder: Stock Distribution</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 card">
                <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="pb-3 px-2">Patient</th>
                            <th className="pb-3 px-2">City</th>
                            <th className="pb-3 px-2">KAM</th>
                            <th className="pb-3 px-2">Status</th>
                            <th className="pb-3 px-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrders.map((order) => (
                            <tr key={order.id} className="border-b last:border-0 hover:bg-gray-50">
                                <td className="py-3 px-2 font-medium">{order.patient.name}</td>
                                <td className="py-3 px-2">{order.city.name}</td>
                                <td className="py-3 px-2">{order.kam?.name || 'Unassigned'}</td>
                                <td className="py-3 px-2">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                                        }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="py-3 px-2 text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
