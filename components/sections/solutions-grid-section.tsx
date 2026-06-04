'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const solutions = [
  {
    id: 'kitchens',
    title: 'Kitchens',
    description: 'Modern designs that perfectly balance function with aesthetics.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: 'wardrobes',
    title: 'Wardrobes & Closets',
    description: 'Spacious and smart storage solutions for every room.',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80',
  },
  {
    id: 'doors',
    title: 'Wooden Doors',
    description: 'Premium finishes built with craftsmanship and modern flair.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 'windows',
    title: 'Premium Window Systems',
    description: 'Quality windows for better comfort and energy efficiency.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
]

export function SolutionsGridSection() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-widest text-sm mb-4">Our Solutions</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            We provide all type of modular
          </h2>
          <p className="text-muted-foreground">
            KITCHEN, CLOSET, DOOR & WINDOW Services
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-0 relative">
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
