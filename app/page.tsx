'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  Zap, 
  MessageSquare, 
  Cpu, 
  Mic, 
  Image as ImageIcon,
  ChevronRight,
  Github,
  Twitter,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-dark border-b border-maroon/30 px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-maroon rounded-xl flex items-center justify-center border border-gold/30">
            <Bot className="text-gold" size={24} />
          </div>
          <span className="text-2xl font-bold gold-text tracking-tighter">NehPal AI</span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#features" className="hover:text-gold transition-colors">Features</Link>
          <Link href="#models" className="hover:text-gold transition-colors">Models</Link>
          <Link href="#pricing" className="hover:text-gold transition-colors">Pricing</Link>
          <Link href="#contact" className="hover:text-gold transition-colors">Contact</Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <Link href="/login" className="text-sm font-medium hover:text-gold transition-colors">Login</Link>
          <Link href="/chat" className="bg-maroon hover:bg-maroon-light text-white px-5 py-2 rounded-full border border-gold/30 transition-all text-sm font-bold shadow-[0_0_20px_rgba(128,0,0,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            Get Started
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden maroon-gradient">
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-maroon/20 border border-gold/20 px-3 py-1 rounded-full text-gold text-xs font-bold mb-6 tracking-widest uppercase">
              <Sparkles size={14} /> The Future of Intelligent Interaction
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
              Meet <span className="gold-text">NehPal</span>,<br />
              Your Personal AI <span className="text-maroon-light">Powerhouse</span>.
            </h1>
            <p className="text-gray-400 text-xl mb-10 max-w-lg leading-relaxed">
              An enterprise-grade AI assistant capable of solving code, analyzing files, generating art, and speaking naturally. Experience the luxury of intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/chat" className="flex items-center justify-center gap-2 bg-gold text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gold-light transition-all shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                Start Chatting <ChevronRight size={20} />
              </Link>
              <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm">
                Explore Features
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 opacity-60">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-maroon flex items-center justify-center text-[10px] font-bold">
                    U{i}
                  </div>
                ))}
              </div>
              <p className="text-sm">Trusted by 10,000+ professionals</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-dark rounded-3xl p-8 border border-gold/20 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-auto flex items-center gap-2 text-gold/60 text-[10px] font-mono tracking-widest uppercase">
                  <Zap size={10} /> Real-time Processing
                </div>
              </div>
              
              <div className="space-y-6 min-h-[300px]">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                    <Bot size={16} className="text-gold" />
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed text-gray-300">
                    Hello! I am NehPal AI. How can I assist you with your project today? I can help with coding, mathematics, research, or even generating high-fidelity images.
                  </div>
                </div>

                <div className="flex gap-4 justify-end">
                  <div className="bg-maroon p-4 rounded-2xl rounded-tr-none text-sm leading-relaxed border border-gold/30 shadow-[0_0_20px_rgba(128,0,0,0.4)]">
                    Analyze this React component and optimize it for performance.
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-maroon border border-gold/30 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold">YOU</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                    <Bot size={16} className="text-gold" />
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed text-gray-300">
                    <div className="flex items-center gap-2 text-gold mb-2 font-mono text-xs">
                      <Sparkles size={12} /> Optimization Strategy
                    </div>
                    Certainly. I'll use <span className="text-white font-mono">React.memo()</span> and <span className="text-white font-mono">useCallback</span> to prevent unnecessary re-renders.
                  </div>
                </div>
              </div>

              <div className="mt-8 relative">
                <div className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-5 pr-12 text-sm text-gray-500">
                  Ask anything...
                </div>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                  <Mic size={16} className="text-gray-500" />
                  <ArrowRight size={16} className="text-gold" />
                </div>
              </div>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-maroon rounded-full blur-[100px] opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold rounded-full blur-[100px] opacity-20"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black border-y border-maroon/20 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'AI Models', val: '12+' },
            { label: 'Languages', val: '100+' },
            { label: 'User Rating', val: '4.9/5' },
            { label: 'Processing Speed', val: '99ms' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="text-3xl font-black gold-text mb-1">{stat.val}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Elite <span className="text-gold">Capabilities</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need for a complete AI-driven workflow. From complex problem solving to creative art generation.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <MessageSquare className="text-gold" />, 
              title: "Conversational Intelligence", 
              desc: "Deep, human-like understanding with 128k context window support." 
            },
            { 
              icon: <Mic className="text-gold" />, 
              title: "Natural Voice Assistant", 
              desc: "Listen and speak naturally with 'Hey NehPal' wake word activation." 
            },
            { 
              icon: <ImageIcon className="text-gold" />, 
              title: "AI Image Generation", 
              desc: "Create stunning 4K images in 10+ artistic styles instantly." 
            },
            { 
              icon: <Cpu className="text-gold" />, 
              title: "Developer Powerhouse", 
              desc: "Code assistant with support for 100+ languages and real-time debugging." 
            },
            { 
              icon: <Globe className="text-gold" />, 
              title: "Real-time Search", 
              desc: "Access the internet for the latest news, citations, and research papers." 
            },
            { 
              icon: <ShieldCheck className="text-gold" />, 
              title: "Enterprise Security", 
              desc: "End-to-end encryption and compliance ready for corporate use." 
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-gold/30 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 bg-maroon/20 rounded-2xl flex items-center justify-center mb-6 border border-gold/10 group-hover:bg-maroon transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-maroon/20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-maroon rounded-lg flex items-center justify-center border border-gold/30">
                <Bot className="text-gold" size={18} />
              </div>
              <span className="text-xl font-bold gold-text tracking-tighter">NehPal AI</span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed">
              Designed for those who demand the best. NehPal AI combines the world's most advanced models with a premium user experience.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-maroon transition-colors">
                <Twitter size={18} />
              </div>
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-maroon transition-colors">
                <Github size={18} />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-gold uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>AI Chat</li>
              <li>Voice Assistant</li>
              <li>Image Generator</li>
              <li>Smart Search</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gold uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Help Center</li>
              <li>Enterprise</li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:row-reverse md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
          <p>© 2026 NehPal AI. All rights reserved.</p>
          <p>Created by Advanced Agentic Coding Team - Google DeepMind</p>
        </div>
      </footer>
    </div>
  );
}
