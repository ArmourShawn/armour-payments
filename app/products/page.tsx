import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - Armour Payments',
  description: 'Explore our range of secure payment solutions',
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8">Our Products</h1>
        <p className="text-xl text-gray-600 mb-12">
          Discover our comprehensive suite of payment solutions designed for modern businesses
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Payment Gateway</h3>
            <p className="text-gray-600 mb-4">
              Secure payment processing with support for multiple currencies and payment methods.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Multi-currency support</li>
              <li>• Fraud protection</li>
              <li>• Real-time reporting</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Subscription Billing</h3>
            <p className="text-gray-600 mb-4">
              Automated recurring billing system for subscription-based businesses.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Flexible billing cycles</li>
              <li>• Smart dunning management</li>
              <li>• Revenue recovery tools</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Payment Analytics</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive analytics and reporting for your payment data.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Custom reports</li>
              <li>• Data visualization</li>
              <li>• Revenue forecasting</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 