'use client';

import CardProjects from '@/components/CardProjects';
import React from 'react';
import { motion } from 'framer-motion';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const page = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-4 overflow-y-auto no-scrollbar w-full items-end py-27 md:py-36 lg:py-32 pt-31 lg:pt-38 lg:pb-38 pl-20 lg:pl-30 px-5 lg:px-10"
        >
            <CardProjects title="Lunar Interactive" date="Januari 2025" category="Front-End" designer="Putri" />
        </motion.div>
    );
};

export default page;