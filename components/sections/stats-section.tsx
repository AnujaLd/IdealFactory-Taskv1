'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Expert Craftsmen' },
]

export function StatsSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80"
          alt="Interior background"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Designed. Built. <span className="text-primary">Delivered.</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
          ].map((src, index) => (
            <div
              key={index}
              className="relative h-48 md:h-64 rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`Interior project ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
