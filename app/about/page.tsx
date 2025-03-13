import { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Us - Armour Payments',
  description: 'Learn about our mission and values at Armour Payments',
}

export default function AboutPage() {
  return <AboutContent />
} 