"use client";
import React, { useState, useEffect } from 'react';
import { Stethoscope, User, Calendar, Loader2, TrendingUp, Trash2 } from 'lucide-react';

export default function DoctorVisitsPage() {
    const [visits, setVisits] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchVisits = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/doctor-visits');
            const data = await res.json();
            setVisits(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error('Failed to fetch doctor visits', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVisits();
    }, []);

    const deleteVisit = async (id: string) => {
        if (!confirm('Are you sure you want to delete this visit record?')) return;

        try {
            const res = await fetch('/api/doctor-visits', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            if (res.ok) fetchVisits();
        } catch (err) {
            console.error('Failed to delete doctor visit', err);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Doctor Visits Tracking</h1>
                    <p className="text-slate-500 font-medium">Monitor daily doctor visits logged by KAM representatives.</p>
                </div>
            </div>

            <div className="card">
                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-4">
                        <Loader2 size={40} className="animate-spin text-blue-500" />
                        <p className="font-bold uppercase tracking-widest text-xs">Loading Visits...</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b border-slate-100">
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">KAM Representative</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Visit Date</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] text-center">Total Visits</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] text-right">Performance</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {visits.length > 0 ? visits.map((visit: any) => (
                                    <tr key={visit.id} className="group transition-colors hover:bg-slate-50/50">
                                        <td className="py-5 px-2">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black text-xs">
                                                    {visit.kam?.name?.charAt(0) || 'U'}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-800">{visit.kam?.name || 'Unknown'}</div>
                                                    <div className="text-[10px] text-slate-400 font-bold uppercase">{visit.kam?.city?.name || 'All Cities'}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5 px-2">
                                            <div className="flex items-center gap-1 text-sm font-semibold text-slate-600">
                                                <Calendar size={14} className="text-slate-400" />
                                                {new Date(visit.visitDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </div>
                                        </td>
                                        <td className="py-5 px-2 text-center">
                                            <span className="inline-flex px-4 py-1.5 rounded-xl bg-blue-50 text-blue-700 font-black text-lg">
                                                {visit.visitCount}
                                            </span>
                                        </td>
                                        <td className="py-5 px-2 text-right">
                                            <div className="flex flex-col items-end">
                                                <div className={`flex items-center gap-1 text-xs font-black ${visit.visitCount >= 10 ? 'text-emerald-500' : 'text-amber-500'}`}>
                                                    <TrendingUp size={12} />
                                                    {visit.visitCount >= 10 ? 'Exceeding Target' : 'Below Target'}
                                                </div>
                                                <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full ${visit.visitCount >= 10 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                                                        style={{ width: `${Math.min((visit.visitCount / 10) * 100, 100)}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5 px-2 text-right">
                                            <button
                                                onClick={() => deleteVisit(visit.id)}
                                                className="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                                                title="Delete Visit"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="py-20 text-center text-slate-300 italic">
                                            No doctor visits recorded yet.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
