import React from 'react';
import { prisma } from '@/lib/prisma';

export default async function ReportsPage() {
    const cityDistribution = await prisma.city.findMany({
        include: { _count: { select: { orders: true } } }
    });

    const kamPerformance = await prisma.user.findMany({
        where: { role: 'KAM' },
        include: { _count: { select: { ordersAsKam: true } }, city: true },
        take: 5,
        orderBy: { ordersAsKam: { _count: 'desc' } }
    });

    const inventory = await prisma.inventory.findMany({
        include: {
            distributor: {
                include: { city: true }
            }
        }
    });

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Real-time Analytics & Reports</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card">
                    <h3 className="font-semibold mb-4 text-blue-800">City-wise Distribution</h3>
                    <div className="space-y-4">
                        {cityDistribution.map(city => (
                            <div key={city.id}>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium">{city.name}</span>
                                    <span className="font-bold">{city._count.orders}</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div
                                        className="bg-blue-500 h-2 rounded-full"
                                        style={{ width: `${Math.min((city._count.orders / 200) * 100, 100)}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <h3 className="font-semibold mb-4 text-blue-800">KAM Performance Ranking</h3>
                    <ul className="space-y-4">
                        {kamPerformance.map((kam, index) => (
                            <li key={kam.id} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                                <div className="flex items-center gap-3">
                                    <span className="text-gray-400 font-bold w-4">{index + 1}.</span>
                                    <div>
                                        <p className="font-medium text-gray-800">{kam.name}</p>
                                        <p className="text-xs text-gray-500">{kam.city?.name || 'Global'}</p>
                                    </div>
                                </div>
                                <span className="text-green-600 font-bold">{kam._count.ordersAsKam} Orders</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="card border-t-4 border-blue-500">
                <h3 className="font-semibold mb-4 text-blue-800">Inventory Status</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b text-gray-500 text-sm">
                                <th className="pb-3">Distributor</th>
                                <th className="pb-3">City</th>
                                <th className="pb-3">Total Stock</th>
                                <th className="pb-3 text-center">Available</th>
                                <th className="pb-3 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {inventory.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="py-4 font-medium">{item.distributor.name}</td>
                                    <td>{item.distributor.city.name}</td>
                                    <td>{item.totalStock}</td>
                                    <td className="text-center font-bold">{item.availableStock}</td>
                                    <td className="text-right">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${item.availableStock > 10 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                            }`}>
                                            {item.availableStock > 10 ? 'HEALTHY' : 'LOW STOCK'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
