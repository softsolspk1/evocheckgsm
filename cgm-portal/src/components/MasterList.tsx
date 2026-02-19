import React from 'react';

interface MasterListProps {
    title: string;
    data: any[];
    columns: { key: string; label: string }[];
    onAdd?: () => void;
}

const MasterList: React.FC<MasterListProps> = ({ title, data, columns, onAdd }) => {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">{title} Management</h1>
                <button onClick={onAdd} className="btn-primary">Add New {title}</button>
            </div>

            <div className="card">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                {columns.map(col => (
                                    <th key={col.key} className="pb-3 px-2 font-semibold text-gray-600">{col.label}</th>
                                ))}
                                <th className="pb-3 px-2 font-semibold text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, idx) => (
                                <tr key={idx} className="border-b last:border-0 hover:bg-gray-50">
                                    {columns.map(col => (
                                        <td key={col.key} className="py-4 px-2 text-gray-700">{item[col.key]}</td>
                                    ))}
                                    <td className="py-4 px-2">
                                        <button className="text-blue-500 hover:text-blue-700 mr-3">Edit</button>
                                        <button className="text-red-500 hover:text-red-700">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MasterList;
