import { Metadata } from 'next';
import Hero from './components/Hero';
import Pricing from './components/Pricing';

export const metadata: Metadata = {
  title: 'Armour Payments - Secure Payment Solutions',
  description: 'Secure payment solutions for businesses of all sizes. Protect your transactions with our escrow service.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Pricing />
    </main>
  );
} 