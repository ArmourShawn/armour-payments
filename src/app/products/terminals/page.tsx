import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import Link from 'next/link'

export default function PaymentTerminalsPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Payment Terminals
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Professional-grade payment terminals for secure and reliable transaction processing.
        </p>
      </header>
      <Prose className="mt-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2>Features</h2>
            <ul>
              <li>EMV chip card support</li>
              <li>Contactless payment (NFC)</li>
              <li>PIN pad security</li>
              <li>WiFi and Ethernet connectivity</li>
              <li>Receipt printing</li>
              <li>Battery backup</li>
              <li>Large display screen</li>
              <li>Durable construction</li>
            </ul>

            <h2>Benefits</h2>
            <ul>
              <li>Enhanced security features</li>
              <li>Fast transaction processing</li>
              <li>Reliable connectivity</li>
              <li>Clear transaction display</li>
              <li>Easy maintenance</li>
              <li>Long-lasting durability</li>
            </ul>
          </div>

          <div>
            <h2>Terminal Models</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="text-lg font-semibold">Countertop Terminal</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Professional terminal for fixed checkout locations with advanced security features.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="text-lg font-semibold">Mobile Terminal</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Portable solution with built-in battery and wireless connectivity.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <h3 className="text-lg font-semibold">Smart Terminal</h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Android-based terminal with app support and advanced features.
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
          <h2>Why Choose Armour Payments Terminals?</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Latest Technology</h3>
                <p className="mt-1 text-sm text-gray-500">State-of-the-art terminals with advanced features.</p>
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
                <p className="mt-1 text-sm text-gray-500">Fast installation and configuration process.</p>
              </div>
            </div>
          </div>
        </div>
      </Prose>
    </Container>
  )
} 