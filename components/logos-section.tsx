'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LogosSection() {
  const logos = [
    { 
      name: 'Acme', 
      logo: (
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <rect x="4" y="4" width="32" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 8V32" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <path d="M10 20h20" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        </svg>
      )
    },
    { 
      name: 'TechStack', 
      logo: (
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <rect x="6" y="8" width="28" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="6" y="17" width="28" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="6" y="26" width="28" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    { 
      name: 'DevPro', 
      logo: (
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <path d="M10 20L16 26L30 12" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
        </svg>
      )
    },
    { 
      name: 'CloudSync', 
      logo: (
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <path d="M10 24C8 24 6 22 6 20C6 18.5 7 17.2 8.3 16.8C9 14 11.2 12 13.8 12C14.5 12 15.2 12.1 15.8 12.3C16.8 10.5 18.7 9 21 9C23.8 9 26.2 10.8 27.2 13.2C28.1 13.1 29 13 30 13C33.3 13 36 15.7 36 19C36 21 35.1 22.8 33.8 24" 
                stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <circle cx="20" cy="26" r="2" fill="currentColor"/>
          <path d="M20 24v6" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        </svg>
      )
    },
    { 
      name: 'Finlo', 
      logo: (
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <rect x="8" y="12" width="24" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 18h24" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <circle cx="14" cy="15" r="1.5" fill="currentColor"/>
          <circle cx="20" cy="15" r="1.5" fill="currentColor"/>
          <circle cx="26" cy="15" r="1.5" fill="currentColor"/>
        </svg>
      )
    },
    { 
      name: 'Velocity', 
      logo: (
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <path d="M8 28L20 8L32 28" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="22" x2="28" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
          <line x1="16" y1="28" x2="24" y2="28" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
        </svg>
      )
    },
  ];

  return (
    <section className="py-16 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-400 text-sm mb-12 uppercase tracking-widest"
        >
          Used by teams at
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {logos.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center gap-3"
            >
              <div className="w-16 h-16 bg-gray-800/50 rounded-lg flex items-center justify-center border border-white/10 group hover:border-blue-500/50 transition-colors p-2">
                <div className="text-gray-500 group-hover:text-gray-300 transition-colors">
                  {item.logo}
                </div>
              </div>
              <span className="text-xs text-gray-500 text-center">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
