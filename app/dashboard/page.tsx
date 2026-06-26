'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Image as ImageIcon, 
  Clock, 
  Star, 
  TrendingUp,
  Brain,
  Mic,
  Database,
  ArrowUpRight,
  ChevronRight,
  Bot
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import Link from 'next/link';

const DATA = [
  { name: 'Mon', usage: 400 },
  { name: 'Tue', usage: 300 },
  { name: 'Wed', usage: 600 },
  { name: 'Thu', usage: 800 },
  { name: 'Fri', usage: 500 },
  { name: 'Sat', usage: 200 },
  { name: 'Sun', usage: 100 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black gold-text">Analytics Dashboard</h1>
            <p className="text-gray-500 text-sm">Welcome back, Lex. Here is your NehPal usage summary.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/chat" className="bg-maroon hover:bg-maroon-light px-6 py-2 rounded-xl flex items-center gap-2 border border-gold/30 transition-all shadow-[0_0_20px_rgba(128,0,0,0.2)]">
              <Plus size={18} /> New Chat
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Chats', val: '1,284', icon: <MessageSquare className="text-gold" />, trend: '+12%' },
            { label: 'AI Usage', val: '84.2k tokens', icon: <Brain className="text-gold" />, trend: '+5%' },
            { label: 'Voice Commands', val: '243', icon: <Mic className="text-gold" />, trend: '+18%' },
            { label: 'Saved Docs', val: '56', icon: <FileText className="text-gold" />, trend: '+2%' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-maroon/20 rounded-lg border border-gold/10">
                  {stat.icon}
                </div>
                <div className="text-xs font-bold text-green-500 flex items-center gap-1">
                  <TrendingUp size={12} /> {stat.trend}
                </div>
              </div>
              <div className="text-2xl font-black mb-1">{stat.val}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass p-6 rounded-3xl border border-white/5">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <BarChart3 size={20} className="text-gold" /> Usage Activity
              </h3>
              <select className="bg-black/40 border border-white/10 rounded-lg px-3 py-1 text-xs outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={DATA}>
                  <defs>
                    <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#800000" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#800000" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis dataKey="name" stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ background: '#121212', border: '1px solid #333', borderRadius: '12px', fontSize: '12px' }}
                    itemStyle={{ color: '#D4AF37' }}
                  />
                  <Area type="monotone" dataKey="usage" stroke="#D4AF37" fillOpacity={1} fill="url(#colorUsage)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass p-6 rounded-3xl border border-white/5">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Database size={20} className="text-gold" /> Model Distribution
            </h3>
            <div className="space-y-6">
              {[
                { name: 'GPT-4o', percent: 65, color: '#800000' },
                { name: 'Gemini Pro', percent: 20, color: '#D4AF37' },
                { name: 'Claude Opus', percent: 10, color: '#555' },
                { name: 'Others', percent: 5, color: '#222' }
              ].map((model, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span>{model.name}</span>
                    <span className="text-gray-500">{model.percent}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${model.percent}%` }}
                      style={{ backgroundColor: model.color }}
                      className="h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-maroon/10 border border-gold/10 rounded-2xl">
              <div className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Pro Tip</div>
              <p className="text-xs text-gray-400">Switching to Claude Opus for legal documents increases accuracy by 15%.</p>
            </div>
          </div>
        </div>

        {/* Recent Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-3xl border border-white/5">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Clock size={20} className="text-gold" /> Recent Conversations
            </h3>
            <div className="space-y-4">
              {[
                { title: 'Project Arch Review', time: '2 hours ago', tag: 'Coding' },
                { title: 'Legal Contract Draft', time: '5 hours ago', tag: 'Finance' },
                { title: 'Email to Stakeholders', time: 'Yesterday', tag: 'Work' },
                { title: 'Image Generation v3', time: '2 days ago', tag: 'Creative' }
              ].map((chat, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-maroon/20 rounded-xl flex items-center justify-center border border-white/5">
                      <MessageSquare size={18} className="text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{chat.title}</div>
                      <div className="text-[10px] text-gray-500">{chat.time}</div>
                    </div>
                  </div>
                  <div className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded-md text-gray-400 uppercase tracking-tighter">
                    {chat.tag}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 text-sm font-bold text-gray-500 hover:text-gold transition-colors flex items-center justify-center gap-2">
              View All History <ChevronRight size={16} />
            </button>
          </div>

          <div className="glass p-6 rounded-3xl border border-white/5">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <FileText size={20} className="text-gold" /> Uploaded Files
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Resume.pdf', size: '1.2 MB' },
                { name: 'Income_Statement.xlsx', size: '256 KB' },
                { name: 'Logo_Mockup.png', size: '4.5 MB' },
                { name: 'Project_Specs.docx', size: '890 KB' }
              ].map((file, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-2 hover:border-gold/30 transition-all cursor-pointer">
                  <FileText className="text-gold" size={24} />
                  <div className="text-sm font-bold truncate">{file.name}</div>
                  <div className="text-[10px] text-gray-500 uppercase">{file.size}</div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 text-sm font-bold text-gray-500 hover:text-gold transition-colors flex items-center justify-center gap-2">
              Manage Documents <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

const Plus = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
