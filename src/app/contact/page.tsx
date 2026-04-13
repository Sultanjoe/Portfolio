'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const page = () => {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col font-raleway justify-start h-full w-full py-34 md:py-36 lg:py-42 xl:py-40 pl-23 md:pl-98 lg:pl-150 xl:pl-220 2xl:pl-350 px-5 lg:px-10 text-[13px] lg:text-[14px]"
        >
            <motion.div variants={item} className="flex flex-col gap-3">
                <h1 className="font-semibold">- Contact -</h1>

                <div className="flex flex-col gap-10">
                    {/* SOCIAL LINKS */}
                    <motion.div variants={container} className="flex flex-col">
                        <div className="flex gap-1">
                            <p>IG:</p>
                            <motion.a
                                variants={item}
                                href="https://www.instagram.com/_snsumn/"
                                className="font-semibold hover:underline cursor-pointer "
                            >
                                _snsumn
                            </motion.a>
                        </div>

                        <div className="flex gap-1">
                            <p>linkedin:</p>
                            <motion.a
                                variants={item}
                                href="https://www.linkedin.com/in/sultan-sulaiman-9257953ab/"
                                className="font-semibold hover:underline cursor-pointer"
                            >
                                Sultan Sulaiman
                            </motion.a>
                        </div>

                        <div className="flex gap-1">
                            <p>GitHub:</p>
                            <motion.a
                                variants={item}
                                href="https://github.com/Sultanjoe"
                                className="font-semibold hover:underline cursor-pointer"
                            >
                                Sultan Sulaiman (Sultanjoe)
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div variants={container} className="flex flex-col gap-5">
                        <motion.p variants={item} className="text-4xl lg:text-5xl xl:text-7xl flex flex-col">
                            <span>LET`S WORK</span>
                            TOGETHER
                        </motion.p>

                        <motion.div variants={item}>
                            <a href="mailto:Sultansumnn11@gmail.com?subject=Hello&body=Halo saya ingin menghubungi Anda">
                                <button className="py-3 border px-5 rounded-lg hover:bg-gray-300 active:bg-gray-400 hover:text-black font-semibold hover:scale-105 duration-150 cursor-pointer">
                                    GET IN TOUCH
                                </button>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default page;
