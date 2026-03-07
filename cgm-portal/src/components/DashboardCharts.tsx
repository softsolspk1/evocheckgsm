"use client";
import React, { useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    LineChart, Line
} from 'recharts';
import { Calendar, MapPin } from 'lucide-react';

interface DashboardChartsProps {
    orderTrend: { date: string; orders: number }[];
    cityDistribution: { name: string; orders: number }[];
    fullMonthTrend: { date: string; orders: number }[];
}

const DashboardCharts = ({ orderTrend, cityDistribution, fullMonthTrend }: DashboardChartsProps) => {
    const [chartRange, setChartRange] = useState<'7days' | 'month'>('7days');

    const displayTrend = chartRange === '7days' ? orderTrend : fullMonthTrend;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Velocity Line Chart */}
            <div className="card">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                            <Calendar size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-slate-800">Order Velocity</h3>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                                {chartRange === '7days' ? 'Last 7 Days Trend' : 'Current Month Trend'}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 bg-slate-50 p-1 rounded-lg border border-slate-100">
                        <button
                            onClick={() => setChartRange('7days')}
                            className={`px-3 py-1 rounded-md text-[10px] font-black transition-all ${chartRange === '7days' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'
                                }`}
                        >
                            7 DAYS
                        </button>
                        <button
                            onClick={() => setChartRange('month')}
                            className={`px-3 py-1 rounded-md text-[10px] font-black transition-all ${chartRange === 'month' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-400'
                                }`}
                        >
                            THIS MONTH
                        </button>
                    </div>
                </div>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={displayTrend}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10 }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10 }} />
                            <Tooltip
                                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                            />
                            <Line type="monotone" dataKey="orders" stroke="#3B82F6" strokeWidth={4} dot={{ r: 4, fill: '#3B82F6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6, strokeWidth: 0 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Geographic Spread Bar Chart */}
            <div className="card">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-slate-800">Geographic Spread</h3>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Orders per City</p>
                    </div>
                </div>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={cityDistribution}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10 }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10 }} />
                            <Tooltip cursor={{ fill: '#F8FAFC' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                            <Bar dataKey="orders" fill="#6366F1" radius={[6, 6, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashboardCharts;

