'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function SolutionsHeroSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1920&q=80"
          alt="Marble texture"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-primary uppercase tracking-widest text-sm mb-4">Our</p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold">
            <span className="text-foreground/20">INTERIOR</span>
            <br />
            <span className="text-primary">SOLUTIONS</span>
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
