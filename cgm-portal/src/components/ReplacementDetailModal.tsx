"use client";
import React from 'react';
import { X, CheckCircle, XCircle, Calendar, Hash, User, MessageSquare, Image as ImageIcon, Loader2 } from 'lucide-react';

interface ReplacementDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    replacement: any;
    onUpdateStatus: (id: string, status: string) => Promise<void>;
}

const ReplacementDetailModal: React.FC<ReplacementDetailModalProps> = ({
    isOpen, onClose, replacement, onUpdateStatus
}) => {
    const [updating, setUpdating] = React.useState(false);

    if (!isOpen || !replacement) return null;

    const handleUpdate = async (status: string) => {
        setUpdating(true);
        await onUpdateStatus(replacement.id, status);
        setUpdating(false);
        onClose();
    };

    const ImageSection = ({ title, url }: { title: string, url?: string }) => (
        <div className="space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <ImageIcon size={12} />
                {title}
            </p>
            <div className="aspect-[4/3] rounded-2xl bg-slate-50 border-2 border-dashed border-slate-200 overflow-hidden flex items-center justify-center group relative">
                {url ? (
                    <>
                        <img src={url} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <a href={url} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold border border-white/30">
                                View Full Size
                            </a>
                        </div>
                    </>
                ) : (
                    <div className="text-center p-4">
                        <ImageIcon size={24} className="mx-auto text-slate-300 mb-2" />
                        <p className="text-[10px] text-slate-400 font-bold uppercase">No Image Uploaded</p>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-4xl relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="px-10 py-8 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${replacement.status === 'PENDING' ? 'bg-amber-100 text-amber-700' :
                                    replacement.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700' :
                                        'bg-rose-100 text-rose-700'
                                }`}>
                                {replacement.status}
                            </span>
                            <h3 className="text-2xl font-black text-slate-800 tracking-tight">{replacement.month} Replacement Request</h3>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Review device replacement details and documentation.</p>
                    </div>
                    <button onClick={onClose} className="p-3 rounded-2xl hover:bg-slate-200 transition-colors bg-white shadow-sm border border-slate-100">
                        <X size={24} className="text-slate-400" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Info Section */}
                        <div className="space-y-8">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Serial Number</p>
                                    <div className="flex items-center gap-2 text-slate-800">
                                        <Hash size={16} className="text-blue-500" />
                                        <span className="font-mono font-black text-lg">{replacement.cgmSerialNumber}</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">KAM Representative</p>
                                    <div className="flex items-center gap-2 text-slate-800 text-lg font-black">
                                        <User size={16} className="text-emerald-500" />
                                        {replacement.kam?.name || 'Unknown'}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date Reported</p>
                                    <div className="flex items-center gap-2 text-slate-600 font-bold">
                                        <Calendar size={16} className="text-slate-400" />
                                        {new Date(replacement.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Days Remaining</p>
                                    <div className="text-blue-600 font-black text-lg italic">
                                        {replacement.daysRemaining} Days
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-2">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                    <MessageSquare size={14} />
                                    Comments / Reason
                                </p>
                                <p className="text-slate-700 font-medium leading-relaxed">
                                    {replacement.comments || "No comments provided for this request."}
                                </p>
                            </div>
                        </div>

                        {/* Images Section */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <ImageSection title="App Picture" url={replacement.appPicture} />
                                <ImageSection title="Box Picture" url={replacement.boxPicture} />
                            </div>
                            <ImageSection title="Sensor on Arm" url={replacement.armPicture} />
                        </div>
                    </div>
                </div>

                {/* Actions */}
                {replacement.status === 'PENDING' && (
                    <div className="px-10 py-8 border-t border-slate-100 bg-slate-50/30 flex gap-4">
                        <button
                            onClick={() => handleUpdate('REJECTED')}
                            disabled={updating}
                            className="flex-1 py-4 rounded-2xl border-2 border-rose-100 text-rose-600 font-black flex items-center justify-center gap-2 hover:bg-rose-50 transition-all uppercase tracking-widest text-xs"
                        >
                            <XCircle size={20} />
                            Reject Request
                        </button>
                        <button
                            onClick={() => handleUpdate('APPROVED')}
                            disabled={updating}
                            className="flex-[2] py-4 rounded-2xl bg-emerald-600 text-white font-black flex items-center justify-center gap-2 hover:bg-emerald-700 shadow-xl shadow-emerald-500/20 transition-all uppercase tracking-widest text-xs"
                        >
                            {updating ? <Loader2 size={20} className="animate-spin" /> : <CheckCircle size={20} />}
                            Approve Replacement
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReplacementDetailModal;
