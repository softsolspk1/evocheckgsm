"use client";
import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area
} from 'recharts';
import { AreaChart as AreaIcon, MapPin } from 'lucide-react';

interface DashboardChartsProps {
    trendData: { date: string; orders: number }[];
    cityDistribution: { name: string; orders: number }[];
    range: string;
}

const DashboardCharts = ({ trendData, cityDistribution, range }: DashboardChartsProps) => {
    const getTrendTitle = () => {
        if (range === 'today') return "Today's Order Velocity (Hourly)";
        if (range === 'month') return "Monthly Order Velocity (Daily)";
        return "YTD Order Velocity (Monthly)";
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Velocity Area Chart */}
            <div className="card p-8 bg-white border border-slate-100 shadow-sm rounded-[2rem]">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shadow-sm">
                            <AreaIcon size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-slate-800 tracking-tight">{getTrendTitle()}</h3>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em]">Order Volume Trends</p>
                        </div>
                    </div>
                </div>
                <div className="h-[320px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={trendData}>
                            <defs>
                                <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15} />
                                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F8FAFC" />
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 600 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 600 }}
                            />
                            <Tooltip
                                contentStyle={{
                                    borderRadius: '20px',
                                    border: 'none',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                                    padding: '12px 16px'
                                }}
                                cursor={{ stroke: '#3B82F6', strokeWidth: 2, strokeDasharray: '5 5' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="orders"
                                stroke="#3B82F6"
                                strokeWidth={4}
                                fillOpacity={1}
                                fill="url(#colorOrders)"
                                animationDuration={1500}
                                dot={{ r: 4, fill: '#3B82F6', strokeWidth: 2, stroke: '#fff' }}
                                activeDot={{ r: 6, strokeWidth: 0, fill: '#1E40AF' }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Geographic Spread Bar Chart */}
            <div className="card p-8 bg-white border border-slate-100 shadow-sm rounded-[2rem]">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl shadow-sm">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-slate-800 tracking-tight">Geographic Spread</h3>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em]">Orders per City ({range.toUpperCase()})</p>
                    </div>
                </div>
                <div className="h-[320px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={cityDistribution}>
                            <defs>
                                <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#6366F1" stopOpacity={1} />
                                    <stop offset="100%" stopColor="#818CF8" stopOpacity={0.8} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F8FAFC" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 600 }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 600 }}
                            />
                            <Tooltip
                                cursor={{ fill: '#F8FAFC' }}
                                contentStyle={{
                                    borderRadius: '20px',
                                    border: 'none',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                                    padding: '12px 16px'
                                }}
                            />
                            <Bar
                                dataKey="orders"
                                fill="url(#colorBar)"
                                radius={[12, 12, 0, 0]}
                                barSize={32}
                                animationDuration={1500}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashboardCharts;
