'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What kind of content can I upload?',
      answer:
        'You can upload PDFs, Word documents, text files, or paste your website URL directly. OnboardAI will analyze the content and create a trained AI assistant based on that information.',
    },
    {
      question: 'How long does it take to set up?',
      answer:
        'Less than 60 seconds! Upload your content, let our AI train on it, and you&apos;ll get a shareable link immediately. No technical setup required.',
    },
    {
      question: 'Can I use my own branding?',
      answer:
        'Absolutely! The Pro and Agency plans include full branding customization. Add your company logo, colors, and custom messaging to match your brand perfectly.',
    },
    {
      question: 'Is there a free trial?',
      answer:
        'Yes! Start with our free Starter plan that includes 1 chatbot and 100 conversations per month. Upgrade anytime when you&apos;re ready for more features.',
    },
    {
      question: 'How do I add the chatbot to my website?',
      answer:
        'It&apos;s as simple as adding a single line of code. We provide embed codes and integration guides for popular website builders and platforms. No coding knowledge required!',
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 border-b border-white/5">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently asked questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-left font-semibold text-white text-lg">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-blue-400" />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === i ? 'auto' : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-gray-400 leading-relaxed border-t border-white/10">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
