'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const reasons = [
  'Single point of contact for all interiors',
  'Factory-finished precision quality',
  'Transparent pricing with no hidden costs',
  'On-time delivery guaranteed',
  'Professional installation teams',
  'Comprehensive warranty coverage',
  '24/7 after-sales support',
  'Free 3D design consultation',
]

export function WhyChooseSection() {
  return (
    <section className="py-24 marble-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80"
                  alt="Modern living room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                  alt="Modern kitchen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                  alt="Villa exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                  alt="Interior detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Why Villa Owners Choose
              <br />
              <span className="text-primary">Ideal Factory</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We understand the unique challenges of villa interior projects. 
              Our comprehensive approach addresses every concern, ensuring a 
              seamless experience from design to delivery.
            </p>

            {/* Reasons List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
