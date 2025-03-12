import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Armour Payments',
  description: 'Learn about our mission and values at Armour Payments',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8">About Armour Payments</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Armour Payments, we're dedicated to revolutionizing the way businesses handle their financial transactions. 
              Our mission is to provide secure, efficient, and innovative payment solutions that empower businesses to grow 
              and succeed in the digital economy.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Security First:</span>
                <span className="text-gray-600">We prioritize the protection of your financial data above all else.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Innovation:</span>
                <span className="text-gray-600">Constantly evolving our solutions to meet tomorrow's challenges.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Reliability:</span>
                <span className="text-gray-600">Building trust through consistent, dependable service.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 