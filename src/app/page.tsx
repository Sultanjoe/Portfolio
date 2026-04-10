'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
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

export default function Home() {
  return (
    <div className="flex font-raleway justify-end items-end h-full w-full py-5 px-5 lg:px-10 lg:py-10">
      <motion.p
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] font-semibold"
      >
        <motion.span variants={item}>Born in 2008</motion.span>
        <motion.span variants={item}>in Bandung, Indonesia</motion.span>
        <motion.span variants={item}>I believe</motion.span>
        <motion.span variants={item}>web design</motion.span>
        <motion.span variants={item}>can be more</motion.span>
        <motion.span variants={item}>than just visuals.</motion.span>
        <motion.span variants={item}>With a focus</motion.span>
        <motion.span variants={item}>on simplicity</motion.span>
        <motion.span variants={item}>and meaning,</motion.span>
        <motion.span variants={item}>I explore ideas</motion.span>
        <motion.span variants={item}>through code</motion.span>
        <motion.span variants={item}>and creativity.</motion.span>
      </motion.p>
    </div>
  );
}