'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  Brain,
  Zap,
  Palette,
  Code,
  BarChart3,
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Upload,
      title: 'Upload anything',
      description: 'PDFs, docs, website URLs all supported',
    },
    {
      icon: Brain,
      title: 'AI trained on your content',
      description: 'Chatbot knows your exact product',
    },
    {
      icon: Zap,
      title: 'Live in 60 seconds',
      description: 'From upload to shareable link instantly',
    },
    {
      icon: Palette,
      title: 'Branded experience',
      description: 'Your client&apos;s name, colors, and logo',
    },
    {
      icon: Code,
      title: 'Embed anywhere',
      description: 'One line of code for any website',
    },
    {
      icon: BarChart3,
      title: 'Usage analytics',
      description: 'See which clients are actually engaging',
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
    <section id="features" className="py-24 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything you need to onboard clients at scale
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-blue-500/50 hover:bg-blue-600/10 transition-all duration-300"
              >
                <div className="mb-4 inline-block p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
