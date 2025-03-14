'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  BuildingStorefrontIcon,
  DevicePhoneMobileIcon,
  WifiIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'
import Logo from '../Logo'

const terminals = [
  {
    name: 'Payments in Person',
    description: 'Accept payments securely with our in-person payment solutions',
    href: '/terminals/payments-in-person',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Wireless Payments',
    description: 'Process payments anywhere with wireless terminal solutions',
    href: '/terminals/wireless-payments',
    icon: WifiIcon,
  },
  {
    name: 'Mobile Payments',
    description: 'Turn your mobile device into a powerful payment terminal',
    href: '/terminals/mobile-payments',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Hotel & Hospitality',
    description: 'Specialized payment solutions for the hospitality industry',
    href: '/terminals/hotel-hospitality',
    icon: BuildingOffice2Icon,
  },
]

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    {
      name: 'Terminals',
      href: '/terminals',
      submenu: [
        { name: 'Payments in Person', href: '/terminals/payments-in-person' },
        { name: 'Wireless Payments', href: '/terminals/wireless-payments' },
        { name: 'Mobile Payments', href: '/terminals/mobile-payments' },
        { name: 'Hotel & Hospitality', href: '/terminals/hotel-hospitality' },
      ],
    },
    {
      name: 'Online',
      href: '/online',
      submenu: [
        { name: 'Payments Online', href: '/online/payments-online' },
        { name: 'eCommerce', href: '/online/ecommerce' },
        { name: 'Donations & Fundraising', href: '/online/donations-fundraising' },
      ],
    },
    {
      name: 'Point of Sale',
      href: '/point-of-sale-solutions',
      submenu: [
        { name: 'Restaurants', href: '/point-of-sale-solutions/restaurants' },
        { name: 'Custom Mobile App', href: '/point-of-sale-solutions/custom-mobile-app' },
        { name: 'Dejavoo POS', href: '/point-of-sale-solutions/dejavoo-pos' },
      ],
    },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'Gift & Loyalty', href: '/services/gift-loyalty' },
        { name: 'Multi-Merchant', href: '/services/multi-merchant' },
        { name: 'Buy Now Pay Later', href: '/services/buy-now-pay-later' },
        { name: 'Merchant Portal', href: '/services/merchant-portal' },
        { name: 'Home Currency Pay', href: '/services/home-currency-pay' },
      ],
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
}

export default function MainNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Logo variant="dark" className="h-8 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.main.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                >
                  {item.name === 'Terminals' ? (
                    <Popover className="relative">
                      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                        <span>Terminals</span>
                        <ChevronDownIcon aria-hidden="true" className="size-5" />
                      </PopoverButton>

                      <PopoverPanel
                        transition
                        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5 lg:max-w-3xl">
                          <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-3">
                            {terminals.map((item) => (
                              <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                  <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                </div>
                                <div>
                                  <Link href={item.href} className="font-semibold text-gray-900">
                                    {item.name}
                                    <span className="absolute inset-0" />
                                  </Link>
                                  <p className="mt-1 text-gray-600">{item.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="bg-gray-50 px-8 py-6">
                            <div className="flex items-center gap-x-3">
                              <h3 className="text-sm/6 font-semibold text-gray-900">Enterprise Solutions</h3>
                              <p className="rounded-full bg-indigo-600/10 px-2.5 py-1.5 text-xs font-semibold text-indigo-600">New</p>
                            </div>
                            <p className="mt-2 text-sm/6 text-gray-600">Empower your entire team with even more advanced tools.</p>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
                    >
                      {item.name}
                      {item.submenu && (
                        <svg
                          className="ml-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </Link>
                  )}

                  {/* Dropdown Menu for other items */}
                  <AnimatePresence>
                    {item.submenu && item.name !== 'Terminals' && openMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                      >
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setOpenMenu(openMenu ? null : 'mobile')}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={openMenu ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {openMenu === 'mobile' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden"
          >
            <div className="pt-2 pb-3 space-y-1">
              {navigation.main.map((item) => (
                <div key={item.name}>
                  {item.name === 'Terminals' ? (
                    <div className="px-3">
                      <div className="text-base font-medium text-gray-800 mb-2">Terminals</div>
                      <div className="grid grid-cols-1 gap-y-4 px-2">
                        {terminals.map((terminal) => (
                          <div key={terminal.name} className="group relative flex items-center gap-x-4">
                            <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <terminal.icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600" aria-hidden="true" />
                            </div>
                            <div>
                              <Link
                                href={terminal.href}
                                className="font-semibold text-gray-900 hover:text-blue-600"
                                onClick={() => setOpenMenu(null)}
                              >
                                {terminal.name}
                                <span className="absolute inset-0" />
                              </Link>
                              <p className="text-sm text-gray-600">{terminal.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 px-2 py-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-x-3">
                          <h3 className="text-sm font-semibold text-gray-900">Enterprise Solutions</h3>
                          <p className="rounded-full bg-blue-600/10 px-2 py-1 text-xs font-semibold text-blue-600">New</p>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">Discover our advanced terminal solutions for enterprise businesses.</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Link
                        href={item.href}
                        className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
                        onClick={() => setOpenMenu(null)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                              onClick={() => setOpenMenu(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 