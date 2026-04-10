'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

type CardProjectsProps = {
    title: string;
    date: string;
    category: string;
    designer: string;
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

const CardProjects = ({ title, date, category, designer }: CardProjectsProps) => {
    return (
        <motion.div variants={item} className="font-raleway font-extralight">
            <div className="flex flex-col">
                <div className="flex justify-end items-end">
                    <a
                        href="#"
                        className="text-[30px] md:text-[40px] lg:text-[45px] xl:text-[55px] break-all text-right hover:text-gray-400 active:text-gray-500 transition-colors duration-300"
                    >
                        {title}
                    </a>
                </div>
                <div>
                    <p className="text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] gap-2 flex flex-row justify-end font-semibold">
                        <span>{date}</span>
                        <span>{category}</span>
                        <span>Design: {designer}</span>
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default CardProjects;