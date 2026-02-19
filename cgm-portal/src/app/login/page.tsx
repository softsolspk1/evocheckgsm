"use client";
import React, { useState } from 'react';
import { Mail, Lock, Loader2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login
        setTimeout(() => {
            router.push('/dashboard');
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen flex bg-white overflow-hidden">
            {/* Left side - Visual Content / Pharma Branding */}
            <div className="hidden lg:flex lg:w-[62%] relative bg-[#0F172A] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[100%] h-[100%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                <div className="relative z-10 w-full flex flex-col justify-center px-24">
                    <div className="mb-12">
                        <div className="bg-white p-6 rounded-[2.5rem] shadow-2xl inline-block mb-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image src="/logo.png" alt="PharmEvo Logo" width={220} height={70} className="object-contain" />
                        </div>
                    </div>

                    <h1 className="text-6xl font-black text-white tracking-tighter leading-tight mb-8">
                        The Future of <br />
                        <span className="text-blue-500">Clinical Data</span> <br />
                        Management.
                    </h1>

                    <p className="text-slate-400 text-xl font-medium max-w-xl leading-relaxed mb-12">
                        Empowering healthcare professionals with real-time CGM insights and streamlined deployment tracking.
                    </p>

                    <div className="flex gap-12 border-t border-white/10 pt-10">
                        <div>
                            <p className="text-3xl font-black text-white">24/7</p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Monitoring</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black text-white">100%</p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Data Security</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black text-white">E-Sync</p>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Technology</p>
                        </div>
                    </div>
                </div>

                {/* Floating Elements for visual depth */}
                <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Right side - Form */}
            <div className="w-full lg:w-[38%] flex flex-col justify-center px-8 sm:px-16 lg:px-20 bg-slate-50 relative border-l border-slate-100">
                <div className="max-w-md w-full mx-auto">
                    {/* Brand Badge (Mobile only toggle) */}
                    <div className="lg:hidden mb-12 flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <span className="text-white text-2xl font-black italic">P</span>
                        </div>
                        <h2 className="text-2xl font-black text-slate-800 tracking-tighter">EVO<span className="text-blue-600">PULSE</span></h2>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-3">Gateway Access</h2>
                        <p className="text-slate-500 font-medium">Please enter your authorized credentials to continue.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-8">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Identity / Email</label>
                                <div className="relative group">
                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                                    <input
                                        type="email"
                                        required
                                        className="w-full h-16 bg-white border-2 border-slate-100 rounded-2xl pl-14 pr-6 font-bold text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-8 focus:ring-blue-500/5 outline-none transition-all duration-300"
                                        placeholder="user@pharmevo.biz"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Security Key</label>
                                    <button type="button" className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">Support</button>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                                    <input
                                        type="password"
                                        required
                                        className="w-full h-16 bg-white border-2 border-slate-100 rounded-2xl pl-14 pr-6 font-bold text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-8 focus:ring-blue-500/5 outline-none transition-all duration-300"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-slate-200 text-blue-600 focus:ring-0 transition-colors cursor-pointer" />
                                <span className="text-sm font-bold text-slate-500 group-hover:text-slate-800 transition-colors">Remember instance</span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-16 bg-slate-900 hover:bg-black text-white font-black rounded-2xl shadow-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:opacity-70 group"
                        >
                            {loading ? (
                                <Loader2 size={24} className="animate-spin" />
                            ) : (
                                <>
                                    <span>Enter Ecosystem</span>
                                    <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-12 text-center">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                            © 2026 PharmEvo (Pvt.) Ltd.
                        </p>
                    </div>
                </div>

                {/* Footer Signature */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full text-center px-8">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300">
                        Digital Intelligence Powered by <span className="text-blue-600/50">Softsols AI</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
