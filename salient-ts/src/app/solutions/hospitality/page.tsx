import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import Link from 'next/link'

export default function HospitalityPOSPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Hotel & Hospitality Solutions
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Integrated payment solutions designed for hotels and hospitality businesses.
        </p>
      </header>
      <Prose className="mt-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2>Features</h2>
            <ul>
              <li>Property management system integration</li>
              <li>Room service management</li>
              <li>Event booking and billing</li>
              <li>Spa and wellness services</li>
              <li>Restaurant and bar management</li>
              <li>Guest billing and folio management</li>
              <li>Multi-currency support</li>
              <li>Concierge services integration</li>
            </ul>

            <h2>Benefits</h2>
            <ul>
              <li>Streamlined guest experience</li>
              <li>Improved operational efficiency</li>
              <li>Better revenue management</li>
              <li>Enhanced guest satisfaction</li>
              <li>Comprehensive reporting</li>
              <li>Seamless service integration</li>
            </ul>
          </div>

          <div>
            <h2>Hardware Options</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="text-lg font-semibold">Front Desk Terminals</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Professional terminals for check-in, check-out, and payment processing.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="text-lg font-semibold">Mobile POS Systems</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Portable solutions for room service and on-property transactions.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="text-lg font-semibold">Self-Service Kiosks</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Automated check-in and payment solutions for guest convenience.
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
          <h2>Why Choose Armour Payments for Hospitality?</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Industry Expertise</h3>
                <p className="mt-1 text-sm text-gray-500">Specialized solutions for hospitality businesses.</p>
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
                <p className="mt-1 text-sm text-gray-500">Fast implementation and staff training.</p>
              </div>
            </div>
          </div>
        </div>
      </Prose>
    </Container>
  )
} 