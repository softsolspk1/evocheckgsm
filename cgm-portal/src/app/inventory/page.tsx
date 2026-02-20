"use client";
import React, { useState, useEffect } from 'react';
import {
    Package, Search, Download, FileText,
    Table as TableIcon, Loader2, MapPin,
    Layers, AlertTriangle, CheckCircle2,
    Plus, Edit2, X, Save
} from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function InventoryPage() {
    const [inventory, setInventory] = useState<any[]>([]);
    const [distributors, setDistributors] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    // Modal states
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Form states
    const [selectedDistributor, setSelectedDistributor] = useState('');
    const [quantity, setQuantity] = useState('');
    const [editingItem, setEditingItem] = useState<any>(null);

    const fetchInventory = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/inventory');
            const data = await res.json();
            setInventory(data);
        } catch (err) {
            console.error('Failed to fetch inventory', err);
        } finally {
            setLoading(false);
        }
    };

    const fetchDistributors = async () => {
        try {
            const res = await fetch('/api/distributors');
            const data = await res.json();
            setDistributors(data);
        } catch (err) {
            console.error('Failed to fetch distributors', err);
        }
    };

    useEffect(() => {
        fetchInventory();
        fetchDistributors();
    }, []);

    const handleAddInventory = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');
        setSuccess('');

        try {
            const res = await fetch('/api/inventory', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ distributorId: selectedDistributor, quantity })
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Failed to add inventory');
            }

            setSuccess('Inventory updated successfully!');
            setSelectedDistributor('');
            setQuantity('');
            fetchInventory();
            setTimeout(() => setShowAddModal(false), 1500);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setSubmitting(false);
        }
    };

    const handleEditInventory = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');
        setSuccess('');

        try {
            const res = await fetch('/api/inventory', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: editingItem.id,
                    totalStock: editingItem.totalStock,
                    availableStock: editingItem.availableStock,
                    allocatedStock: editingItem.allocatedStock
                })
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Failed to update record');
            }

            setSuccess('Record updated successfully!');
            fetchInventory();
            setTimeout(() => setShowEditModal(false), 1500);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setSubmitting(false);
        }
    };

    const filteredInventory = inventory.filter(item =>
        item.distributorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.areaName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalStock = inventory.reduce((acc, curr) => acc + curr.totalStock, 0);
    const availableStock = inventory.reduce((acc, curr) => acc + curr.availableStock, 0);
    const lowStockCount = inventory.filter(item => item.availableStock < 10).length;

    const exportToExcel = () => {
        const wb = XLSX.utils.book_new();
        const wsData = filteredInventory.map(item => ({
            "Distributor": item.distributorName,
            "City": item.cityName,
            "Area": item.areaName,
            "Total Stock": item.totalStock,
            "Available Stock": item.availableStock,
            "Allocated Stock": item.allocatedStock,
            "Last Updated": new Date(item.lastUpdated).toLocaleString()
        }));
        const ws = XLSX.utils.json_to_sheet(wsData);
        XLSX.utils.book_append_sheet(wb, ws, "Device Inventory");
        XLSX.writeFile(wb, `CGM_Inventory_${new Date().toISOString().split('T')[0]}.xlsx`);
    };

    const exportToPDF = () => {
        const doc = new jsPDF() as any;
        doc.setFontSize(20);
        doc.text("CGM Portal - Nationwide Inventory Report", 14, 22);
        doc.setFontSize(10);
        doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 30);

        doc.autoTable({
            startY: 40,
            head: [['Distributor', 'City', 'Area', 'Total', 'Available']],
            body: filteredInventory.map(item => [
                item.distributorName,
                item.cityName,
                item.areaName,
                item.totalStock,
                item.availableStock
            ]),
            styles: { fontSize: 8 },
            headStyles: { fillStyle: '#1e293b' }
        });

        doc.save(`CGM_Inventory_${new Date().toISOString().split('T')[0]}.pdf`);
    };

    return (
        <div className="space-y-8">
            {/* Header section */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Device Inventory</h1>
                    <p className="text-slate-500 font-medium">Nationwide stock monitoring and distribution tracking.</p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <div className="relative flex-1 min-w-[300px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by distributor, city or area..."
                            className="input-field pl-12 h-12"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <button onClick={() => setShowAddModal(true)} className="btn-primary h-12 flex items-center gap-2">
                            <Plus size={18} />
                            <span>Add Inventory</span>
                        </button>
                        <button onClick={exportToExcel} className="btn-secondary h-12 flex items-center gap-2">
                            <TableIcon size={18} className="text-emerald-600" />
                            <span>Excel</span>
                        </button>
                        <button onClick={exportToPDF} className="btn-secondary h-12 flex items-center gap-2">
                            <FileText size={18} className="text-rose-600" />
                            <span>PDF</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card border-l-4 border-blue-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Nationwide Total</p>
                            <h3 className="text-3xl font-black text-slate-800">{totalStock}</h3>
                        </div>
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                            <Layers size={24} />
                        </div>
                    </div>
                </div>
                <div className="card border-l-4 border-emerald-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Available Devices</p>
                            <h3 className="text-3xl font-black text-emerald-600">{availableStock}</h3>
                        </div>
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                            <CheckCircle2 size={24} />
                        </div>
                    </div>
                </div>
                <div className="card border-l-4 border-rose-500">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Low Stock Alerts</p>
                            <h3 className="text-3xl font-black text-rose-600">{lowStockCount}</h3>
                        </div>
                        <div className="p-3 bg-rose-50 text-rose-600 rounded-2xl">
                            <AlertTriangle size={24} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card overflow-hidden">
                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-4">
                        <Loader2 size={40} className="animate-spin text-blue-500" />
                        <p className="font-bold uppercase tracking-widest text-xs">Syncing Inventory...</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b border-slate-100 bg-slate-50/50">
                                    <th className="py-4 px-6 font-black text-[10px] text-slate-400 uppercase tracking-widest">Distributor Details</th>
                                    <th className="py-4 px-6 font-black text-[10px] text-slate-400 uppercase tracking-widest">Location</th>
                                    <th className="py-4 px-6 font-black text-[10px] text-slate-400 uppercase tracking-widest text-center">Total Stock</th>
                                    <th className="py-4 px-6 font-black text-[10px] text-slate-400 uppercase tracking-widest text-center">Available</th>
                                    <th className="py-4 px-6 font-black text-[10px] text-slate-400 uppercase tracking-widest text-center">Allocated</th>
                                    <th className="py-4 px-6 font-black text-[10px] text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {filteredInventory.length > 0 ? filteredInventory.map((item) => (
                                    <tr key={item.id} className="group hover:bg-slate-50/30 transition-colors">
                                        <td className="py-5 px-6">
                                            <div className="font-bold text-slate-800 flex items-center gap-2">
                                                <Package size={16} className="text-slate-400" />
                                                {item.distributorName}
                                            </div>
                                        </td>
                                        <td className="py-5 px-6">
                                            <div className="text-sm font-semibold text-slate-600 flex items-center gap-1">
                                                <MapPin size={14} className="text-slate-400" />
                                                {item.cityName}
                                            </div>
                                            <div className="text-[10px] text-slate-400 font-bold mt-0.5">{item.areaName}</div>
                                        </td>
                                        <td className="py-5 px-6 text-center">
                                            <span className="text-sm font-black text-slate-700">{item.totalStock}</span>
                                        </td>
                                        <td className="py-5 px-6 text-center">
                                            <span className={`text-sm font-black ${item.availableStock < 10 ? 'text-rose-500' : 'text-emerald-600'}`}>
                                                {item.availableStock}
                                            </span>
                                        </td>
                                        <td className="py-5 px-6 text-center">
                                            <span className="text-sm font-bold text-slate-400">{item.allocatedStock}</span>
                                        </td>
                                        <td className="py-5 px-6 text-right">
                                            <button
                                                onClick={() => { setEditingItem(item); setShowEditModal(true); }}
                                                className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-slate-400 hover:text-blue-600 transition-all"
                                            >
                                                <Edit2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={6} className="py-20 text-center text-slate-300 italic">
                                            No inventory records found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Add Inventory Modal */}
            {showAddModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                            <div>
                                <h3 className="text-2xl font-black text-slate-800">Add Stock</h3>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1 text-blue-600">Inventory Increase</p>
                            </div>
                            <button onClick={() => setShowAddModal(false)} className="p-3 hover:bg-white rounded-2xl text-slate-400 transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleAddInventory} className="p-8 space-y-6">
                            {error && <div className="p-4 bg-rose-50 text-rose-600 rounded-2xl text-xs font-black uppercase tracking-widest">{error}</div>}
                            {success && <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl text-xs font-black uppercase tracking-widest">{success}</div>}

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Select Distributor</label>
                                <select
                                    className="input-field w-full h-14 pr-10 appearance-none bg-no-repeat bg-[right_1rem_center]"
                                    value={selectedDistributor}
                                    onChange={(e) => setSelectedDistributor(e.target.value)}
                                    required
                                >
                                    <option value="">Select a distributor...</option>
                                    {distributors.map(d => (
                                        <option key={d.id} value={d.id}>{d.name} ({d.city.name})</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Quantity (Devices)</label>
                                <input
                                    type="number"
                                    className="input-field w-full h-14"
                                    placeholder="Enter number of devices"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    required
                                    min="1"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="btn-primary w-full h-16 rounded-2xl font-black text-lg shadow-xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50"
                            >
                                {submitting ? <Loader2 className="animate-spin" /> : <><Save size={20} /><span>Update Stock</span></>}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Edit Inventory Modal */}
            {showEditModal && editingItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
                            <div>
                                <h3 className="text-2xl font-black text-slate-800">Edit Record</h3>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1 text-blue-600">{editingItem.distributorName}</p>
                            </div>
                            <button onClick={() => setShowEditModal(false)} className="p-3 hover:bg-white rounded-2xl text-slate-400 transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleEditInventory} className="p-8 space-y-6">
                            {error && <div className="p-4 bg-rose-50 text-rose-600 rounded-2xl text-xs font-black uppercase tracking-widest">{error}</div>}
                            {success && <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl text-xs font-black uppercase tracking-widest">{success}</div>}

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Total Stock</label>
                                    <input
                                        type="number"
                                        className="input-field w-full h-14"
                                        value={editingItem.totalStock}
                                        onChange={(e) => setEditingItem({ ...editingItem, totalStock: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Available</label>
                                    <input
                                        type="number"
                                        className="input-field w-full h-14"
                                        value={editingItem.availableStock}
                                        onChange={(e) => setEditingItem({ ...editingItem, availableStock: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Allocated</label>
                                <input
                                    type="number"
                                    className="input-field w-full h-14"
                                    value={editingItem.allocatedStock}
                                    onChange={(e) => setEditingItem({ ...editingItem, allocatedStock: e.target.value })}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="btn-primary w-full h-16 rounded-2xl font-black text-lg shadow-xl flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50"
                            >
                                {submitting ? <Loader2 className="animate-spin" /> : <><Save size={20} /><span>Save Changes</span></>}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
