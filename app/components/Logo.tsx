import Image from 'next/image'

interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export default function Logo({ variant = 'dark', className = 'h-8 w-auto' }: LogoProps) {
  const logoSrc = variant === 'dark' ? '/Armour Logo Dark.svg' : '/Armour Logo Light.svg'
  
  return (
    <Image
      src={logoSrc}
      alt="Armour Payments Logo"
      width={200}
      height={50}
      className={className}
    />
  )
} 