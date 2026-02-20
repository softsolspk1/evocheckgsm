"use client";
import React, { useState, useEffect } from 'react';
import { ShoppingCart, MapPin, User, Tag, Eye, CheckCircle, MoreVertical, Loader2, Pencil, Trash2, Search, Download, FileText, Table as TableIcon } from 'lucide-react';
import PlaceOrderModal from '@/components/PlaceOrderModal';
import AddEntryModal from '@/components/AddEntryModal';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function OrdersPage() {
    const [orders, setOrders] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isIdModalOpen, setIsIdModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<any>(null);
    const [isCrudModalOpen, setIsCrudModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'VIEW' | 'EDIT' | 'DELETE'>('VIEW');
    const [searchTerm, setSearchTerm] = useState('');

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/orders');
            const data = await res.json();
            setOrders(data);
        } catch (err) {
            console.error('Failed to fetch orders', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const openCrudModal = (mode: 'VIEW' | 'EDIT' | 'DELETE', order: any) => {
        setModalMode(mode);
        setSelectedOrder(order);
        setIsCrudModalOpen(true);
    };

    const displayOrders = orders.map((o: any) => ({
        ...o,
        displayId: o.id.slice(-8).toUpperCase(),
        patientName: o.patient.name,
        cityName: o.city.name,
        kamName: o.kam?.name || 'Unassigned',
        date: new Date(o.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    })).filter((o: any) =>
        o.displayId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.cityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.kamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const exportToExcel = () => {
        const wb = XLSX.utils.book_new();
        const wsData = displayOrders.map(o => ({
            "Order ID": `#${o.displayId}`,
            "Patient": o.patientName,
            "City": o.cityName,
            "KAM": o.kamName,
            "Date": o.date,
            "Status": o.status
        }));
        const ws = XLSX.utils.json_to_sheet(wsData);
        XLSX.utils.book_append_sheet(wb, ws, "Orders");
        XLSX.writeFile(wb, `CGM_Orders_${new Date().toISOString().split('T')[0]}.xlsx`);
    };

    const exportToPDF = () => {
        const doc = new jsPDF() as any;
        doc.setFontSize(20);
        doc.text("CGM Portal - Orders Report", 14, 22);
        doc.setFontSize(10);
        doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 30);

        doc.autoTable({
            startY: 40,
            head: [['Order ID', 'Patient', 'Location', 'KAM', 'Status', 'Date']],
            body: displayOrders.map((o: any) => [
                `#${o.displayId}`,
                o.patientName,
                o.cityName,
                o.kamName,
                o.status,
                o.date
            ]),
            styles: { fontSize: 8 },
            headStyles: { fillStyle: '#334155' }
        });

        doc.save(`CGM_Orders_${new Date().toISOString().split('T')[0]}.pdf`);
    };

    return (
        <div className="space-y-8">
            {/* Header section */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">Order Management</h1>
                    <p className="text-slate-500 font-medium">Manage and track patient device orders globally.</p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    {/* Search Bar */}
                    <div className="relative flex-1 min-w-[300px]">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by ID, patient, city or status..."
                            className="input-field pl-12 h-12"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <button onClick={exportToExcel} className="btn-secondary h-12 flex items-center gap-2">
                            <TableIcon size={18} className="text-emerald-600" />
                            <span className="hidden sm:inline">Excel</span>
                        </button>
                        <button onClick={exportToPDF} className="btn-secondary h-12 flex items-center gap-2">
                            <FileText size={18} className="text-rose-600" />
                            <span className="hidden sm:inline">PDF</span>
                        </button>
                    </div>

                    <button
                        onClick={() => setIsIdModalOpen(true)}
                        className="btn-primary group h-12 min-w-max"
                    >
                        <ShoppingCart size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                        <span>Place New Order</span>
                    </button>
                </div>
            </div>

            <div className="card">
                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center text-slate-400 gap-4">
                        <Loader2 size={40} className="animate-spin text-blue-500" />
                        <p className="font-bold uppercase tracking-widest text-xs">Loading Orders...</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b border-slate-100">
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Order Details</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Location</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">KAM Representative</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] text-center">Status</th>
                                    <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {displayOrders.length > 0 ? displayOrders.map((order: any) => (
                                    <tr key={order.id} className="group transition-colors hover:bg-slate-50/50">
                                        <td className="py-5 px-2">
                                            <div className="font-bold text-slate-800">#{order.displayId}</div>
                                            <div className="flex items-center gap-1 text-xs text-slate-400 font-bold uppercase tracking-tight mt-0.5">
                                                <User size={12} />
                                                {order.patientName}
                                            </div>
                                        </td>
                                        <td className="py-5 px-2">
                                            <div className="text-sm font-semibold text-slate-600 flex items-center gap-1">
                                                <MapPin size={14} className="text-slate-400" />
                                                {order.cityName}
                                            </div>
                                            <div className="text-[10px] text-slate-400 font-bold mt-0.5">{order.date}</div>
                                        </td>
                                        <td className="py-5 px-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500">
                                                    {order.kamName.charAt(0)}
                                                </div>
                                                <span className="text-sm font-bold text-slate-700">{order.kamName}</span>
                                            </div>
                                        </td>
                                        <td className="py-5 px-2 text-center">
                                            <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${order.status === 'PENDING' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-5 px-2 text-right">
                                            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    onClick={() => openCrudModal('VIEW', order)}
                                                    className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                                                    title="View Details"
                                                >
                                                    <Eye size={16} />
                                                </button>
                                                <button
                                                    onClick={() => openCrudModal('EDIT', order)}
                                                    className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                                    title="Edit Order"
                                                >
                                                    <Pencil size={16} />
                                                </button>
                                                <button
                                                    onClick={() => openCrudModal('DELETE', order)}
                                                    className="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                                                    title="Delete Order"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={5} className="py-20 text-center text-slate-300 italic">
                                            No orders found. Place a new order to get started.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <PlaceOrderModal
                isOpen={isIdModalOpen}
                onClose={() => setIsIdModalOpen(false)}
                onSuccess={fetchOrders}
            />

            <AddEntryModal
                isOpen={isCrudModalOpen}
                onClose={() => setIsCrudModalOpen(false)}
                title="Order"
                type="Order"
                mode={modalMode}
                initialData={selectedOrder}
                onSuccess={() => {
                    setIsCrudModalOpen(false);
                    fetchOrders();
                }}
            />
        </div>
    );
}
