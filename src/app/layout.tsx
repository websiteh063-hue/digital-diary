import type { Metadata } from 'next';
import { Dancing_Script, Satisfy, Cormorant_Garamond, Playfair_Display, Noto_Serif_Devanagari, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-dancing-script',
});

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-satisfy',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
});

const notoHindi = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-hindi',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Digital Diary | Personal Literary Space',
  description: 'Some feelings are written. Some are lived. And some stay somewhere between the two. A personal space for micro poems, long poems, quotes, stories, heartbreak & romantic writings.',
  openGraph: {
    title: 'Digital Diary | Personal Literary Space',
    description: 'A place where words that couldn\'t be spoken finally found a home.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dancingScript.variable} ${satisfy.variable} ${cormorant.variable} ${playfair.variable} ${notoHindi.variable} ${jakarta.variable}`}>
      <body className="bg-paper-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 min-h-screen flex flex-col font-sans selection:bg-amber-200 dark:selection:bg-amber-900/50 transition-colors">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="fixed inset-0 pointer-events-none opacity-20 dark:opacity-10 bg-paper-texture z-50" />
          <Navbar />
          <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
