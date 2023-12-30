// nextjs
import type { 
    Metadata,
} from 'next';
import local from 'next/font/local';
// dayjs
import initDayjs from '@/lib/dayjs/initDayjs';
// UI Components
import RootLayoutSSR from '@/components/layouts/RootLayoutSSR/RootLayoutSSR';
import '@/styles/tailwindGlobalStyle.css';

const PretendardFont = local({
    src: '../../public/fonts/PretendardVariable.woff2',
    display: 'auto',
});

export const metadata: Metadata = {
    title: 'Chocobe Blog v2',
    description: 'Frontend 기술 블로그 입니다.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    initDayjs();

    return (
        <html lang="ko">
            <body className={PretendardFont.className}>
                <RootLayoutSSR>
                    {children}
                </RootLayoutSSR>
            </body>
        </html>
    );
}
