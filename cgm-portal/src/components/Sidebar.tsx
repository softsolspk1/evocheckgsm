"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
    LayoutDashboard,
    ShoppingCart,
    Users,
    MapPin,
    Globe,
    Truck,
    UserSquare2,
    BarChart3,
    Users2,
    LogOut,
    Package
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard, roles: ["SUPER_ADMIN", "SUB_ADMIN"] },
    { name: "Orders", href: "/orders", icon: ShoppingCart, roles: ["SUPER_ADMIN", "SUB_ADMIN"] },
    { name: "Patients", href: "/patients", icon: Users, roles: ["SUPER_ADMIN"] },
    { name: "City", href: "/city", icon: Globe, roles: ["SUPER_ADMIN"] },
    { name: "Area", href: "/area", icon: MapPin, roles: ["SUPER_ADMIN"] },
    { name: "Distributor", href: "/distributor", icon: Truck, roles: ["SUPER_ADMIN"] },
    { name: "KAM", href: "/kam", icon: UserSquare2, roles: ["SUPER_ADMIN"] },
    { name: "Reports", href: "/reports", icon: BarChart3, roles: ["SUPER_ADMIN"] },
    { name: "Inventory", href: "/inventory", icon: Package, roles: ["SUPER_ADMIN", "SUB_ADMIN"] },
    { name: "Users", href: "/users", icon: Users2, roles: ["SUPER_ADMIN"] },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [userRole, setUserRole] = React.useState<string | null>(null);

    React.useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                setUserRole(user.role);

                // Restricted pages for SUB_ADMIN
                const restrictedPaths = ['/patients', '/city', '/area', '/distributor', '/kam', '/reports', '/users'];
                if (user.role === 'SUB_ADMIN' && restrictedPaths.some(p => pathname.startsWith(p))) {
                    router.push('/dashboard');
                }
            } catch (e) {
                console.error("Failed to parse user from localStorage", e);
            }
        } else if (pathname !== '/login') {
            router.push('/login');
        }
    }, [pathname, router]);

    if (pathname === '/login') return null;

    const handleLogout = () => {
        // Clear local storage/session if any
        localStorage.clear();
        router.push('/login');
    };

    const filteredMenu = menuItems.filter(item => userRole && item.roles.includes(userRole));

    return (
        <div className="sidebar">
            <div className="px-4 py-8 mb-4 border-b border-slate-700/50 flex flex-col items-center">
                <div className="bg-white p-2 rounded-xl mb-3 shadow-lg">
                    <Image src="/logo.png" alt="PharmEvo Logo" width={140} height={40} className="object-contain" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#94A3B8] font-bold">Admin Portal</p>
            </div>

            <nav className="flex-1 space-y-1">
                {filteredMenu.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`sidebar-link ${isActive ? 'active' : ''}`}
                        >
                            <Icon size={20} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="pt-4 mt-4 border-t border-slate-700/50">
                <button
                    onClick={handleLogout}
                    className="sidebar-link w-full text-red-400 hover:bg-red-500/10 hover:text-red-300"
                >
                    <LogOut size={20} />
                    <span>Sign Out</span>
                </button>
            </div>
        </div>
    );
}
