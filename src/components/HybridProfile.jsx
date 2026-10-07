import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, TrendingUp, Zap, Sparkles } from 'lucide-react';

export default function HybridProfile() {
  const techPillars = [
    { name: 'Automation', detail: 'Email & WhatsApp workflows' },
    { name: 'Website Management', detail: 'Digital platform operations' },
    { name: 'Frontend Development', detail: 'HTML, CSS, JS & React (learning)' },
    { name: 'C / C++', detail: 'Core algorithms & memory logic' },
  ];

  const businessPillars = [
    { name: 'Finance', detail: 'Financial concepts & asset tracking' },
    { name: 'Sales', detail: 'Participant drive & outreach' },
    { name: 'Operations', detail: 'Event logistics & registration' },
    { name: 'Management', detail: 'Teamwork & business strategy' },
  ];

  return (
    <section className="py-28 relative bg-[#050814] border-t border-b border-white/5 overflow-hidden">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Large Signature Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 font-mono text-xs font-semibold mb-6">
            <Sparkles size={14} /> THE HYBRID IDENTITY
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight font-mono">
            "TECHNICAL ENOUGH TO BUILD.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300">
              BUSINESS-MINDED
            </span>{' '}
            ENOUGH TO UNDERSTAND WHY."
          </h2>
        </motion.div>

        {/* Dual Side Architecture with Sync Connection Beam */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          {/* Left Column: TECHNOLOGY */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-slate-950/90 border border-sky-500/30 shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                  <Cpu size={22} />
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold text-white">TECHNOLOGY</h3>
                  <span className="font-mono text-[10px] text-sky-400">EXECUTION CAPABILITY</span>
                </div>
              </div>
              <span className="font-mono text-xs text-slate-500">01</span>
            </div>

            <div className="space-y-4">
              {techPillars.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl bg-slate-900/80 border border-white/5 hover:border-sky-400/40 transition-colors"
                >
                  <h4 className="font-mono text-sm font-bold text-white mb-1">{item.name}</h4>
                  <p className="text-xs text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center Connector Beam (Desktop) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center my-4 lg:my-0">
            <div className="w-full h-px lg:w-px lg:h-48 bg-gradient-to-r lg:bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-500 relative flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center text-sky-400 shadow-lg shadow-sky-500/30 z-10 animate-[spin_8s_linear_infinite]">
                <Zap size={18} />
              </div>
            </div>
            <span className="font-mono text-[10px] text-sky-400 tracking-widest mt-2 uppercase font-bold">
              CSBS SYNC
            </span>
          </div>

          {/* Right Column: BUSINESS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-slate-950/90 border border-blue-500/30 shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400">
                  <TrendingUp size={22} />
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold text-white">BUSINESS</h3>
                  <span className="font-mono text-[10px] text-blue-400">STRATEGIC CONTEXT</span>
                </div>
              </div>
              <span className="font-mono text-xs text-slate-500">02</span>
            </div>

            <div className="space-y-4">
              {businessPillars.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl bg-slate-900/80 border border-white/5 hover:border-blue-400/40 transition-colors"
                >
                  <h4 className="font-mono text-sm font-bold text-white mb-1">{item.name}</h4>
                  <p className="text-xs text-slate-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
