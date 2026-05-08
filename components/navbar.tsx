'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-white">OnboardAI</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
            How it works
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
            FAQ
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-gray-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-400" />
            )}
          </button>
          <a
            href="https://forms.gle/J5weiFcEqUa4CS8B7"
            className="hidden sm:block px-4 py-2 text-white border border-white/20 rounded-full hover:bg-white/10 transition-all text-sm"
          >
            Sign in
          </a>
          <a
            href="https://forms.gle/J5weiFcEqUa4CS8B7"
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all text-sm font-medium shadow-lg shadow-blue-600/50 hover:shadow-blue-600/70"
          >
            Get early access
          </a>
        </div>
      </div>
    </nav>
  );
}
