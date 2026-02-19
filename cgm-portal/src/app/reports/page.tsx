"use client";
import React, { useState, useEffect } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, LineChart, Line, Legend
} from 'recharts';
import {
    BarChart3, Users, Package, MapPin, Download,
    FileText, Table as TableIcon, Loader2, Calendar
} from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function ReportsPage() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            const res = await fetch('/api/reports');
            const d = await res.json();
            setData(d);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const exportToExcel = () => {
        if (!data) return;
        const wb = XLSX.utils.book_new();

        const cityWS = XLSX.utils.json_to_sheet(data.cityDistribution);
        XLSX.utils.book_append_sheet(wb, cityWS, "City Distribution");

        const kamWS = XLSX.utils.json_to_sheet(data.kamPerformance);
        XLSX.utils.book_append_sheet(wb, kamWS, "KAM Performance");

        const inventoryWS = XLSX.utils.json_to_sheet(data.inventory);
        XLSX.utils.book_append_sheet(wb, inventoryWS, "Inventory Status");

        XLSX.writeFile(wb, "EVO_Pulse_Analytics_Report.xlsx");
    };

    const exportToPDF = () => {
        if (!data) return;
        const doc = new jsPDF() as any;
        doc.setFontSize(20);
        doc.text("PharmEvo EVO-Pulse Analytics Report", 14, 22);
        doc.setFontSize(10);
        doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 30);

        doc.autoTable({
            startY: 40,
            head: [['City Name', 'Total Orders']],
            body: data.cityDistribution.map((c: any) => [c.name, c.orders]),
        });

        doc.autoTable({
            startY: doc.lastAutoTable.finalY + 10,
            head: [['KAM Name', 'Converted Orders']],
            body: data.kamPerformance.map((k: any) => [k.name, k.orders]),
        });

        doc.save("EVO_Pulse_Report.pdf");
    };

    if (loading) return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
            <Loader2 className="animate-spin text-blue-500" size={48} />
            <p className="font-black text-slate-400 uppercase tracking-widest text-xs">Aggregating Global Analytics...</p>
        </div>
    );

    const COLORS = ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B', '#6366F1'];

    return (
        <div className="space-y-10 pb-20">
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Analytics Intelligence</h1>
                    <p className="text-slate-500 font-medium">Real-time performance metrics and distribution insights.</p>
                </div>
                <div className="flex gap-4">
                    <button onClick={exportToExcel} className="btn-secondary group flex items-center gap-2">
                        <TableIcon size={18} className="text-emerald-600" />
                        <span>Export Excel</span>
                    </button>
                    <button onClick={exportToPDF} className="btn-secondary group flex items-center gap-2">
                        <FileText size={18} className="text-rose-600" />
                        <span>Export PDF</span>
                    </button>
                </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Order Trend Line Chart */}
                <div className="card lg:col-span-2">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                            <Calendar size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-slate-800">Order Velocity</h3>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Last 7 Days Trend</p>
                        </div>
                    </div>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data.orderTrend}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                />
                                <Line type="monotone" dataKey="orders" stroke="#3B82F6" strokeWidth={4} dot={{ r: 6, fill: '#3B82F6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8, strokeWidth: 0 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* City Distribution Bar Chart */}
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
                            <BarChart data={data.cityDistribution}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
                                <Tooltip cursor={{ fill: '#F8FAFC' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                                <Bar dataKey="orders" fill="#6366F1" radius={[6, 6, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Inventory Pie Chart */}
                <div className="card">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-teal-50 text-teal-600 rounded-2xl">
                            <Package size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-slate-800">Inventory Distribution</h3>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Stock Health Globally</p>
                        </div>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data.inventory}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="available"
                                    nameKey="distributor"
                                >
                                    {data.inventory.map((entry: any, index: number) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Performance Ranking Table */}
            <div className="card">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                        <Users size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-slate-800">KAM Conversion Rankings</h3>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Top Performance Metrics</p>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left border-b border-slate-100">
                                <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-widest">Rank</th>
                                <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-widest">Representative</th>
                                <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-widest">City</th>
                                <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-widest text-right">Total Conversions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {data.kamPerformance.slice(0, 5).map((kam: any, index: number) => (
                                <tr key={index} className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="py-4 px-2 font-black text-slate-300">#{index + 1}</td>
                                    <td className="py-4 px-2 font-bold text-slate-800">{kam.name}</td>
                                    <td className="py-4 px-2 text-sm text-slate-500 font-medium">{kam.city || 'Global'}</td>
                                    <td className="py-4 px-2 text-right">
                                        <span className="inline-flex items-center justify-center min-w-10 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black">
                                            {kam.orders}
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
