import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import Link from 'next/link'

export default function UnattendedSolutionsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Unattended Solutions
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Self-service payment solutions for automated transactions.
        </p>
      </header>
      <Prose className="mt-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2>Features</h2>
            <ul>
              <li>24/7 operation</li>
              <li>Multiple payment methods</li>
              <li>Remote monitoring</li>
              <li>Automated maintenance</li>
              <li>Secure enclosures</li>
              <li>Weather-resistant design</li>
              <li>Real-time reporting</li>
              <li>Remote updates</li>
            </ul>

            <h2>Benefits</h2>
            <ul>
              <li>Reduced labor costs</li>
              <li>Increased revenue</li>
              <li>24/7 availability</li>
              <li>Minimal maintenance</li>
              <li>Enhanced security</li>
              <li>Better customer experience</li>
            </ul>
          </div>

          <div>
            <h2>Solution Types</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="text-lg font-semibold">Self-Service Kiosks</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Interactive kiosks for self-checkout and payment processing.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="text-lg font-semibold">Vending Machines</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Payment solutions for vending and automated retail.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="text-lg font-semibold">Parking Meters</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Smart parking payment solutions with mobile integration.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2>Why Choose Armour Payments Unattended Solutions?</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">24/7 Operation</h3>
                <p className="mt-1 text-sm text-gray-500">Continuous service without staff intervention.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Remote Monitoring</h3>
                <p className="mt-1 text-sm text-gray-500">Real-time monitoring and maintenance alerts.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Quick Deployment</h3>
                <p className="mt-1 text-sm text-gray-500">Fast installation and configuration process.</p>
              </div>
            </div>
          </div>
        </div>
      </Prose>
    </Container>
  )
} 