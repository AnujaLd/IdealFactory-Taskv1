'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Play, AlertTriangle, BadgeCheck, Clock, Headphones } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const problems = [
  {
    icon: AlertTriangle,
    title: 'Quality inconsistent',
    description: 'Materials and finishes often vary from what was promised',
  },
  {
    icon: BadgeCheck,
    title: 'Poor value for money',
    description: 'Overpriced solutions that do not match quality expectations',
  },
  {
    icon: Clock,
    title: 'Delays during execution',
    description: 'Projects extending weeks or months beyond schedule',
  },
  {
    icon: Headphones,
    title: 'Weak after-sales support',
    description: 'Difficult to get help once the project is complete',
  },
]

export function WhyDifficultSection() {
  return (
    <section id="about" className="py-24 marble-bg">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Why Villa Interior Projects Often Become Difficult?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            When homeowners purchase interiors from multiple suppliers, it becomes very difficult to coordinate and 
            match the different elements together. This process is frustrating for many reasons:
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <problem.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
              alt="Modern villa interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/60" />
            <button 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Play video"
            >
              <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
