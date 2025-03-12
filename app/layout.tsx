import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import './styles/globals.css';

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
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 