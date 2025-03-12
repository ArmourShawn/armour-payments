'use client'

import AnimatedHero from './components/AnimatedHero';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import { motion } from 'framer-motion';

export default function Home() {
  const title = "Secure Escrow Payments"
  const words = title.split(" ")

  return (
    <main>
      <Hero />
      <AnimatedHero>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl sm:text-7xl font-bold mb-8 tracking-tighter">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: wordIndex * 0.1 + letterIndex * 0.03,
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className="inline-block text-transparent bg-clip-text 
                        bg-gradient-to-r from-white to-white/80"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Streamline your business transactions with our trusted escrow payment solution. 
              Protect both buyers and sellers while ensuring smooth, secure payments.
            </motion.p>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="inline-block group relative bg-gradient-to-b from-white/10 to-white/5 
                p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl 
                transition-shadow duration-300">
                <a
                  href="/register"
                  className="rounded-[1.15rem] px-8 py-4 text-lg font-semibold backdrop-blur-md 
                    bg-blue-600/95 hover:bg-blue-600/100 text-white transition-all duration-300 
                    group-hover:-translate-y-0.5 border border-white/10 hover:shadow-md 
                    inline-block"
                >
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">Get Started</span>
                  <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                    transition-all duration-300 inline-block">→</span>
                </a>
              </div>
              <a href="/about" className="text-sm font-semibold leading-6 text-white group">
                Learn more{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  →
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </AnimatedHero>
      <Pricing />
    </main>
  );
} 