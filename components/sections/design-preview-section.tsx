'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const designTypes = [
  {
    id: 'kitchen',
    label: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  },
  {
    id: 'living',
    label: 'Living',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
  },
  {
    id: 'doors',
    label: 'Doors',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },
  {
    id: 'upvc',
    label: 'uPVC Windows',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
  },
]

export function DesignPreviewSection() {
  const [activeTab, setActiveTab] = useState('kitchen')

  return (
    <section id="process" className="py-24 marble-bg relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Interior background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Design Your Villa Interiors
              <br />
              <span className="text-primary">Before Spending a Fortune</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              See your dream interiors come to life with our complimentary 3D design 
              service. Visualize every detail before making any commitment.
            </p>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 bg-secondary/50 p-1 rounded-lg">
                {designTypes.map((type) => (
                  <TabsTrigger
                    key={type.id}
                    value={type.id}
                    className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {type.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Right - Preview Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-primary/20">
              {designTypes.map((type) => (
                <div
                  key={type.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeTab === type.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={type.image}
                    alt={type.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              ))}
              
              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
