'use client';

import Sidebar from '@/components/Sidebar';
import Silk from '@/components/Silk';
import LoaderWrapper from '@/components/LoaderWrapper';
import { motion } from 'framer-motion';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LoaderWrapper>
            <div className="bg-black overflow-hidden w-full h-full text-white flex items-center justify-center relative">
                
                <motion.div
                    initial={{ clipPath: 'inset(0 0% 100% 0)' }}
                    animate={{ clipPath: 'inset(0 0% 0% 0)' }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="w-[90.5%] h-[93.5vh] sm:w-[93.5%] sm:h-[92vh] md:w-[95.2%] lg:w-[96%] border border-neutral-300 p-5 lg:p-9 flex flex-row gap-30 relative"
                >
                    
                    {/* Background */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        <Silk
                            speed={5}
                            scale={1}
                            color="#292929"
                            noiseIntensity={1.5}
                            rotation={0}
                        />
                    </div>

                    {/* Sidebar */}
                    <Sidebar />

                    {/* Content */}
                    <div className="flex h-full overflow-y-auto no-scrollbar absolute inset-0">
                        {children}
                    </div>
                </motion.div>

            </div>
        </LoaderWrapper>
    );
}