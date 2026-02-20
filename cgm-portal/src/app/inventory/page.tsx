"use client";
import React, { useState, useEffect } from 'react';
import {
    Package, Search, Download, FileText,
    Table as TableIcon, Loader2, MapPin,
    Layers, AlertTriangle, CheckCircle2
} from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function InventoryPage() {
    const [inventory, setInventory] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

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

    useEffect(() => {
        fetchInventory();
    }, []);

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
        doc.text("CGM Portal - nationwide Inventory Report", 14, 22);
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
                                    <th className="py-4 px-6 font-black text-[10px] text-slate-400 uppercase tracking-widest text-right">Status</th>
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
                                            {item.availableStock < 10 ? (
                                                <span className="inline-flex px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                    Low Stock
                                                </span>
                                            ) : (
                                                <span className="inline-flex px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                                                    Healthy
                                                </span>
                                            )}
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
        </div>
    );
}
