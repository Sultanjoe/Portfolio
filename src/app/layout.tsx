import { Raleway, Roboto_Condensed, Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import ClientLayout from './ClientLayout';
import { icons } from 'lucide-react';


const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const raleway = Raleway({
    subsets: ['latin'],
    variable: '--font-raleway',
    weight: ['100','200','300','400','500','600','700','800','900'],
});

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    variable: '--font-roboto-condensed',
    weight: ['100','200','300','400','500','600','700','800','900'],
});

// ✅ sekarang bisa pakai metadata
export const metadata = {
    title: 'Sultan Sulaiman',
    description: 'Portfolio',
    icons: {
        icon: '/Logo.svg', // Menggunakan logo yang diimpor sebagai ikon
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cn(
                raleway.variable,
                robotoCondensed.variable,
                geist.variable,
                'font-sans'
            )}
        >
            <body className="min-h-screen bg-black items-center flex justify-center">
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}