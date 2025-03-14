'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
  { name: 'Retail POS', href: '/solutions/retail' },
  { name: 'Restaurant POS', href: '/solutions/restaurant' },
  { name: 'Hotel & Hospitality', href: '/solutions/hospitality' },
  { name: 'Healthcare', href: '/solutions/healthcare' },
  { name: 'E-commerce', href: '/solutions/ecommerce' },
]

const products = [
  { name: 'Payment Terminals', href: '/products/terminals' },
  { name: 'POS Systems', href: '/products/pos-systems' },
  { name: 'Mobile Payments', href: '/products/mobile-payments' },
  { name: 'Online Payments', href: '/products/online-payments' },
  { name: 'Unattended Solutions', href: '/products/unattended' },
]

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 ring-1 shadow-xl ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        <MobileNavLink href="/about">About Us</MobileNavLink>
        <div className="py-2">
          <div className="px-2 font-semibold">Solutions</div>
          {solutions.map((item) => (
            <MobileNavLink key={item.name} href={item.href}>
              {item.name}
            </MobileNavLink>
          ))}
        </div>
        <div className="py-2">
          <div className="px-2 font-semibold">Products</div>
          {products.map((item) => (
            <MobileNavLink key={item.name} href={item.href}>
              {item.name}
            </MobileNavLink>
          ))}
        </div>
        <MobileNavLink href="/pricing">Pricing</MobileNavLink>
        <MobileNavLink href="/contact">Contact</MobileNavLink>
        <hr className="m-2 border-slate-300/40" />
        <MobileNavLink href="/login">Sign in</MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}

function DropdownMenu({ items, title }: { items: { name: string; href: string }[]; title: string }) {
  return (
    <Popover className="relative">
      <PopoverButton className="group inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900">
        <span>{title}</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </PopoverButton>

      <PopoverPanel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
        <div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-slate-900 shadow-lg ring-1 ring-slate-900/5">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block p-2 hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/about">About Us</NavLink>
              <DropdownMenu items={solutions} title="Solutions" />
              <DropdownMenu items={products} title="Products" />
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">Sign in</NavLink>
            </div>
            <Button href="/register" color="blue">
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
