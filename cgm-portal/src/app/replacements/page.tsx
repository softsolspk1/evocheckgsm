"use client";
import React, { useState, useEffect } from 'react';
import { RotateCcw, User, MapPin, Calendar, Clock, CheckCircle, XCircle, Loader2, Eye } from 'lucide-react';
import ReplacementDetailModal from '@/components/ReplacementDetailModal';

export default function ReplacementsPage() {
    const [replacements, setReplacements] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedReplacement, setSelectedReplacement] = useState<any>(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

    const fetchReplacements = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/replacements');
            const data = await res.json();
            setReplacements(Array.isArray(data) ? data : []);

            // Update selected replacement if it's currently open in modal
            if (selectedReplacement) {
                const updated = data.find((r: any) => r.id === selectedReplacement.id);
                if (updated) setSelectedReplacement(updated);
            }
        } catch (err) {
            console.error('Failed to fetch replacements', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReplacements();
    }, []);

    const updateStatus = async (id: string, status: string) => {
        try {
            const res = await fetch('/api/replacements', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status })
            });
            if (res.ok) fetchReplacements();
        } catch (err) {
            console.error('Failed to update replacement status', err);
        }
    };

    const openDetails = (replacement: any) => {
        setSelectedReplacement(replacement);
        setIsDetailModalOpen(true);
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Replacement Requests</h1>
                    <p className="text-slate-500 font-medium">Manage and approve device replacement requests.</p>
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
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Request Details</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Serial Number</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">KAM</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Days Rem.</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] text-center">Status</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {replacements.length > 0 ? replacements.map((req: any) => (
                                    <tr key={req.id} className="group transition-colors hover:bg-slate-50/50">
                                        <td className="py-5 px-2">
                                            <div className="font-bold text-slate-800">{req.month} Request</div>
                                            <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase mt-0.5">
                                                <Calendar size={12} />
                                                {new Date(req.createdAt).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="py-5 px-2">
                                            <span className="font-mono font-black text-slate-700 bg-slate-100 px-2 py-1 rounded text-xs">
                                                {req.cgmSerialNumber}
                                            </span>
                                        </td>
                                        <td className="py-5 px-2 text-sm font-bold text-slate-600">
                                            {req.kam?.name || 'Unknown'}
                                        </td>
                                        <td className="py-5 px-2 text-sm font-black text-blue-600">
                                            {req.daysRemaining} Days
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
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() => openDetails(req)}
                                                    className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                                                    title="View Details"
                                                >
                                                    <Eye size={16} />
                                                </button>
                                                {req.status === 'PENDING' && (
                                                    <>
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
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={6} className="py-20 text-center text-slate-300 italic">
                                            No replacement requests found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <ReplacementDetailModal
                isOpen={isDetailModalOpen}
                onClose={() => setIsDetailModalOpen(false)}
                replacement={selectedReplacement}
                onUpdateStatus={updateStatus}
            />
        </div>
    );
}
