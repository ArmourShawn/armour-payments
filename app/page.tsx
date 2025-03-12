import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Armour Payments - Secure Payment Solutions',
  description: 'Secure payment solutions for businesses and enterprises',
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8">
          Welcome to Armour Payments
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Secure, reliable payment solutions for modern businesses
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Secure Transactions</h3>
            <p className="text-gray-600">Enterprise-grade security for all your payment needs</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Global Coverage</h3>
            <p className="text-gray-600">Accept payments from anywhere in the world</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock assistance for your business</p>
          </div>
        </div>
      </section>
    </main>
  );
} 