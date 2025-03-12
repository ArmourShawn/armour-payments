import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name:'Bitch',
    id: 'tier-basic',
    href: '/register',
    priceMonthly: '$99',
    description: 'Perfect for small businesses and startups looking for secure payment solutions.',
    features: [
      'Up to 100 transactions per month',
      'Basic escrow service',
      'Email support',
      '48-hour support response time',
      'Basic payment analytics'
    ],
  },
  {
    name: 'Business',
    id: 'tier-business',
    href: '/register',
    priceMonthly: '$299',
    description: 'Ideal for growing businesses with higher transaction volumes and custom needs.',
    features: [
      'Unlimited transactions',
      'Advanced escrow service',
      'Priority email & phone support',
      '24/7 dedicated support',
      'Advanced analytics dashboard',
      'Custom payment workflows',
      'API access'
    ],
  },
]

export default function Pricing() {
  return (
    <div className="isolate overflow-hidden bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-96 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold text-blue-400">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
            Simple, transparent pricing
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg font-medium text-pretty text-slate-400 sm:text-xl">
            Choose the plan that best fits your business needs. All plans include our secure escrow service and dedicated support.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#gradient-pricing)" />
            <defs>
              <radialGradient id="gradient-pricing">
                <stop stopColor="#3B82F6" />
                <stop offset={1} stopColor="#1E40AF" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 shadow-xl ring-slate-900/10 sm:p-10"
                >
                  <div>
                    <h3 id={tier.id} className="text-base font-semibold text-blue-600">
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-semibold tracking-tight text-slate-900">{tier.priceMonthly}</span>
                      <span className="text-base font-semibold text-slate-600">/month</span>
                    </div>
                    <p className="mt-6 text-base text-slate-600">{tier.description}</p>
                    <ul role="list" className="mt-10 space-y-4 text-sm text-slate-600">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-blue-600 px-3.5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Get started
                  </a>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-slate-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-base font-semibold text-blue-600">Enterprise</h3>
                  <p className="mt-1 text-base text-slate-600">
                    Need a custom solution? Contact our sales team for a tailored package that meets your specific requirements.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold text-blue-600 ring-1 ring-blue-200 hover:ring-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Contact sales <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 