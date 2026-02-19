import { prisma } from '@/lib/prisma';

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

    const [todayOrders, monthlyOrders, kamCount, distributorCount] = await Promise.all([
        prisma.order.count({ where: { createdAt: { gte: todayStart } } }),
        prisma.order.count({ where: { createdAt: { gte: new Date(today.getFullYear(), today.getMonth(), 1) } } }),
        prisma.user.count({ where: { role: 'KAM' } }),
        prisma.distributor.count(),
    ]);

    const stats = [
        { label: "Today's Orders", value: todayOrders.toString(), change: "+12%", trend: 'up', icon: ShoppingCart, color: 'text-blue-500', bg: 'bg-blue-50' },
        { label: "Monthly Growth", value: monthlyOrders.toString(), change: "+8%", trend: 'up', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { label: "Active KAMs", value: kamCount.toString(), change: "Stable", trend: 'up', icon: UserPlus, color: 'text-indigo-500', bg: 'bg-indigo-50' },
        { label: "Network Distributors", value: distributorCount.toString(), change: "-2%", trend: 'down', icon: Truck, color: 'text-orange-500', bg: 'bg-orange-50' },
    ];

    const recentOrders = await prisma.order.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: { patient: true, city: true, kam: true }
    });

    const kamData = [
        { name: 'Peshawar', score: 85 },
        { name: 'Karachi', score: 72 },
        { name: 'Lahore', score: 64 },
        { name: 'Islamabad', score: 58 },
        { name: 'Quetta', score: 45 },
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

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Recent Orders Table */}
                <div className="xl:col-span-2 card">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-black text-slate-800 tracking-tight">Recent Activity</h3>
                            <p className="text-sm text-slate-500 font-medium">Latest orders processed across cities.</p>
                        </div>
                        <button className="text-slate-400 hover:text-slate-600">
                            <MoreVertical size={20} />
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b border-slate-100">
                                    <th className="pb-4 font-bold text-slate-400">Patient Details</th>
                                    <th className="pb-4 font-bold text-slate-400">Location</th>
                                    <th className="pb-4 font-bold text-slate-400">KAM Assigned</th>
                                    <th className="pb-4 font-bold text-slate-400 text-center">Status</th>
                                    <th className="pb-4 font-bold text-slate-400 text-right">Processed</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {recentOrders.map((order: any) => (
                                    <tr key={order.id} className="group transition-colors hover:bg-slate-50/50">
                                        <td className="py-4">
                                            <div className="font-bold text-slate-800">{order.patient.name}</div>
                                            <div className="text-xs text-slate-400 font-medium tracking-tight">ID: #{order.id.slice(-6).toUpperCase()}</div>
                                        </td>
                                        <td className="py-4">
                                            <div className="text-sm font-semibold text-slate-600 flex items-center gap-1">
                                                <MapPin size={14} className="text-slate-400" />
                                                {order.city.name}
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <div className="text-sm font-bold text-slate-700">{order.kam?.name || '---'}</div>
                                        </td>
                                        <td className="py-4 text-center">
                                            <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${order.status === 'PENDING' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-right text-sm font-bold text-slate-500">
                                            {new Date(order.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Performance Chart */}
                <div className="space-y-6">
                    <div className="card">
                        <h3 className="text-lg font-black text-slate-800 tracking-tight mb-6">KAM Efficiency</h3>
                        <KAMPerformanceChart data={kamData} />
                    </div>

                    <div className="card bg-primary p-6 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                            <TrendingUp size={80} />
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-white/80 font-bold uppercase tracking-widest text-xs mb-1">Logistics Health</h4>
                            <p className="text-2xl font-black mb-4">Stable</p>
                            <div className="text-sm font-medium text-white/90 leading-relaxed">
                                All distributor networks are reporting active stock levels. No disruptions detected in major hubs.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
