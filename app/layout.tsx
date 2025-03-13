import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainNav from './components/navigation/MainNav';
import Footer from './components/navigation/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Armour Payments - Secure Payment Solutions',
  description: 'Secure payment solutions for businesses of all sizes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 