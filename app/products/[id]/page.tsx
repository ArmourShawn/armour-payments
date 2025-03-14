'use client'

import { useState } from 'react'
import Link from 'next/link'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { CurrencyDollarIcon, GlobeAmericasIcon, ShieldCheckIcon, DevicePhoneMobileIcon, WifiIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

const product = {
  name: 'Stripe Reader S700',
  price: '$449',
  rating: 4.8,
  reviewCount: 128,
  description: `
    <p>The Stripe Reader S700 is a premium Android-based smart reader that can be enabled to run your custom POS. It's designed for businesses that need a powerful, flexible payment solution with advanced features.</p>
    <p>With its large touchscreen display and powerful Android operating system, the S700 can run your custom POS application directly on the device, eliminating the need for a separate tablet or computer.</p>
  `,
  features: [
    {
      name: 'Android-based smart reader',
      description: 'Run your custom POS app directly on the device',
      icon: DevicePhoneMobileIcon,
    },
    {
      name: 'End-to-end encryption',
      description: 'Secure payment processing with industry-standard encryption',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Wireless connectivity',
      description: 'Connect to your network via WiFi or cellular',
      icon: WifiIcon,
    },
    {
      name: 'Global payments',
      description: 'Accept payments from customers worldwide',
      icon: GlobeAmericasIcon,
    },
  ],
  specifications: [
    {
      name: 'Display',
      value: '7-inch touchscreen',
    },
    {
      name: 'Connectivity',
      value: 'WiFi, 4G LTE, Bluetooth',
    },
    {
      name: 'Battery life',
      value: 'Up to 8 hours',
    },
    {
      name: 'Payment methods',
      value: 'EMV chip, contactless, magstripe',
    },
  ],
  policies: [
    { name: 'Global shipping', icon: GlobeAmericasIcon, description: 'Free shipping to most countries' },
    { name: 'Secure payments', icon: ShieldCheckIcon, description: 'End-to-end encryption' },
  ],
}

const features = [
  {
    name: 'Spam report',
    description:
      'Autem reprehenderit aut debitis ut. Officiis harum omnis placeat blanditiis delectus sint vel et voluptatum.',
    icon: TrashIcon,
  },
  {
    name: 'Compose in markdown',
    description:
      'Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat. Voluptatem officiis necessitatibus.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Next Day Deposits',
    description:
      'Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. Ut et sunt id officiis vitae perspiciatis.',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: 'Customer connections',
    description:
      'Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis.',
    icon: HeartIcon,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {product.name}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Premium Android-based smart reader that can be enabled to run your custom POS
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Order now
                  </button>
                  <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                    Contact sales <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 ring-gray-900/10 md:-mr-20 lg:-mr-36" aria-hidden="true" />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" aria-hidden="true" />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            {product.name}
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">
                        <img
                          src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-featured-product-shot.jpg"
                          alt={product.name}
                          className="rounded-xl bg-gray-800 shadow-2xl ring-1 ring-gray-900/10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to accept payments
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The {product.name} comes with all the features you need to accept payments securely and efficiently.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {product.features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* New Animated Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
            >
              Stay on top of customer support
            </motion.h2>
            <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
                    >
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </motion.div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 text-base/7 text-gray-600">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Specifications</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technical details
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Detailed specifications and technical information about the {product.name}.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {product.specifications.map((spec) => (
                <div key={spec.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">{spec.name}</dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{spec.value}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Policies Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Policies</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shipping and security
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Learn about our shipping policies and security measures.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {product.policies.map((policy) => (
              <div key={policy.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <policy.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {policy.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{policy.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 