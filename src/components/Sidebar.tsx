'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { motion, Variants } from 'framer-motion';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15, // urutan dari atas ke bawah
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
};

const Sidebar = () => {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="font-raleway font-extralight flex flex-col gap-14 fixed z-20"
        >
            {/* HEADER */}
            <motion.div variants={item} className="flex flex-col">
                <h1 className="text-3xl md:text-[40px] lg:text-[45px] xl:text-[55px]">
                    <p>Sultan Sulaiman</p>
                </h1>
                <h2 className="text-[14px] font-light">Junior Frontend Developer</h2>
            </motion.div>

            {/* NAV LIST */}
            <motion.ul
                variants={container}
                className="flex flex-col gap-3 text-[12px] md:text-[13px] lg:text-[14px] font-semibold"
            >
                {navItems.map((nav) => {
                    const isActive = pathname === nav.path;

                    return (
                        <motion.li key={nav.path} variants={item}>
                            <button>
                                <Link href={nav.path}  className="flex items-center h-5 group relative">
                                    {/* TEXT */}
                                    <span
                                        className={`transition-all duration-300 ${
                                            isActive
                                                ? 'opacity-0 scale-0'
                                                : 'opacity-100 scale-100 group-hover:text-gray-400'
                                        }`}
                                    >
                                        {nav.name}
                                    </span>

                                    {/* DOT */}
                                    <span
                                        className={`absolute h-2 w-2 rounded-full bg-white transition-all duration-300 ${
                                            isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                                        }`}
                                    />
                                </Link>
                            </button>
                        </motion.li>
                    );
                })}
            </motion.ul>
        </motion.div>
    );
};

export default Sidebar;
