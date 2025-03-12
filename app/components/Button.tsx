import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'border border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2',
    blue:
      'border border-blue-300 text-blue-600 hover:border-blue-400 hover:bg-blue-50 active:bg-blue-100 active:text-blue-600 focus-visible:outline-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2',
  },
}

type ButtonProps = {
  variant?: keyof typeof baseStyles
  color?: 'slate' | 'blue' | 'white'
  className?: string
  href?: string
  type?: 'submit' | 'button' | 'reset'
} & (
  | Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>
  | Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>
) & {
  children: React.ReactNode
}

export default function Button({
  variant = 'solid',
  color = 'slate',
  className,
  href,
  type,
  children,
  ...props
}: ButtonProps) {
  const styles = variantStyles[variant][color as keyof (typeof variantStyles)[typeof variant]]
  className = clsx(baseStyles[variant], styles, className)

  return href ? (
    <Link href={href} className={className} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={className}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
} 