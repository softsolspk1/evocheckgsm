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

import Sidebar from "@/components/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Sidebar />
                <main className="main-content">
                    {children}
                    <footer className="mt-auto py-8 text-center border-t border-slate-100">
                        <p className="text-slate-400 text-sm font-medium">
                            Developed By <span className="text-blue-600 font-bold">Softsols - Digital AI Solution</span>
                        </p>
                    </footer>
                </main>
            </body>
        </html>
    );
}
