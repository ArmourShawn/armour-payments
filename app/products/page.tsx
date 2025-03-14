'use client'

import Link from 'next/link'
import { StarIcon } from '@heroicons/react/20/solid'
import { BuildingStorefrontIcon, DevicePhoneMobileIcon, WifiIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline'

const products = [
  {
    id: 1,
    name: 'Stripe Reader S700',
    description: 'Premium Android-based smart reader that can be enabled to run your custom POS',
    price: '$449',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
    imageAlt: 'Stripe Reader S700',
    rating: 4.8,
    reviewCount: 128,
    features: [
      'Android-based smart reader',
      'Custom POS app support',
      'End-to-end encryption',
      'EMV certified'
    ]
  },
  {
    id: 2,
    name: 'BBPOS WisePOS E',
    description: 'Smart reader that pairs with your POS device',
    price: '$299',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-product-shot-01.jpg',
    imageAlt: 'BBPOS WisePOS E',
    rating: 4.5,
    reviewCount: 256,
    features: [
      'Smart reader with POS integration',
      'End-to-end encryption',
      'EMV certified',
      'Wireless connectivity'
    ]
  },
  {
    id: 3,
    name: 'BBPOS WisePad 3',
    description: 'Compact mobile reader with PIN pad that pairs with your POS device',
    price: '$79',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-product-shot-02.jpg',
    imageAlt: 'BBPOS WisePad 3',
    rating: 4.2,
    reviewCount: 512,
    features: [
      'Compact mobile reader',
      'Built-in PIN pad',
      'End-to-end encryption',
      'EMV certified'
    ]
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Unify online and in-person payments
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Leading enterprises and platforms use Armour Payments to unify commerce across channels, seamlessly integrate payments with their point of sale, and easily manage their hardware needs.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="#products"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Start now
                  </Link>
                  <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                    Contact sales <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Take payments in more places</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Accept in-person payments in a wide range of scenarios, whether stationary or on the move. All readers support end-to-end or point-to-point encryption, and are EMV certified.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    <Link href={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-lg font-medium text-gray-900">{product.price}</p>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    {product.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'size-5 shrink-0',
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <svg className="mr-2 h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Unified Commerce</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Create a cohesive customer experience
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              By consolidating payments data on a unified commerce platform, you can recognise repeat customers, provide personalised service such as product recommendations, and enable seamless experiences like in-store pickup for online orders.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 