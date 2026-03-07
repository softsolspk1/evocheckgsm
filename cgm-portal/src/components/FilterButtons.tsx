"use client";
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const FilterButtons = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentRange = searchParams.get('range') || 'today';

    const ranges = [
        { label: "Today's", value: 'today' },
        { label: 'This Month', value: 'month' },
        { label: 'YTD', value: 'ytd' },
        { label: 'All Time', value: 'all' },
    ];

    const setRange = (range: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('range', range);
        router.push(`?${params.toString()}`);
    };

    return (
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
            {ranges.map((range) => (
                <button
                    key={range.value}
                    onClick={() => setRange(range.value)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${currentRange === range.value
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-500 hover:text-slate-700'
                        }`}
                >
                    {range.label}
                </button>
            ))}
        </div>
    );
};

export default FilterButtons;
