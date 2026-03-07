import { prisma } from '@/lib/prisma';
import React from 'react';
import {
    ShoppingCart,
    TrendingUp,
    UserPlus,
    Truck,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    Users,
    Activity,
    PackageCheck,
    RefreshCw
} from 'lucide-react';

import DashboardCharts from '@/components/DashboardCharts';

export const dynamic = 'force-dynamic';

const Dashboard = async () => {
    const today = new Date();
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const [
        todayOrders,
        todayVisits,
        todayInstallations,
        todayReplacements,
        todayPatients,
        todaySupplied
    ] = await Promise.all([
        prisma.order.count({ where: { createdAt: { gte: todayStart } } }),
        prisma.doctorVisit.aggregate({
            where: { visitDate: { gte: todayStart } },
            _sum: { visitCount: true }
        }).then(res => res._sum.visitCount || 0),
        prisma.postAdministrationForm.count({ where: { createdAt: { gte: todayStart } } }),
        prisma.replacementRequest.count({ where: { createdAt: { gte: todayStart } } }),
        prisma.patient.count({ where: { createdAt: { gte: todayStart } } }),
        prisma.order.count({
            where: {
                updatedAt: { gte: todayStart },
                status: { in: ['DELIVERED', 'COMPLETED'] }
            }
        }),
    ]);

    // Fetch Chart Data
    const cityDistributionData = await prisma.city.findMany({
        include: { _count: { select: { orders: true } } }
    });

    const dailyOrders = await prisma.order.groupBy({
        by: ['createdAt'],
        _count: { id: true },
        orderBy: { createdAt: 'asc' }
    });

    const ordersByDate = dailyOrders.reduce((acc: any, curr: any) => {
        const date = new Date(curr.createdAt).toLocaleDateString();
        acc[date] = (acc[date] || 0) + curr._count.id;
        return acc;
    }, {});

    const orderTrend = Object.entries(ordersByDate).map(([date, count]) => ({
        date,
        orders: count as number
    })).slice(-7);

    const installations = await prisma.postAdministrationForm.findMany({
        take: 10,
        orderBy: { visitDate: 'desc' },
        include: { patient: true }
    });

    const recentOrdersAnalytics = await prisma.order.findMany({
        orderBy: { createdAt: 'desc' },
        where: {
            createdAt: { gte: new Date(new Date().setDate(new Date().getDate() - 7)) } // Last 7 days
        },
        include: { kam: true, patient: true }
    });

    // Group analytics data by Date, then by KAM, counting Patient Names (orders)
    const pivotData = recentOrdersAnalytics.reduce((acc: any, order) => {
        const dateStr = new Date(order.createdAt).toLocaleDateString();
        if (!acc[dateStr]) acc[dateStr] = {};

        const kamName = order.kam?.name || 'Unknown KAM';
        if (!acc[dateStr][kamName]) acc[dateStr][kamName] = 0;

        acc[dateStr][kamName]++;
        return acc;
    }, {});

    const statBoxes = [
        {
            title: "TODAY'S ACTIVITY",
            stats: [
                { label: "DOCTOR VISITS", value: todayVisits, icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
                { label: "PATIENTS", value: todayPatients, icon: Users, color: "text-blue-600", bg: "bg-blue-50" }
            ]
        },
        {
            title: "TODAY'S ORDERS",
            stats: [
                { label: "ORDER PLACED", value: todayOrders, icon: ShoppingCart, color: "text-indigo-600", bg: "bg-indigo-50" },
                { label: "ORDER SUPPLIED", value: todaySupplied, icon: PackageCheck, color: "text-amber-600", bg: "bg-amber-50" }
            ]
        },
        {
            title: "TODAY'S OPERATIONS",
            stats: [
                { label: "SENSOR INSTALLATION", value: todayInstallations, icon: Activity, color: "text-violet-600", bg: "bg-violet-50" },
                { label: "REPLACEMENT", value: todayReplacements, icon: RefreshCw, color: "text-rose-600", bg: "bg-rose-50" }
            ]
        }
    ];

    return (
        <div className="space-y-10">
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Dashboard Overview</h1>
                    <p className="text-slate-500 font-medium">Monitoring platform activity and logistics metrics.</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 italic text-slate-500">
                    <Calendar size={18} />
                    <span>{today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
            </div>

            {/* Stats Grid - 3 Boxes with 2 stats each */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {statBoxes.map((box, idx) => (
                    <div key={idx} className="card p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">{box.title}</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {box.stats.map((stat, sIdx) => (
                                <div key={sIdx} className="space-y-2">
                                    <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-2`}>
                                        <stat.icon size={20} />
                                    </div>
                                    <p className="text-2xl font-black text-slate-800 tracking-tight">{stat.value}</p>
                                    <p className="text-[10px] font-bold text-slate-500 leading-tight uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <DashboardCharts
                orderTrend={orderTrend}
                cityDistribution={cityDistributionData.map(c => ({ name: c.name, orders: c._count.orders }))}
            />

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* KAM Performance (Pivot) */}
                <div className="card">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-black text-slate-800 tracking-tight">KAM's Performance</h3>
                            <p className="text-sm text-slate-500 font-medium">Order conversions and patient engagement.</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left border-b border-slate-200 bg-slate-50">
                                    <th className="p-4 font-black text-slate-700 uppercase tracking-widest text-[10px]">Row Labels</th>
                                    <th className="p-4 font-black text-slate-700 text-right uppercase tracking-widest text-[10px]">Count of Patient Name</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {Object.keys(pivotData).map(dateStr => (
                                    <React.Fragment key={dateStr}>
                                        <tr className="bg-sky-50/50">
                                            <td className="p-4 font-black text-slate-800 flex items-center gap-2">
                                                <div className="w-4 h-4 rounded border border-slate-300 flex items-center justify-center text-[10px] text-slate-500">-</div>
                                                {dateStr}
                                            </td>
                                            <td className="p-4 font-black text-slate-800 text-right">
                                                {Object.values(pivotData[dateStr]).reduce((a: any, b: any) => a + b, 0) as number}
                                            </td>
                                        </tr>
                                        {Object.entries(pivotData[dateStr]).map(([kam, count]) => (
                                            <tr key={`${dateStr}-${kam}`} className="hover:bg-slate-50 transition-colors">
                                                <td className="p-4 pl-12 text-slate-600 font-medium">{kam}</td>
                                                <td className="p-4 text-right text-slate-700 font-bold">{count as React.ReactNode}</td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Device Installation / Expiry Table */}
                <div className="card">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-black text-slate-800 tracking-tight">Device Installations</h3>
                            <p className="text-sm text-slate-500 font-medium">Active installations and expiry tracking.</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left border-b border-slate-200 bg-slate-50">
                                    <th className="p-4 font-black text-slate-700 uppercase tracking-widest text-[10px]">Patient Details</th>
                                    <th className="p-4 font-black text-slate-700 uppercase tracking-widest text-[10px]">Installation Date</th>
                                    <th className="p-4 font-black text-slate-700 text-right uppercase tracking-widest text-[10px]">Expire Days</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {installations.map((inst: any) => {
                                    const instDate = new Date(inst.visitDate);
                                    const expiryDate = new Date(instDate);
                                    expiryDate.setDate(expiryDate.getDate() + 15);

                                    const diffTime = expiryDate.getTime() - today.getTime();
                                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                                    const isExpired = diffDays <= 0;
                                    const isWarning = diffDays > 0 && diffDays <= 3;

                                    return (
                                        <tr key={inst.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="p-4">
                                                <div className="font-bold text-slate-800">{inst.patientName || inst.patient?.name || 'Unknown'}</div>
                                                <div className="text-[10px] text-slate-400 font-bold tracking-tight uppercase">SN: {inst.serialNumber || 'N/A'}</div>
                                            </td>
                                            <td className="p-4 font-medium text-slate-600">
                                                {instDate.toLocaleDateString()}
                                            </td>
                                            <td className="p-4 text-right">
                                                <span className={`inline-flex px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${isExpired ? 'bg-rose-100 text-rose-700' :
                                                    isWarning ? 'bg-amber-100 text-amber-700' :
                                                        'bg-emerald-100 text-emerald-700'
                                                    }`}>
                                                    {isExpired ? 'Expired' : `${diffDays} Days`}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

