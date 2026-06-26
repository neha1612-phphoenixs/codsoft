'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Paperclip, 
  Mic, 
  Plus, 
  Search, 
  MessageSquare, 
  Settings, 
  User, 
  LogOut,
  Bot,
  Trash2,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Share2,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  Globe,
  Code,
  Image as ImageIcon,
  Check
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Link from 'next/link';
import VoiceAssistant from '@/components/voice-assistant';

// Mock Data
const MODELS = [
  { id: 'gpt-4o', name: 'GPT-4o', icon: <Bot size={16} />, provider: 'OpenAI' },
  { id: 'gemini-1.5-pro', name: 'Gemini Pro', icon: <Sparkles size={16} />, provider: 'Google' },
  { id: 'claude-3-opus', name: 'Claude Opus', icon: <Zap size={16} />, provider: 'Anthropic' },
  { id: 'deepseek-v3', name: 'DeepSeek v3', icon: <Bot size={16} />, provider: 'DeepSeek' },
];

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I am **NehPal AI**. How can I help you today? I can assist with coding, documents, research, or even just a friendly chat.", time: '12:00 PM' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const newUserMsg = { role: 'user', content: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages([...messages, newUserMsg]);
    setInput('');
    setLoading(true);

    // Mock AI Response
    setTimeout(() => {
      const aiResponse = { 
        role: 'assistant', 
        content: `I am processing your request using **${selectedModel.name}**. \n\nHere is a quick breakdown:\n1. Your request: "${input}"\n2. Status: Successfully processed.\n\n\`\`\`javascript\nconst hello = "World";\nconsole.log(\`NehPal AI at your service: \${hello}\`);\n\`\`\``,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      };
      setMessages((prev) => [...prev, aiResponse]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-[#080808] text-white overflow-hidden">
      
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {sidebarOpen && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 280, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="glass-dark border-r border-maroon/30 flex flex-col h-full z-40"
          >
            <div className="p-4 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-maroon rounded-lg flex items-center justify-center border border-gold/30">
                  <Bot className="text-gold" size={18} />
                </div>
                <span className="text-lg font-black gold-text tracking-tighter">NehPal AI</span>
              </Link>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-500 hover:text-white p-1 hover:bg-white/5 rounded-lg">
                <ChevronLeft size={20} />
              </button>
            </div>

            <div className="px-4 py-2">
              <button className="w-full flex items-center gap-2 bg-maroon hover:bg-maroon-light transition-colors py-3 px-4 rounded-xl border border-gold/30 font-bold text-sm shadow-[0_0_15px_rgba(128,0,0,0.3)]">
                <Plus size={18} /> New Conversation
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
              <div className="px-3 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Recent History</div>
              {['Market Analysis Pro', 'React Performance Help', 'Python Scripting', 'Design Feedback'].map((chat, i) => (
                <div key={i} className="group flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 cursor-pointer transition-all border border-transparent hover:border-white/10">
                  <MessageSquare size={16} className="text-gray-500 group-hover:text-gold" />
                  <span className="text-sm text-gray-300 truncate font-medium">{chat}</span>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-white/5 space-y-2">
              <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-full bg-maroon flex items-center justify-center text-xs font-bold border border-gold/30">L</div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold truncate">Premium User</div>
                  <div className="text-[10px] text-gold font-bold">Pro Plan</div>
                </div>
                <Settings size={16} className="text-gray-500 hover:text-white cursor-pointer" />
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {!sidebarOpen && (
        <button 
          onClick={() => setSidebarOpen(true)}
          className="absolute left-4 top-4 z-50 p-2 glass rounded-xl border border-gold/30 gold-text hover:bg-white/5"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative maroon-gradient">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 glass-dark z-30">
          <div className="flex items-center gap-4">
            <div className="flex bg-black/60 border border-white/10 rounded-full p-1">
              {MODELS.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold transition-all ${
                    selectedModel.id === model.id 
                    ? 'bg-maroon text-white shadow-lg border border-gold/30' 
                    : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {model.icon} <span>{model.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg border border-gold/20 text-gold text-[10px] font-bold hover:bg-white/5">
              <Globe size={14} /> Search On
            </button>
            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
            <Share2 size={18} className="text-gray-500 hover:text-white cursor-pointer" />
            <MoreVertical size={18} className="text-gray-500 hover:text-white cursor-pointer" />
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8 no-scrollbar">
          {messages.map((msg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-6 max-w-4xl mx-auto ${msg.role === 'user' ? 'justify-end' : ''}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-10 h-10 rounded-xl bg-maroon border border-gold/30 flex items-center justify-center shrink-0 shadow-lg">
                  <Bot className="text-gold" size={20} />
                </div>
              )}
              
              <div className={`flex flex-col gap-2 max-w-[80%] ${msg.role === 'user' ? 'items-end' : ''}`}>
                <div className={`p-5 rounded-3xl text-sm leading-relaxed ${
                  msg.role === 'assistant' 
                  ? 'bg-white/5 border border-white/10 text-gray-200' 
                  : 'bg-maroon border border-gold/30 text-white shadow-[0_0_20px_rgba(128,0,0,0.3)]'
                }`}>
                  {/* Basic Markdown Rendering Mock */}
                  <div className="prose prose-invert max-w-none">
                    {msg.content.split('\n').map((line, idx) => {
                      if (line.startsWith('```')) return null;
                      if (line.includes('```')) return null;
                      return <p key={idx} className="mb-2">{line}</p>;
                    })}
                    
                    {msg.content.includes('```javascript') && (
                      <div className="rounded-xl overflow-hidden my-4 border border-white/10 shadow-2xl">
                        <div className="bg-black/80 px-4 py-2 flex justify-between items-center border-b border-white/5">
                          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">JavaScript</span>
                          <Copy size={12} className="text-gray-500 hover:text-gold cursor-pointer" />
                        </div>
                        <SyntaxHighlighter 
                          language="javascript" 
                          style={atomDark}
                          customStyle={{ background: 'transparent', padding: '1.5rem', fontSize: '0.8rem' }}
                        >
                          {`const hello = "World";\nconsole.log(\`NehPal AI at your service: \${hello}\`);`}
                        </SyntaxHighlighter>
                      </div>
                    )}
                  </div>
                </div>

                {msg.role === 'assistant' && (
                  <div className="flex items-center gap-4 ml-2 mt-1">
                    <button className="text-gray-500 hover:text-gold transition-colors"><Copy size={14} /></button>
                    <button className="text-gray-500 hover:text-green-500 transition-colors"><ThumbsUp size={14} /></button>
                    <button className="text-gray-500 hover:text-red-500 transition-colors"><ThumbsDown size={14} /></button>
                    <button className="text-gray-500 hover:text-white transition-colors"><RotateCcw size={14} /></button>
                    <span className="text-[10px] text-gray-600 font-mono ml-auto">{msg.time}</span>
                  </div>
                )}
                {msg.role === 'user' && (
                  <span className="text-[10px] text-gray-600 font-mono mr-2">{msg.time}</span>
                )}
              </div>

              {msg.role === 'user' && (
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <User className="text-gray-400" size={20} />
                </div>
              )}
            </motion.div>
          ))}
          {loading && (
            <div className="flex gap-6 max-w-4xl mx-auto">
              <div className="w-10 h-10 rounded-xl bg-maroon border border-gold/30 flex items-center justify-center shrink-0 animate-pulse">
                <Bot className="text-gold" size={20} />
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm italic">
                <div className="w-2 h-2 bg-gold rounded-full animate-bounce delay-0"></div>
                <div className="w-2 h-2 bg-gold rounded-full animate-bounce delay-150"></div>
                <div className="w-2 h-2 bg-gold rounded-full animate-bounce delay-300"></div>
                NehPal is thinking...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6">
          <div className="max-w-4xl mx-auto relative flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2 ml-2 overflow-x-auto no-scrollbar">
              <button className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 hover:bg-maroon/20 hover:text-gold transition-all whitespace-nowrap">
                <Code size={12} /> Explain Code
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 hover:bg-maroon/20 hover:text-gold transition-all whitespace-nowrap">
                <ImageIcon size={12} /> Generate Image
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 hover:bg-maroon/20 hover:text-gold transition-all whitespace-nowrap">
                <Sparkles size={12} /> Summarize PDF
              </button>
            </div>
            
            <div className="relative glass border border-gold/20 rounded-2xl overflow-hidden focus-within:border-gold/50 transition-all shadow-2xl">
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                placeholder="Ask NehPal anything..." 
                className="w-full bg-black/40 py-4 px-6 pr-32 text-sm focus:outline-none resize-none min-h-[60px] max-h-[300px] text-gray-200"
                rows={1}
              />
              <div className="absolute right-4 bottom-4 flex items-center gap-3">
                <button className="p-2 text-gray-500 hover:text-gold transition-colors">
                  <Paperclip size={20} />
                </button>
                <div className="flex gap-2">
                  <VoiceAssistant 
                    onWakeWord={() => setIsVoiceActive(true)}
                    onTranscript={(text) => setInput(text)}
                    isSpeaking={loading}
                  />
                </div>
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || loading}
                  className={`p-2 rounded-lg transition-all ${input.trim() && !loading ? 'bg- gold text-black shadow-lg shadow-gold/20 hover:scale-110' : 'bg-gray-800 text-gray-600 cursor-not-allowed'}`}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
            <div className="text-center text-[10px] text-gray-600 mt-2">
              NehPal AI can make mistakes. Check important info. Premium Edition 2026.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
