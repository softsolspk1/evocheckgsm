import { prisma } from '@/lib/prisma';
import React from 'react';

export const dynamic = 'force-dynamic';
import {
    ShoppingCart,
    TrendingUp,
    UserPlus,
    Truck,
    Calendar,
    ArrowUpRight,
    ArrowDownRight,
    MoreVertical,
    MapPin
} from 'lucide-react';

import KAMPerformanceChart from '@/components/KAMPerformanceChart';

const Dashboard = async () => {
    const today = new Date();
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const [todayOrders, todayVisits, todayInstallations, todayRefunds] = await Promise.all([
        prisma.order.count({ where: { createdAt: { gte: todayStart } } }),
        prisma.doctorVisit.aggregate({
            where: { visitDate: { gte: todayStart } },
            _sum: { visitCount: true }
        }).then(res => res._sum.visitCount || 0),
        prisma.postAdministrationForm.count({ where: { createdAt: { gte: todayStart } } }),
        prisma.refundRequest.count({ where: { createdAt: { gte: todayStart } } }),
    ]);

    const stats = [
        { label: "Today's Orders", value: todayOrders.toString(), change: "+12%", trend: 'up', icon: ShoppingCart, color: 'text-blue-500', bg: 'bg-blue-50' },
        { label: "Today's Doctor Visits", value: todayVisits.toString(), change: "+8%", trend: 'up', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { label: "Today's Installation", value: todayInstallations.toString(), change: "Stable", trend: 'up', icon: UserPlus, color: 'text-indigo-500', bg: 'bg-indigo-50' },
        { label: "Today's Refund Request", value: todayRefunds.toString(), change: "-2%", trend: 'down', icon: Truck, color: 'text-orange-500', bg: 'bg-orange-50' },
    ];

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
        include: { kam: true }
    });

    // Group analytics data by Date, then by KAM
    const pivotData = recentOrdersAnalytics.reduce((acc: any, order) => {
        const dateStr = new Date(order.createdAt).toLocaleDateString();
        if (!acc[dateStr]) acc[dateStr] = {};

        const kamName = order.kam?.name || 'Unknown KAM';
        if (!acc[dateStr][kamName]) acc[dateStr][kamName] = 0;

        acc[dateStr][kamName]++;
        return acc;
    }, {});


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

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.label} className="card group hover:border-primary/30">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} transition-colors group-hover:bg-primary group-hover:text-white`}>
                                    <Icon size={24} />
                                </div>
                                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.trend === 'up' ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'
                                    }`}>
                                    {stat.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                    {stat.change}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-1">{stat.label}</h3>
                                <p className="text-3xl font-black text-slate-800">{stat.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Analytics Table (Pivot) */}
                <div className="card">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-black text-slate-800 tracking-tight">Analytics</h3>
                            <p className="text-sm text-slate-500 font-medium">Order counts by Date and KAM.</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left border-b border-slate-200 bg-slate-50">
                                    <th className="p-3 font-black text-slate-700">Row Labels</th>
                                    <th className="p-3 font-black text-slate-700 text-right">Count of Orders</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {Object.keys(pivotData).map(dateStr => (
                                    <React.Fragment key={dateStr}>
                                        <tr className="bg-sky-50/50">
                                            <td className="p-3 font-black text-slate-800 flex items-center gap-2">
                                                <div className="w-4 h-4 rounded border border-slate-300 flex items-center justify-center text-[10px] text-slate-500">-</div>
                                                {dateStr}
                                            </td>
                                            <td className="p-3 font-black text-slate-800 text-right">
                                                {Object.values(pivotData[dateStr]).reduce((a: any, b: any) => a + b, 0) as number}
                                            </td>
                                        </tr>
                                        {Object.entries(pivotData[dateStr]).map(([kam, count]) => (
                                            <tr key={`${dateStr}-${kam}`} className="hover:bg-slate-50">
                                                <td className="p-3 pl-10 text-slate-600 font-medium text-sm">{kam}</td>
                                                <td className="p-3 text-right text-slate-700 font-semibold">{count as React.ReactNode}</td>
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
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-xl font-black text-slate-800 tracking-tight">Device Installations</h3>
                            <p className="text-sm text-slate-500 font-medium">Active installations and expiry tracking.</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left border-b border-slate-200 bg-slate-50">
                                    <th className="p-3 font-black text-slate-700">Patient Details</th>
                                    <th className="p-3 font-black text-slate-700">Installation Date</th>
                                    <th className="p-3 font-black text-slate-700 text-right">Expire Days</th>
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
                                            <td className="p-3">
                                                <div className="font-bold text-slate-800">{inst.patientName || inst.patient?.name || 'Unknown'}</div>
                                                <div className="text-xs text-slate-400 font-medium tracking-tight">SN: {inst.serialNumber || 'N/A'}</div>
                                            </td>
                                            <td className="p-3 font-medium text-slate-600">
                                                {instDate.toLocaleDateString()}
                                            </td>
                                            <td className="p-3 text-right">
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
