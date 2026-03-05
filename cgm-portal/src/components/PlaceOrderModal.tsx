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
        orderType: 'REGULAR',
        patientName: '',
        patientPhone: '',
        patientEmail: '',
        patientAddress: '',
        age: '',
        gender: '',
        cityId: '',
        kamId: '',
        distributorId: '',
        doctorName: '',
        orderTo: 'PREMIER',
        doctorCity: '',
        clinicHospital: '',
        product: '',
        serialNumber: '',
        startingMonth: '',
        quantity: '',
        prescription: '',
        source: 'CSR'
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

                    <div className="space-y-6">
                        <div className="field-group">
                            <label className="label">Order Type</label>
                            <select
                                required
                                className="input font-bold text-blue-600 bg-blue-50/30"
                                value={formData.orderType}
                                onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
                            >
                                <option value="REGULAR">Regular Order</option>
                                <option value="FOC">FOC</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            {/* Left Column: Patient Details */}
                            <div className="space-y-4">
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Patient Information</h4>
                                <div className="field-group">
                                    <label className="label">Patient Mobile*</label>
                                    <input
                                        type="text"
                                        required
                                        className="input"
                                        placeholder="03xx-xxxxxxx"
                                        value={formData.patientPhone}
                                        onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                                    />
                                </div>
                                <div className="field-group">
                                    <label className="label">Patient Name*</label>
                                    <input
                                        type="text"
                                        required
                                        className="input"
                                        placeholder="Full Name"
                                        value={formData.patientName}
                                        onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="field-group">
                                        <label className="label">Age*</label>
                                        <input
                                            type="number"
                                            required
                                            className="input"
                                            placeholder="Age"
                                            value={formData.age}
                                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                        />
                                    </div>
                                    <div className="field-group">
                                        <label className="label">Gender*</label>
                                        <select
                                            required
                                            className="input"
                                            value={formData.gender}
                                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="field-group">
                                    <label className="label">City*</label>
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
                                    <label className="label">Address*</label>
                                    <textarea
                                        required
                                        className="input min-h-[80px]"
                                        placeholder="Full Address"
                                        value={formData.patientAddress}
                                        onChange={(e) => setFormData({ ...formData, patientAddress: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Right Column: Order Details */}
                            <div className="space-y-4">
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">Professional Details</h4>
                                <div className="field-group">
                                    <label className="label">Doctor Name</label>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Dr. Name"
                                        value={formData.doctorName}
                                        onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                                    />
                                </div>
                                <div className="field-group">
                                    <label className="label">Clinic / Hospital</label>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Hospital Name"
                                        value={formData.clinicHospital}
                                        onChange={(e) => setFormData({ ...formData, clinicHospital: e.target.value })}
                                    />
                                </div>
                                <div className="field-group">
                                    <label className="label">Doctor City</label>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="City"
                                        value={formData.doctorCity}
                                        onChange={(e) => setFormData({ ...formData, doctorCity: e.target.value })}
                                    />
                                </div>
                                <div className="field-group">
                                    <label className="label">Product*</label>
                                    <select
                                        required
                                        className="input"
                                        value={formData.product}
                                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                                    >
                                        <option value="">-- Select Dosage --</option>
                                        <option value="EVOCHECK PREMIUM LINX CGM 1S - Rs.12900">EVOCHECK PREMIUM LINX CGM 1S - Rs.12900</option>
                                    </select>
                                </div>
                                <div className="field-group">
                                    <label className="label font-black text-slate-800">Serial Number (10 Chars)*</label>
                                    <input
                                        type="text"
                                        required
                                        maxLength={10}
                                        className="input border-2 border-slate-200 uppercase font-black tracking-widest focus:border-blue-500"
                                        placeholder="SNXXXXXXXX"
                                        value={formData.serialNumber}
                                        onChange={(e) => setFormData({ ...formData, serialNumber: e.target.value.toUpperCase() })}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="field-group">
                                        <label className="label">Starting Month*</label>
                                        <select
                                            required
                                            className="input"
                                            value={formData.startingMonth}
                                            onChange={(e) => setFormData({ ...formData, startingMonth: e.target.value })}
                                        >
                                            <option value="">Select Month</option>
                                            {Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString('en', { month: 'long' })).map(m => (
                                                <option key={m} value={m}>{m}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="field-group">
                                        <label className="label">Quantity*</label>
                                        <select
                                            required
                                            className="input"
                                            value={formData.quantity}
                                            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                        >
                                            <option value="">Qty</option>
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(q => (
                                                <option key={q} value={q}>{q}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="field-group">
                                    <label className="label">Prescription (Upload)*</label>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="FileName / Link"
                                        value={formData.prescription}
                                        onChange={(e) => setFormData({ ...formData, prescription: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50 space-y-4">
                        <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest px-1">Order Destination</h4>
                        <div className="flex gap-6">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.orderTo === 'PREMIER' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-400'}`}>
                                    {formData.orderTo === 'PREMIER' && <div className="w-2 h-2 rounded-full bg-white" />}
                                </div>
                                <input
                                    type="radio"
                                    className="hidden"
                                    name="orderTo"
                                    value="PREMIER"
                                    checked={formData.orderTo === 'PREMIER'}
                                    onChange={() => setFormData({ ...formData, orderTo: 'PREMIER' })}
                                />
                                <span className={`text-sm font-bold ${formData.orderTo === 'PREMIER' ? 'text-blue-600' : 'text-slate-500'}`}>Premier</span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.orderTo === 'SERVICE_PROVIDER' ? 'border-blue-500 bg-blue-500' : 'border-slate-300 group-hover:border-blue-400'}`}>
                                    {formData.orderTo === 'SERVICE_PROVIDER' && <div className="w-2 h-2 rounded-full bg-white" />}
                                </div>
                                <input
                                    type="radio"
                                    className="hidden"
                                    name="orderTo"
                                    value="SERVICE_PROVIDER"
                                    checked={formData.orderTo === 'SERVICE_PROVIDER'}
                                    onChange={() => setFormData({ ...formData, orderTo: 'SERVICE_PROVIDER' })}
                                />
                                <span className={`text-sm font-bold ${formData.orderTo === 'SERVICE_PROVIDER' ? 'text-blue-600' : 'text-slate-500'}`}>Service Provider</span>
                            </label>
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
                                {distributors
                                    .filter((d) => d.type === formData.orderTo)
                                    .map((d) => (
                                        <option key={d.id} value={d.id}>{d.name} ({d.city?.name})</option>
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
