'use client';

import { motion } from 'framer-motion';
import SplitText from '../components/SplitText';

export default function Loader() {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="fixed inset-0 bg-black z-[999] flex items-center justify-center"
        >
            <div className="flex flex-col items-center gap-10 lg:gap-20">
                {/* Text */}
                <SplitText
                    text="Sultan Sulaiman | Portfolio"
                    className="md:text-[22px] lg:text-[24px] xl:text-[28px] text-[18px] font-semibold text-center text-white"
                    delay={50}
                    duration={1.25}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />
                <div className="absolute bottom-10 right-10 flex flex-col items-center gap-3">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white text-sm lg:text-lg tracking-widest font-light"
                    >
                        LOADING
                    </motion.h1>

                    {/* Line Loader */}
                    <div className="w-32 h-[2px] bg-neutral-800 overflow-hidden">
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="w-full h-full bg-white"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
