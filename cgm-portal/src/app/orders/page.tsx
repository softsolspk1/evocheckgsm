import React from 'react';
import { prisma } from '@/lib/prisma';

export default async function OrdersPage() {
    const orders = await prisma.order.findMany({
        include: { patient: true, city: true, kam: true },
        orderBy: { createdAt: 'desc' }
    });

    const displayOrders = orders.map(o => ({
        id: o.id.substring(0, 8),
        patient: o.patient.name,
        city: o.city.name,
        kam: o.kam?.name || 'Unassigned',
        status: o.status,
        date: new Date(o.createdAt).toLocaleDateString()
    }));

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Order Management</h1>
                <button className="btn-primary">Place New Order</button>
            </div>

            <div className="card">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="pb-3 px-2">Order ID</th>
                            <th className="pb-3 px-2">Patient</th>
                            <th className="pb-3 px-2">City</th>
                            <th className="pb-3 px-2">KAM</th>
                            <th className="pb-3 px-2">Status</th>
                            <th className="pb-3 px-2">Date</th>
                            <th className="pb-3 px-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayOrders.map((order) => (
                            <tr key={order.id} className="border-b last:border-0 hover:bg-gray-50">
                                <td className="py-4 px-2 font-mono text-sm">#{order.id}</td>
                                <td className="py-4 px-2">{order.patient}</td>
                                <td className="py-4 px-2">{order.city}</td>
                                <td className="py-4 px-2">{order.kam}</td>
                                <td className="py-4 px-2">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                                        }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="py-4 px-2 text-gray-500">{order.date}</td>
                                <td className="py-4 px-2">
                                    <button className="text-blue-600 hover:underline mr-3 font-medium">View</button>
                                    {order.status === 'PENDING' && (
                                        <button className="text-green-600 hover:underline font-medium">Confirm</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
