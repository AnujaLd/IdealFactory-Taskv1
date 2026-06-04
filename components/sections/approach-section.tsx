'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Users, Factory, Truck, Wrench, HeadphonesIcon } from 'lucide-react'

const steps = [
  {
    icon: Lightbulb,
    title: 'Multiple Interior Types',
    description: 'One-stop solution for all your modular interior needs',
  },
  {
    icon: Users,
    title: 'Client-Driven Design',
    description: 'Designs tailored to your unique style and requirements',
  },
  {
    icon: Factory,
    title: 'Precision Manufacturing & Installation',
    description: 'Factory-finished products installed by expert teams',
  },
  {
    icon: Truck,
    title: 'Direct Delivery',
    description: 'Seamless delivery right to your villa doorstep',
  },
  {
    icon: Wrench,
    title: 'Quality Installation',
    description: 'Professional installation with attention to detail',
  },
  {
    icon: HeadphonesIcon,
    title: 'After Sales Support & Maintenance',
    description: 'Continued support even after project completion',
  },
]

export function ApproachSection() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              The Ideal Factory
              <br />
              <span className="text-primary">Approach</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We have streamlined the entire process to deliver exceptional villa interiors 
              without the usual headaches. Our end-to-end approach ensures quality, 
              consistency, and peace of mind throughout your project.
            </p>
          </motion.div>

          {/* Right - Steps Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-secondary/50 rounded-xl p-4 text-center hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xs font-medium text-foreground leading-tight">
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
