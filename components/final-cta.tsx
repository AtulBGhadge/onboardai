'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 border-b border-white/5 bg-gradient-to-b from-background via-blue-600/5 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Ready to transform your client onboarding?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-300 mb-8"
        >
          Join 200+ teams already using OnboardAI
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="#"
          className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/50 hover:shadow-blue-600/70"
        >
          Get started free
        </motion.a>
      </div>
    </section>
  );
}
