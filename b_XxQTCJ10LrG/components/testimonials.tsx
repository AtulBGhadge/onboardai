'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder, Digital Agency Pro',
      company: 'Digital Agency Pro',
      text: 'OnboardAI saved us countless hours. What used to take days now takes minutes. Our clients love the personalized experience.',
      rating: 5,
    },
    {
      name: 'James Rodriguez',
      role: 'CEO, SaaS Innovations',
      company: 'SaaS Innovations',
      text: 'The AI onboarding flow has reduced our support tickets by 40%. It\'s like having an extra team member handling the heavy lifting.',
      rating: 5,
    },
    {
      name: 'Emily Chen',
      role: 'Head of Operations, Consulting Hub',
      company: 'Consulting Hub',
      text: 'We recommended OnboardAI to all our partners. The platform is intuitive, powerful, and actually saves money. A no-brainer.',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What our users are saying
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-white font-semibold text-sm">
                  {testimonial.name}
                </p>
                <p className="text-blue-400 text-sm">
                  {testimonial.role}
                </p>
                <p className="text-gray-500 text-xs">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
