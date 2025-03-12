import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions - Armour Payments',
  description: 'Industry-specific payment solutions for your business needs',
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8">Payment Solutions</h1>
        <p className="text-xl text-gray-600 mb-12">
          Tailored payment solutions for every industry and business size
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4">E-commerce Solutions</h3>
            <p className="text-gray-600 mb-6">
              Streamline your online store's payment process with our comprehensive e-commerce solutions.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Seamless checkout experience</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Shopping cart integration</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Mobile payment support</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4">Enterprise Solutions</h3>
            <p className="text-gray-600 mb-6">
              Robust payment infrastructure for large-scale business operations.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Custom integration options</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Advanced security features</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Dedicated support team</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4">SaaS Solutions</h3>
            <p className="text-gray-600 mb-6">
              Subscription management and recurring billing for software companies.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Automated billing cycles</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Usage-based pricing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Customer portal</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-4">Marketplace Solutions</h3>
            <p className="text-gray-600 mb-6">
              Multi-vendor payment processing and split payments for marketplaces.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Automated payouts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Commission management</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Escrow services</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 