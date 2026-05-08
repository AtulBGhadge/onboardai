'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

export default function LiveDemo() {
  const demoMessages = [
    {
      type: 'user',
      text: 'How do I get started?',
    },
    {
      type: 'ai',
      text: 'Great question! To get started, simply upload your documentation or paste your website URL. Our AI will analyze your content and create a branded chatbot in under 60 seconds. No coding required!',
    },
    {
      type: 'user',
      text: 'Can I customize the branding?',
    },
    {
      type: 'ai',
      text: 'Absolutely! You can customize the chatbot with your company colors, logo, and messaging to match your brand perfectly.',
    },
  ];

  const capabilities = [
    'Instant setup - no coding required',
    'AI trained on your specific content',
    'Seamless customer support',
    'Real-time analytics & insights',
    'Multi-language support',
    'Easy embeds & integrations',
  ];

  return (
    <section id="demo" className="py-24 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See it in action
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-blue-600" />
              <div>
                <p className="text-white font-semibold text-sm">OnboardAI Assistant</p>
                <p className="text-gray-500 text-xs">Always online</p>
              </div>
            </div>

            <div className="space-y-4 h-80 overflow-y-auto flex flex-col justify-end">
              {demoMessages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white/10 text-gray-100 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-4 mb-8">
              {capabilities.map((capability, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              href="#"
              className="w-fit px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/50 hover:shadow-blue-600/70"
            >
              Try the live demo
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
