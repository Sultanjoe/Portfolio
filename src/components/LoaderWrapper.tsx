'use client';

import { useEffect, useState } from 'react';
import Loader from './Loader';

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <Loader />}
            {!loading && children}
        </>
    );
}