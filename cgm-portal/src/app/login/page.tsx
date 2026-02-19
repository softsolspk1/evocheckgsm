"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would call /api/auth/login
        console.log('Logging in with:', email, password);
        window.location.href = '/dashboard';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <div className="flex justify-center mb-8">
                    <Image src="/logo.png" alt="PharmEvo Logo" width={180} height={60} />
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                    CGM Device Management
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Sign in to access your dashboard
                </p>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address / Employee Code
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-blue-600 rounded" />
                            <label className="ml-2 text-sm text-gray-600">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                    </div>

                    <button type="submit" className="w-full btn-primary py-3 text-lg">
                        Sign In
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-semibold">
                        Product by PharmEvo
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
