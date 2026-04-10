'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const page = () => {
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
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

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col font-raleway justify-start h-full w-full py-34 md:py-36 lg:py-42 xl:py-40 pl-23 md:pl-98 lg:pl-150 xl:pl-340 px-5 lg:px-10 text-[13px] lg:text-[14px]"
        >
            <motion.div variants={item} className="flex flex-col gap-10 ">
                {/* About */}
                <motion.div variants={item} className="flex flex-col gap-3">
                    <motion.div variants={item} className="font-semibold">
                        - About me -
                    </motion.div>

                    <motion.p
                        variants={item}
                        className="font-light text-justify text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]"
                    >
                        Hellooo!!! I am Sultan Sulaiman. I am a passionate Junior Frontend Developer
                        with a keen eye for design and a love for creating intuitive user
                        experiences. With a strong foundation in HTML, CSS, and JavaScript, I strive
                        to build responsive and accessible websites that not only look great but
                        also perform exceptionally well.
                    </motion.p>
                </motion.div>

                {/* Experience */}
                <motion.div variants={item} className="flex flex-col gap-3">
                    <motion.div variants={item} className="font-semibold">
                        - Experiences -
                    </motion.div>

                    <motion.div variants={item}>
                        <p className="font-semibold ml-2 mb-0.2 lg:text-[15px] xl:text-[16px]">2025</p>

                        <span className="font-light flex flex-col text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px]">
                            Junior Frontend Developer (Internship)
                            <div>
                                <a
                                    href="http://lunarinteractive.net/"
                                    className="font-semibold hover:underline cursor-pointer"
                                >
                                    PT Lunar Interactive
                                </a>
                            </div>
                        </span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default page;
