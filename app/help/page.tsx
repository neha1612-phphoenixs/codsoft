'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  MessageSquare, 
  LifeBuoy, 
  FileText, 
  ChevronDown, 
  Send,
  Mail,
  ShieldAlert,
  CreditCard,
  UserCircle,
  Bug,
  Search
} from 'lucide-react';

const FAQS = [
  { q: "How do I switch AI models?", a: "You can switch models anytime using the selector at the top of the chat interface. We support GPT-4, Gemini Pro, Claude Opus, and more." },
  { q: "Is my data secure?", a: "Yes, NehPal AI uses end-to-end encryption for all conversations. Your data is never sold or used for training without explicit consent." },
  { q: "Can I upload large PDF files?", a: "Pro users can upload files up to 100MB. Free users are limited to 10MB per file." },
  { q: "How does the voice assistant work?", a: "Simply say 'Hey NehPal' while the app is open, and the AI will start listening for your command naturally." },
];

export default function HelpDeskPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-white p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 bg-maroon rounded-2xl flex items-center justify-center border border-gold/30 mx-auto"
          >
            <LifeBuoy className="text-gold" size={32} />
          </motion.div>
          <h1 className="text-4xl font-black gold-text">How can we help?</h1>
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for articles, guides, or tickets..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 pr-12 focus:outline-none focus:border-gold/50 transition-all"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Technical Issue', icon: <Bug size={24} />, color: 'text-red-400' },
            { label: 'Payments', icon: <CreditCard size={24} />, color: 'text-green-400' },
            { label: 'Account', icon: <UserCircle size={24} />, color: 'text-blue-400' },
            { label: 'Security', icon: <ShieldAlert size={24} />, color: 'text-gold' }
          ].map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-3 cursor-pointer hover:border-gold/30 transition-all"
            >
              <div className={`${cat.color}`}>{cat.icon}</div>
              <div className="text-xs font-bold uppercase tracking-widest">{cat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-3xl border border-white/5 space-y-6">
            <h2 className="text-xl font-black flex items-center gap-2">
              <MessageSquare className="text-gold" size={20} /> Live Support
            </h2>
            <p className="text-gray-500 text-sm">
              Our AI support agent is online 24/7. For human assistance, tickets are usually answered within 2 hours.
            </p>
            <div className="space-y-4">
              <button className="w-full bg-maroon py-4 rounded-xl font-bold border border-gold/30 flex items-center justify-center gap-2 hover:bg-maroon-light transition-all">
                Start Live Chat
              </button>
              <button className="w-full border border-white/10 py-4 rounded-xl font-bold text-sm hover:bg-white/5 transition-all">
                Submit a Ticket
              </button>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/5 space-y-6">
            <h2 className="text-xl font-black flex items-center gap-2">
              <Mail className="text-gold" size={20} /> Contact Us
            </h2>
            <p className="text-gray-500 text-sm">
              Direct email support for enterprise clients and billing inquiries.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <Mail className="text-gray-500" size={18} />
                <span className="text-sm font-medium">support@nehpal.ai</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <HelpCircle className="text-gray-500" size={18} />
                <span className="text-sm font-medium">Help Center Documentation</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-6 pb-12">
          <h2 className="text-2xl font-black text-center mb-8">Frequently Asked <span className="text-gold">Questions</span></h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="glass rounded-2xl border border-white/5 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-all"
                >
                  <span className="font-bold text-sm">{faq.q}</span>
                  <ChevronDown className={`text-gold transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} size={18} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-sm text-gray-400 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
