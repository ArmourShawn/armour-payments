import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import Link from 'next/link'

export default function RetailPOSPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Retail POS Solutions
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Complete point of sale solutions designed for retail businesses of all sizes.
        </p>
      </header>
      <Prose className="mt-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2>Features</h2>
            <ul>
              <li>Secure payment processing</li>
              <li>Inventory management</li>
              <li>Sales reporting and analytics</li>
              <li>Customer loyalty programs</li>
              <li>Employee management</li>
              <li>Multi-location support</li>
              <li>Cloud-based backup</li>
              <li>24/7 technical support</li>
            </ul>

            <h2>Benefits</h2>
            <ul>
              <li>Streamlined checkout process</li>
              <li>Reduced operational costs</li>
              <li>Improved inventory control</li>
              <li>Enhanced customer experience</li>
              <li>Real-time business insights</li>
              <li>Seamless integration with e-commerce</li>
            </ul>
          </div>

          <div>
            <h2>Hardware Options</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="text-lg font-semibold">Countertop Terminals</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Traditional payment terminals perfect for fixed checkout locations.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="text-lg font-semibold">Mobile POS Systems</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Portable solutions for flexible checkout anywhere in the store.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="text-lg font-semibold">Self-Service Kiosks</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Automated checkout solutions for high-volume locations.
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
          <h2>Why Choose Armour Payments for Retail?</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Competitive Rates</h3>
                <p className="mt-1 text-sm text-gray-500">Industry-leading pricing with no hidden fees.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">24/7 Support</h3>
                <p className="mt-1 text-sm text-gray-500">Round-the-clock technical and customer support.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Quick Setup</h3>
                <p className="mt-1 text-sm text-gray-500">Fast implementation and training process.</p>
              </div>
            </div>
          </div>
        </div>
      </Prose>
    </Container>
  )
} 