"use client";
import React, { useState, useEffect } from 'react';
import { RefreshCw, User, Calendar, CheckCircle, XCircle, Loader2 } from 'lucide-react';

export default function RefundsPage() {
    const [refunds, setRefunds] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchRefunds = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/refunds');
            const data = await res.json();
            setRefunds(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error('Failed to fetch refunds', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRefunds();
    }, []);

    const updateStatus = async (id: string, status: string) => {
        try {
            const res = await fetch('/api/refunds', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status })
            });
            if (res.ok) fetchRefunds();
        } catch (err) {
            console.error('Failed to update refund status', err);
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Refund Requests</h1>
                    <p className="text-slate-500 font-medium">Manage and process patient refund requests.</p>
                </div>
            </div>

            <div className="card">
                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-4">
                        <Loader2 size={40} className="animate-spin text-blue-500" />
                        <p className="font-bold uppercase tracking-widest text-xs">Loading Requests...</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b border-slate-100">
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Patient</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">KAM</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Date</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] text-center">Status</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {refunds.length > 0 ? refunds.map((req: any) => (
                                    <tr key={req.id} className="group transition-colors hover:bg-slate-50/50">
                                        <td className="py-5 px-2">
                                            <div className="font-bold text-slate-800">{req.patient?.name || 'Unknown'}</div>
                                            <div className="text-[10px] text-slate-400 font-bold uppercase">{req.patient?.phone || 'No Phone'}</div>
                                        </td>
                                        <td className="py-5 px-2 text-sm font-bold text-slate-600">
                                            {req.kam?.name || 'Unknown'}
                                        </td>
                                        <td className="py-5 px-2">
                                            <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase">
                                                <Calendar size={12} />
                                                {new Date(req.createdAt).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="py-5 px-2 text-center">
                                            <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${req.status === 'PENDING' ? 'bg-amber-100 text-amber-700' :
                                                    req.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700' :
                                                        'bg-rose-100 text-rose-700'
                                                }`}>
                                                {req.status}
                                            </span>
                                        </td>
                                        <td className="py-5 px-2 text-right">
                                            {req.status === 'PENDING' && (
                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        onClick={() => updateStatus(req.id, 'APPROVED')}
                                                        className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all shadow-sm"
                                                        title="Approve"
                                                    >
                                                        <CheckCircle size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => updateStatus(req.id, 'REJECTED')}
                                                        className="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                                                        title="Reject"
                                                    >
                                                        <XCircle size={16} />
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="py-20 text-center text-slate-300 italic">
                                            No refund requests found.
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
