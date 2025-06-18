'use client'
import Link from 'next/link';
import React, { use } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navitems = () => {
    const pathname = usePathname();

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Companions', href: '/companions' },
        { label: 'My Journey', href: 'my-journey' },
    ]

    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ label, href }) => (
                <Link href={href} key={label} className={cn(pathname === href ? 'text-blue-500 font-bold' : 'text-gray-700', 'hover:text-blue-500 transition-colors')}>
                    {label}
                </Link>
            ))}
        </nav>
    )
}

export default Navitems