"use client";
import React, { useState } from 'react';
import { Plus, Pencil, Trash2, Search, Filter, Eye } from 'lucide-react';
import AddEntryModal from './AddEntryModal';

interface MasterListProps {
    title: string;
    data: any[];
    columns: { key: string; label: string }[];
    type?: 'City' | 'Area' | 'Distributor' | 'KAM' | 'User' | 'Patient' | 'Order';
    onSuccess?: () => void;
}

const MasterList: React.FC<MasterListProps> = ({
    title, data, columns, type, onSuccess
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [modalMode, setModalMode] = useState<'ADD' | 'EDIT' | 'VIEW' | 'DELETE'>('ADD');

    const filteredData = data.filter(item =>
        Object.values(item).some(val =>
            String(val).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const openModal = (mode: 'ADD' | 'EDIT' | 'VIEW' | 'DELETE', item: any = null) => {
        setModalMode(mode);
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-800 tracking-tight">{title} Management</h1>
                    <p className="text-slate-500 font-medium">Manage and configure your master data for {title.toLowerCase()}.</p>
                </div>
                {type && (
                    <button onClick={() => openModal('ADD')} className="btn-primary group">
                        <Plus size={20} className="mr-2 group-hover:rotate-90 transition-transform" />
                        <span>Add New Entry</span>
                    </button>
                )}
            </div>

            {/* Content Card */}
            <div className="card">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder={`Search ${title.toLowerCase()}...`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-100 bg-white text-slate-600 font-bold hover:bg-slate-50 transition-colors">
                        <Filter size={18} />
                        <span>Filter</span>
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left border-b border-slate-100">
                                {columns.map(col => (
                                    <th key={col.key} className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">{col.label}</th>
                                ))}
                                <th className="pb-4 px-2 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] text-right">Operations</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredData.length > 0 ? filteredData.map((item, idx) => (
                                <tr key={item.id || idx} className="group transition-colors hover:bg-slate-50/50">
                                    {columns.map(col => (
                                        <td key={col.key} className="py-5 px-2 text-sm font-bold text-slate-700">
                                            {col.key === 'role' ? (
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.role === 'SUPER_ADMIN' ? 'bg-indigo-100 text-indigo-700' :
                                                        item.role === 'SUB_ADMIN' ? 'bg-blue-100 text-blue-700' :
                                                            item.role === 'DISTRIBUTOR' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'
                                                    }`}>
                                                    {item.role}
                                                </span>
                                            ) : (
                                                item[col.key] || '---'
                                            )}
                                        </td>
                                    ))}
                                    <td className="py-5 px-2 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => openModal('VIEW', item)}
                                                className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                                                title="View Details"
                                            >
                                                <Eye size={16} />
                                            </button>
                                            <button
                                                onClick={() => openModal('EDIT', item)}
                                                className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                                title="Edit Entry"
                                            >
                                                <Pencil size={16} />
                                            </button>
                                            <button
                                                onClick={() => openModal('DELETE', item)}
                                                className="p-2 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                                                title="Delete Entry"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={columns.length + 1} className="py-20 text-center">
                                        <div className="text-slate-300 italic mb-2">No records found</div>
                                        <div className="text-xs text-slate-400">Initialize seeding or add new entries to see data.</div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {type && (
                <AddEntryModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title={title}
                    type={type}
                    mode={modalMode}
                    initialData={selectedItem}
                    onSuccess={() => {
                        setIsModalOpen(false);
                        if (onSuccess) onSuccess();
                        else window.location.reload();
                    }}
                />
            )}
        </div>
    );
};

export default MasterList;
