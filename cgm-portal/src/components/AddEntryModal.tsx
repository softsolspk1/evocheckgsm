"use client";
import React, { useState, useEffect } from 'react';
import { X, Loader2, Save, User as UserIcon, Shield, Key, Eye, Trash2, Plus } from 'lucide-react';

interface AddEntryModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    type: 'City' | 'Area' | 'Distributor' | 'KAM' | 'User' | 'Patient' | 'Order';
    onSuccess: () => void;
    initialData?: any; // If provided, we are in EDIT mode
    mode: 'ADD' | 'EDIT' | 'VIEW' | 'DELETE';
}

const AddEntryModal: React.FC<AddEntryModalProps> = ({
    isOpen, onClose, title, type, onSuccess, initialData, mode
}) => {
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState<any[]>([]);
    const [areas, setAreas] = useState<any[]>([]);
    const [formData, setFormData] = useState<any>({});
    const [error, setError] = useState('');

    useEffect(() => {
        if (isOpen) {
            if (initialData) {
                setFormData(initialData);
            } else {
                setFormData({});
            }

            if (['Area', 'Distributor', 'KAM', 'User', 'Patient', 'Order'].includes(type)) {
                fetchCities();
            }
        }
    }, [isOpen, initialData, type]);

    useEffect(() => {
        if (formData.cityId && ['Distributor', 'KAM', 'Area'].includes(type)) {
            fetchAreas(formData.cityId);
        }
    }, [formData.cityId, type]);

    const fetchCities = async () => {
        try {
            const res = await fetch('/api/cities');
            const data = await res.json();
            setCities(data);
        } catch (err) {
            console.error('Failed to fetch cities', err);
        }
    };

    const fetchAreas = async (cityId: string) => {
        try {
            const res = await fetch(`/api/areas?cityId=${cityId}`);
            const data = await res.json();
            setAreas(data);
        } catch (err) {
            console.error('Failed to fetch areas', err);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (mode === 'VIEW') return;

        setLoading(true);
        setError('');

        try {
            let endpoint = '';
            if (type === 'City') endpoint = '/api/cities';
            else if (type === 'Area') endpoint = '/api/areas';
            else if (type === 'Distributor') endpoint = '/api/distributors';
            else if (type === 'KAM') endpoint = '/api/kams';
            else if (type === 'User') endpoint = '/api/users';
            else if (type === 'Patient') endpoint = '/api/patients';
            else if (type === 'Order') endpoint = '/api/orders';

            const method = mode === 'EDIT' ? 'PUT' : mode === 'DELETE' ? 'DELETE' : 'POST';

            const res = await fetch(endpoint, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(mode === 'DELETE' ? { id: formData.id } : formData),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || `Failed to ${mode.toLowerCase()} ${type.toLowerCase()}`);
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

    const isReadOnly = mode === 'VIEW';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className={`px-8 py-6 border-b border-slate-100 flex items-center justify-between ${mode === 'DELETE' ? 'bg-rose-50/50' : 'bg-slate-50/50'}`}>
                    <div>
                        <h3 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                            {mode === 'ADD' && <Plus size={20} className="text-blue-500" />}
                            {mode === 'EDIT' && <Key size={20} className="text-amber-500" />}
                            {mode === 'VIEW' && <Eye size={20} className="text-slate-500" />}
                            {mode === 'DELETE' && <Trash2 size={20} className="text-rose-500" />}
                            {mode} {type}
                        </h3>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-0.5">
                            {mode === 'DELETE' ? 'Destructive Action' : 'Master Data Management'}
                        </p>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-xl hover:bg-slate-200 transition-colors">
                        <X size={20} className="text-slate-400" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {mode === 'DELETE' ? (
                        <div className="space-y-4">
                            <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl">
                                <p className="text-rose-800 font-bold mb-1">Confirm Deletion</p>
                                <p className="text-rose-600 text-sm">Are you sure you want to permanently delete this {type.toLowerCase()}? This action cannot be undone.</p>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Item Details</p>
                                <p className="text-slate-700 font-black text-lg">{formData.name || formData.patientName || 'Untitled Entry'}</p>
                            </div>
                        </div>
                    ) : (
                        <>
                            {error && (
                                <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-sm font-bold flex items-center gap-2 animate-shake">
                                    <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                                    {error}
                                </div>
                            )}

                            <div className="space-y-5">
                                {(type === 'User' || type === 'KAM') && (
                                    <>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="field-group">
                                                <label className="label">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    disabled={isReadOnly}
                                                    className="input"
                                                    placeholder="John Doe"
                                                    value={formData.name || ''}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="field-group">
                                                <label className="label">Employee Code</label>
                                                <input
                                                    type="text"
                                                    disabled={isReadOnly}
                                                    className="input"
                                                    placeholder="EMP001"
                                                    value={formData.employeeCode || ''}
                                                    onChange={(e) => setFormData({ ...formData, employeeCode: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="field-group">
                                            <label className="label">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                disabled={isReadOnly}
                                                className="input"
                                                placeholder="john@pharmevo.biz"
                                                value={formData.email || ''}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        {mode === 'ADD' && (
                                            <div className="field-group">
                                                <label className="label">Password</label>
                                                <input
                                                    type="password"
                                                    required
                                                    disabled={isReadOnly}
                                                    className="input"
                                                    placeholder="••••••••"
                                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                />
                                            </div>
                                        )}
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="field-group">
                                                <label className="label">Role</label>
                                                <select
                                                    required
                                                    disabled={isReadOnly || type === 'KAM'}
                                                    className="input"
                                                    value={formData.role || (type === 'KAM' ? 'KAM' : '')}
                                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                >
                                                    <option value="">Select Role</option>
                                                    <option value="SUPER_ADMIN">Admin</option>
                                                    <option value="SUB_ADMIN">Sub-Admin</option>
                                                    <option value="DISTRIBUTOR">Distributor</option>
                                                    <option value="KAM">KAM</option>
                                                </select>
                                            </div>
                                            <div className="field-group">
                                                <label className="label">City</label>
                                                <select
                                                    disabled={isReadOnly}
                                                    className="input"
                                                    value={formData.cityId || ''}
                                                    onChange={(e) => setFormData({ ...formData, cityId: e.target.value })}
                                                >
                                                    <option value="">Select City</option>
                                                    {cities.map((c) => (
                                                        <option key={c.id} value={c.id}>{c.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {type === 'City' && (
                                    <div className="field-group">
                                        <label className="label">City Name</label>
                                        <input
                                            type="text"
                                            required
                                            disabled={isReadOnly}
                                            className="input"
                                            placeholder="Karachi"
                                            value={formData.name || ''}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                )}

                                {type === 'Area' && (
                                    <>
                                        <div className="field-group">
                                            <label className="label">City</label>
                                            <select
                                                required
                                                disabled={isReadOnly}
                                                className="input"
                                                value={formData.cityId || ''}
                                                onChange={(e) => setFormData({ ...formData, cityId: e.target.value })}
                                            >
                                                <option value="">Select a City</option>
                                                {cities.map((c) => (
                                                    <option key={c.id} value={c.id}>{c.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="field-group">
                                            <label className="label">Area Name</label>
                                            <input
                                                type="text"
                                                required
                                                disabled={isReadOnly}
                                                className="input"
                                                placeholder="North"
                                                value={formData.name || ''}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </>
                                )}

                                {type === 'Distributor' && (
                                    <>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="field-group">
                                                <label className="label">City</label>
                                                <select
                                                    required
                                                    disabled={isReadOnly}
                                                    className="input"
                                                    value={formData.cityId || ''}
                                                    onChange={(e) => setFormData({ ...formData, cityId: e.target.value, areaId: '' })}
                                                >
                                                    <option value="">Select a City</option>
                                                    {cities.map((c) => (
                                                        <option key={c.id} value={c.id}>{c.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="field-group">
                                                <label className="label">Area</label>
                                                <select
                                                    required
                                                    disabled={isReadOnly || !formData.cityId}
                                                    className="input"
                                                    value={formData.areaId || ''}
                                                    onChange={(e) => setFormData({ ...formData, areaId: e.target.value })}
                                                >
                                                    <option value="">Select an Area</option>
                                                    {areas.map((a) => (
                                                        <option key={a.id} value={a.id}>{a.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="field-group">
                                            <label className="label">Distributor Name</label>
                                            <input
                                                type="text"
                                                required
                                                disabled={isReadOnly}
                                                className="input"
                                                placeholder="M&P"
                                                value={formData.name || ''}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                    </>
                                )}

                                {type === 'Patient' && (
                                    <>
                                        <div className="field-group">
                                            <label className="label">Patient Name</label>
                                            <input
                                                type="text"
                                                required
                                                disabled={isReadOnly}
                                                className="input"
                                                placeholder="Patient Full Name"
                                                value={formData.name || ''}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="field-group">
                                                <label className="label">Phone</label>
                                                <input
                                                    type="text"
                                                    required
                                                    disabled={isReadOnly}
                                                    className="input"
                                                    placeholder="03xx-xxxxxxx"
                                                    value={formData.phone || ''}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                            <div className="field-group">
                                                <label className="label">City</label>
                                                <select
                                                    required
                                                    disabled={isReadOnly}
                                                    className="input"
                                                    value={formData.cityId || ''}
                                                    onChange={(e) => setFormData({ ...formData, cityId: e.target.value })}
                                                >
                                                    <option value="">Select City</option>
                                                    {cities.map((c) => (
                                                        <option key={c.id} value={c.id}>{c.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </>
                    )}

                    <div className="pt-6 flex gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-4 rounded-2xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors"
                        >
                            {isReadOnly ? 'Close' : 'Cancel'}
                        </button>
                        {mode !== 'VIEW' && (
                            <button
                                type="submit"
                                disabled={loading}
                                className={`flex-[2] py-4 rounded-2xl font-black text-white shadow-lg flex items-center justify-center gap-2 transition-all ${mode === 'DELETE' ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-500/20' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/20'}`}
                            >
                                {loading ? (
                                    <Loader2 size={20} className="animate-spin" />
                                ) : (
                                    <>
                                        <Save size={20} />
                                        <span>{mode === 'DELETE' ? 'Delete Permanently' : `Save ${type} Entry`}</span>
                                    </>
                                )}
                            </button>
                        )}
                        {mode === 'VIEW' && (
                            <button
                                type="button"
                                onClick={() => {/* Toggle to edit mode if needed */ }}
                                className="flex-[2] btn-primary py-4 shadow-lg shadow-blue-500/20"
                            >
                                Edit Record
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEntryModal;
