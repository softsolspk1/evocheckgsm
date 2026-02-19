"use client";
import React, { useState, useEffect } from 'react';
import { X, Loader2, ShoppingCart } from 'lucide-react';

interface PlaceOrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

const PlaceOrderModal: React.FC<PlaceOrderModalProps> = ({ isOpen, onClose, onSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState<any[]>([]);
    const [kams, setKams] = useState<any[]>([]);
    const [distributors, setDistributors] = useState<any[]>([]);
    const [formData, setFormData] = useState<any>({
        patientName: '',
        patientPhone: '',
        cityId: '',
        kamId: '',
        distributorId: '',
        doctorName: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        if (isOpen) {
            fetchInitialData();
        }
    }, [isOpen]);

    const fetchInitialData = async () => {
        try {
            const [citiesRes, kamsRes, distRes] = await Promise.all([
                fetch('/api/cities'),
                fetch('/api/users?role=KAM'),
                fetch('/api/distributors')
            ]);

            setCities(await citiesRes.json());
            setKams(await kamsRes.json());
            setDistributors(await distRes.json());
        } catch (err) {
            console.error('Failed to fetch order form data', err);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Failed to place order');
            }

            onSuccess();
            onClose();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div>
                        <h3 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                            <ShoppingCart size={24} className="text-blue-500" />
                            Place New Order
                        </h3>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-0.5">Device Dispensing System</p>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-200 transition-colors">
                        <X size={20} className="text-slate-400" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {error && (
                        <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-sm font-bold animate-shake">
                            {error}
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Patient Information</h4>
                            <div className="field-group">
                                <label className="label">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    className="input"
                                    placeholder="Patient Name"
                                    value={formData.patientName}
                                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                                />
                            </div>
                            <div className="field-group">
                                <label className="label">Phone Number</label>
                                <input
                                    type="text"
                                    required
                                    className="input"
                                    placeholder="03xx-xxxxxxx"
                                    value={formData.patientPhone}
                                    onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Order Logistics</h4>
                            <div className="field-group">
                                <label className="label">City</label>
                                <select
                                    required
                                    className="input"
                                    value={formData.cityId}
                                    onChange={(e) => setFormData({ ...formData, cityId: e.target.value })}
                                >
                                    <option value="">Select City</option>
                                    {cities.map((c) => (
                                        <option key={c.id} value={c.id}>{c.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="field-group">
                                <label className="label">Doctor Name</label>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Doctor Name"
                                    value={formData.doctorName}
                                    onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 pt-2 border-t border-slate-50">
                        <div className="field-group">
                            <label className="label">KAM Representative</label>
                            <select
                                className="input"
                                value={formData.kamId}
                                onChange={(e) => setFormData({ ...formData, kamId: e.target.value })}
                            >
                                <option value="">Select KAM (Optional)</option>
                                {kams.map((k) => (
                                    <option key={k.id} value={k.id}>{k.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="field-group">
                            <label className="label">Distributor</label>
                            <select
                                className="input"
                                value={formData.distributorId}
                                onChange={(e) => setFormData({ ...formData, distributorId: e.target.value })}
                            >
                                <option value="">Select Distributor (Optional)</option>
                                {distributors.map((d) => (
                                    <option key={d.id} value={d.id}>{d.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="pt-6 flex gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-4 rounded-2xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-[2] btn-primary py-4 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <Loader2 size={20} className="animate-spin" />
                            ) : (
                                <span>Place Order Now</span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrderModal;
