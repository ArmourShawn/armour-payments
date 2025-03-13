'use client'

import { motion } from 'framer-motion'

export default function AboutContent() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            About Armour Payments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-xl text-gray-500"
          >
            Secure payment solutions for businesses of all sizes
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-5">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Our Mission</h3>
              <p className="text-base text-gray-500">
                To provide secure, reliable, and innovative payment solutions that help businesses thrive in the digital age.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Our Vision</h3>
              <p className="text-base text-gray-500">
                To be the leading provider of payment solutions, known for our security, reliability, and exceptional customer service.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Our Values</h3>
              <p className="text-base text-gray-500">
                Security, Innovation, Customer Focus, and Integrity are at the core of everything we do.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
          <p className="mt-4 text-lg text-gray-500">
            Founded with a vision to revolutionize payment processing, Armour Payments has grown to become a trusted partner for businesses across industries. Our commitment to security and innovation has helped us build lasting relationships with our clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Secure Solutions',
                description: 'State-of-the-art security measures to protect your transactions.',
              },
              {
                title: 'Innovative Technology',
                description: 'Cutting-edge payment solutions that keep you ahead of the curve.',
              },
              {
                title: 'Expert Support',
                description: '24/7 dedicated support team to assist you with any questions.',
              },
            ].map((feature) => (
              <div key={feature.title} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 