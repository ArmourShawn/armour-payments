import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Lexend } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import './styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Armour Payments',
    default: 'Armour Payments - Secure Payment Solutions',
  },
  description: 'Secure payment solutions for businesses and enterprises',
  keywords: ['payments', 'secure payments', 'business payments', 'enterprise payments'],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body className="min-h-screen flex flex-col bg-slate-50 font-sans">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
} 