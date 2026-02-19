import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CGM Device Management System",
    description: "Portal for CGM Device Management",
};

const menuItems = [
    { name: "Dashboard", href: "/dashboard", roles: ["SUPER_ADMIN", "SUB_ADMIN"] },
    { name: "Orders", href: "/orders", roles: ["SUPER_ADMIN", "SUB_ADMIN"] },
    { name: "Patients", href: "/patients", roles: ["SUPER_ADMIN"] },
    { name: "City", href: "/city", roles: ["SUPER_ADMIN"] },
    { name: "Area", href: "/area", roles: ["SUPER_ADMIN"] },
    { name: "Distributor", href: "/distributor", roles: ["SUPER_ADMIN"] },
    { name: "KAM", href: "/kam", roles: ["SUPER_ADMIN"] },
    { name: "Reports", href: "/reports", roles: ["SUPER_ADMIN"] },
    { name: "Users", href: "/users", roles: ["SUPER_ADMIN"] },
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Mocking user role for demonstration
    const userRole = "SUPER_ADMIN";

    const filteredMenu = menuItems.filter(item => item.roles.includes(userRole));
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="sidebar">
                    <div className="mb-8 flex items-center justify-center">
                        <Image src="/logo.png" alt="PharmEvo Logo" width={150} height={50} />
                    </div>
                    <nav>
                        {filteredMenu.map((item) => (
                            <Link key={item.name} href={item.href} className="sidebar-link">
                                {item.name}
                            </Link>
                        ))}
                        <button className="sidebar-link mt-auto w-full text-left text-red-100">
                            SignOut
                        </button>
                    </nav>
                </div>
                <main className="main-content">
                    {children}
                </main>
            </body>
        </html>
    );
}
