import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'

export default function AboutPage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          About Armour Payments
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Secure protected Payments, <span className="text-blue-600">Backed by Armour.</span>
        </p>
      </header>
      <Prose className="mt-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2>Nationwide Support</h2>
            <p>
              At Armour Payments we are proud to be a Canadian-owned and operated POS system company with a mission to provide unparalleled services with <em>extremely competitive pricing</em> to businesses of all types and sizes. <strong>Our team of consultants are available nationwide.</strong>
            </p>

            <h2>Exceptional Customer Service</h2>
            <p>
              Our dedication to exceptional customer service is unmatched in the industry and we provide unfailing support and guidance to our customers. We provide our clients the best pricing options in the industry and we ensure that our pricing is transparent and fair. Armour Payments in always one phone call away.
            </p>

            <h2>On Top of the Latest Trends and Technologies</h2>
            <p>
              We're always on top of the latest POS trends and technologies to ensure our merchants stay ahead of the curve too by providing them with the most advanced and secure payment processing solutions available.
            </p>
            <p>
              We work closely with businesses across Canada and provide tailored solutions that streamline their payment processes, enhance the customer experience, and support the growth of their businesses.
            </p>
            <p>
              <strong>Contact us today to learn more and get started.</strong>
            </p>
          </div>
          <div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">No Hidden Fees</h3>
                  <p className="mt-1 text-gray-500">Full disclosure on all rates and service fees.</p>
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
                  <p className="mt-1 text-gray-500">Multi-lingual account and technical support, including troubleshooting and full training.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Hassle Free</h3>
                  <p className="mt-1 text-gray-500">1-4 hour onsite replacement service.¹</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Lowest Rates Guarantee!</h3>
                  <p className="mt-1 text-gray-500">ARMOURPAYMENTS has the lowest rates available for merchants.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>¹As ARMOUR PAYMENTS aims to provide the highest level of terminal replacement service across the nation. Our 1-4 hour onsite terminal replacement service may not be available in certain rural areas and postal codes across Canada. We will strive to replace any non functioning terminals within 1-2 business days, if our onsite terminal replacement service isn't available in your area. Please contact our help desk 24/7 if you experience any issues with your hardware.</p>
        </div>
      </Prose>
    </Container>
  )
} 