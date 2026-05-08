'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 hero-grid opacity-30" />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-background to-background" />
      
      {/* Decorative blur elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-full border border-blue-500/30 text-blue-300 text-sm">
            <Sparkles className="w-4 h-4" />
            AI-powered onboarding
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-blue-200 to-blue-300 bg-clip-text text-transparent">
            Onboard every client with AI — instantly
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Upload your docs or paste your website. OnboardAI builds a branded AI assistant for your clients in under 60 seconds.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/50 hover:shadow-blue-600/70"
          >
            Start free — no credit card
          </a>
          <a
            href="#"
            className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/5 transition-all flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            See a live demo
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-gray-400 mb-12"
        >
          Trusted by 200+ agencies, consultants, and SaaS teams
        </motion.div>

        {/* Dashboard Preview Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-blue-900/20 to-transparent p-2">
            {/* Browser chrome */}
            <div className="bg-gray-900 rounded-t-xl border-b border-white/10 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="ml-4 text-xs text-gray-400">onboardai.io/client</div>
            </div>

            {/* Main content area */}
            <div className="aspect-video bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-xl flex overflow-hidden">
              {/* Left Sidebar */}
              <div className="w-1/4 bg-gray-900 border-r border-white/10 p-4 flex flex-col">
                <div className="text-xs font-semibold text-gray-400 mb-4">CLIENTS</div>
                {['Sarah Chen', 'Mike Johnson', 'Alex Kim', 'Casey Brooks'].map((name, i) => (
                  <div key={i} className={`py-2 px-2 rounded mb-2 text-xs ${i === 0 ? 'bg-blue-600/30 text-white' : 'text-gray-400 hover:bg-white/5'}`}>
                    {name}
                  </div>
                ))}
              </div>

              {/* Chat area */}
              <div className="flex-1 flex flex-col p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                  <div className="text-xs text-gray-300 font-semibold">Sarah Chen</div>
                  <div className="flex gap-2 text-xs text-gray-500">
                    <div>📞</div>
                    <div>⋯</div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 space-y-3 text-xs mb-4 overflow-hidden">
                  {/* AI message */}
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600/40 flex items-center justify-center text-xs">🤖</div>
                    <div className="bg-gray-800 rounded-lg px-3 py-2 text-gray-300 max-w-xs">
                      Hi Sarah! Welcome to Acme Corp. How can I help you today?
                    </div>
                  </div>

                  {/* User message */}
                  <div className="flex gap-2 justify-end">
                    <div className="bg-blue-600 rounded-lg px-3 py-2 text-white max-w-xs">
                      I need help setting up my account
                    </div>
                  </div>

                  {/* AI message */}
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-600/40 flex items-center justify-center text-xs">🤖</div>
                    <div className="bg-gray-800 rounded-lg px-3 py-2 text-gray-300 max-w-xs">
                      I can guide you through that! Let me show you...
                    </div>
                  </div>
                </div>

                {/* Input area */}
                <div className="flex gap-2">
                  <input type="text" placeholder="Type a message..." className="flex-1 bg-gray-800 rounded px-2 py-1 text-xs text-gray-300 placeholder-gray-500" />
                  <button className="px-2 py-1 bg-blue-600 rounded text-xs text-white">Send</button>
                </div>
              </div>

              {/* Right sidebar - Stats */}
              <div className="w-1/5 bg-gray-900 border-l border-white/10 p-4 flex flex-col">
                <div className="text-xs font-semibold text-gray-400 mb-4">STATS</div>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Response Time</div>
                    <div className="text-sm font-semibold text-green-400">0.8s</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Satisfaction</div>
                    <div className="text-sm font-semibold text-green-400">98%</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Topics Covered</div>
                    <div className="text-sm font-semibold text-blue-400">24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-600/10 rounded-2xl blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
