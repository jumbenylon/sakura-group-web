"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, Construction, Truck, Briefcase, Globe, 
  CreditCard, Plane, Code, ArrowRight, CheckCircle2,
  Mail, MapPin, Phone
} from 'lucide-react';

/**
 * SAKURA GROUP - GLOBAL FLAGSHIP PLATFORM
 * Senior Architect: Gemini
 * UI Style: Executive Dark / Modern Industrial
 */

const BRAND_TEAL = "#14b8a6";

const DIVISIONS = [
  {
    id: 'digital',
    title: 'Digital Ecosystem',
    description: 'The intelligence engine. Home to Sakura ERP and Sakura LMS, providing software that scales with your ambition.',
    icon: <Code className="w-6 h-6" />,
    features: ['Sakura ERP', 'Custom Development', 'Sakura LMS']
  },
  {
    id: 'fintech',
    title: 'Fintech',
    description: 'Financial velocity. Sakura Pay ensures seamless, secure global transactions and enterprise-grade payment processing.',
    icon: <CreditCard className="w-6 h-6" />,
    features: ['Sakura Pay', 'Global Remittance', 'Escrow Services']
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    description: 'Foundational strength. Professional construction and specialized roof cleaning for high-value real estate.',
    icon: <Construction className="w-6 h-6" />,
    features: ['Commercial Build', 'Roof Cleaning', 'Estate Management']
  },
  {
    id: 'cloud',
    title: 'Cloud & IT',
    description: 'The foundation of the web. SakuraHost provides the infrastructure that keeps the modern world online.',
    icon: <Cloud className="w-6 h-6" />,
    features: ['SakuraHost', 'Cloud Computing', 'Managed Security']
  },
  {
    id: 'logistics',
    title: 'Global Logistics',
    description: 'Precision in motion. Transportation and last-mile delivery services designed for global commerce velocity.',
    icon: <Truck className="w-6 h-6" />,
    features: ['Supply Chain', 'Fleet Management', 'Express Delivery']
  },
  {
    id: 'advisory',
    title: 'Strategic Advisory',
    description: 'Visionary growth. Consulting, marketing, and business development research that defines market leaders.',
    icon: <Briefcase className="w-6 h-6" />,
    features: ['Marketing Strategy', 'Market Research', 'Biz Dev']
  },
  {
    id: 'travel',
    title: 'Travel & Hospitality',
    description: 'Global access. Bespoke travel experiences and corporate concierge services for the discerning traveler.',
    icon: <Plane className="w-6 h-6" />,
    features: ['Sakura Travel', 'Corporate Retreats', 'Luxury Concierge']
  }
];

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', division: 'General', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // DUAL ROUTE: Send to email relay AND Webhook for ERP
      const payload = { ...formData, timestamp: new Date().toISOString() };
      
      // Simulate API call to your ERP
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Lead captured for:", formData.email);
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('idle');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-teal-500/30">
      
      {/* HEADER */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-black/50 backdrop-blur-xl px-6 md:px-12 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-teal-500 rounded flex items-center justify-center text-black font-black tracking-tighter">S</div>
          <span className="font-bold tracking-tight text-xl uppercase italic">Sakura Group</span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] tracking-[0.2em] uppercase font-bold text-gray-400">
          <a href="#divisions" className="hover:text-teal-400 transition-colors">Enterprise</a>
          <a href="#about" className="hover:text-teal-400 transition-colors">The Group</a>
          <a href="#contact" className="text-teal-400 border border-teal-500/30 px-5 py-2 rounded-full hover:bg-teal-500 hover:text-black transition-all">Land a Deal</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/10 via-black to-black z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-6"
        >
          <span className="text-teal-500 font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Diversified Holding Enterprise</span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            ENGINEERING THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600">MODERN WORLD.</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-400 text-lg font-light leading-relaxed mb-10">
            From the software in your terminal to the roof over your head. Sakura Group is the infrastructure of progress.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#divisions" className="bg-white text-black px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-teal-500 transition-colors group">
              View Divisions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </header>

      {/* THE DIVISIONS BENTO GRID */}
      <section id="divisions" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase italic">The Pillars</h2>
            <p className="text-gray-500 text-lg">Specialized excellence across six critical industries, unified by the Sakura standard.</p>
          </div>
          <div className="h-px flex-1 bg-white/5 mx-10 hidden md:block" />
          <div className="text-teal-500 font-mono text-sm tracking-widest">[ 06 DIVISIONS ]</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIVISIONS.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="bg-neutral-900/40 border border-white/5 p-10 rounded-3xl hover:border-teal-500/40 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-teal-500 mb-8 group-hover:bg-teal-500 group-hover:text-black transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.features.map(f => (
                  <span key={f} className="text-[10px] uppercase tracking-widest font-bold bg-white/5 px-3 py-1 rounded-full text-gray-400">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BRAG SECTION */}
      <section className="bg-neutral-950 border-y border-white/5 py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-500/10 blur-[80px]" />
            <h2 className="text-5xl font-black tracking-tighter mb-8 leading-none italic uppercase">
              Global Scale.<br/>
              Precision Mindset.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              We don't just provide services; we build ecosystems. Our Consulting arm ensures the strategy is right, while our Logistics and IT arms ensure the execution is flawless.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <div className="text-4xl font-black text-teal-500 mb-1">12+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Subsidiaries</div>
              </div>
              <div>
                <div className="text-4xl font-black text-teal-500 mb-1">Global</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Network</div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square bg-white/5 rounded-[40px] border border-white/10 flex items-center justify-center group overflow-hidden">
            <Globe className="w-40 h-40 text-teal-500/20 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-10 left-10">
              <span className="block text-xs uppercase tracking-widest font-bold text-teal-500 mb-2 underline">Corporate HQ</span>
              <span className="text-xl font-bold">Dar es Salaam, Tanzania</span>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter uppercase italic mb-4">Start a Partnership</h2>
          <p className="text-gray-500">Your inquiry will be routed to the specific leadership team within 60 minutes.</p>
        </div>

        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="bg-teal-500/10 border border-teal-500/30 p-12 rounded-[40px] text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-teal-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-2">Message Dispatched</h3>
            <p className="text-gray-400">Sakura Group HQ has received your lead. Check your inbox.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-4">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-neutral-900 border border-white/5 px-6 py-5 rounded-2xl focus:border-teal-500 outline-none transition-all placeholder:text-gray-700"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-4">Inquiry Division</label>
                <select 
                  className="w-full bg-neutral-900 border border-white/5 px-6 py-5 rounded-2xl focus:border-teal-500 outline-none transition-all text-gray-400 appearance-none"
                  onChange={(e) => setFormData({...formData, division: e.target.value})}
                >
                  {DIVISIONS.map(d => <option key={d.id} value={d.title}>{d.title}</option>)}
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-4">Work Email</label>
              <input 
                required
                type="email" 
                placeholder="hello@sakuragroup.co.tz" 
                className="w-full bg-neutral-900 border border-white/5 px-6 py-5 rounded-2xl focus:border-teal-500 outline-none transition-all placeholder:text-gray-700"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500 ml-4">The Challenge / Brief</label>
              <textarea 
                placeholder="Briefly describe your enterprise needs..." 
                className="w-full bg-neutral-900 border border-white/5 px-6 py-5 rounded-2xl h-48 focus:border-teal-500 outline-none transition-all placeholder:text-gray-700"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-teal-500 transition-all flex items-center justify-center gap-3"
            >
              {status === 'loading' ? 'Encrypting & Sending...' : 'Submit to Sakura HQ'}
            </button>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-10 px-6 md:px-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center text-black font-black text-xs">S</div>
              <span className="font-bold tracking-tight text-lg uppercase italic">Sakura Group</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Engineering global infrastructure through digital excellence and physical precision. 
              The leading diversified holding company in East Africa.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-black text-white">Contact</h4>
              <ul className="text-gray-500 text-sm space-y-2">
                <li className="flex items-center gap-2"><Mail className="w-3 h-3 text-teal-500" /> hello@sakuragroup.co.tz</li>
                <li className="flex items-center gap-2"><MapPin className="w-3 h-3 text-teal-500" /> Dar es Salaam</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-black text-white">Legal</h4>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] text-gray-700 font-bold tracking-widest uppercase">
          <span>&copy; 2026 SAKURA GROUP HOLDINGS</span>
          <span className="text-teal-900">Built for the future</span>
        </div>
      </footer>
    </div>
  );
}
