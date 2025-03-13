import { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us - Armour Payments',
  description: 'Get in touch with our team for any questions or support',
}

export default function ContactPage() {
  return <ContactContent />
} 