import { Metadata } from 'next';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Armour Payments',
  description: 'Get in touch with our team for any questions or support',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <ContactForm />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Address</h3>
                <p className="text-gray-600">
                  123 Payment Street<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-gray-600">support@armourpayments.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 