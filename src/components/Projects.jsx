import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, TrendingUp, Cpu, ShieldCheck, ArrowUpRight, Zap, Layers } from 'lucide-react';

export default function Projects() {
  const projectUrl = 'https://dhan-setu-ai-plan.lovable.app/';

  return (
    <section id="projects" className="py-24 relative bg-[#050814] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs font-bold text-sky-400 tracking-widest uppercase px-3 py-1 rounded bg-sky-950/60 border border-sky-800/40">
            08 — FEATURED PROJECT
          </span>
          <div className="h-px bg-white/10 flex-grow" />
        </motion.div>

        {/* Flagship Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-[#070D1F] border border-sky-400/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden group"
        >
          {/* Animated Ambient Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-sky-950 border border-sky-500/40 text-sky-300 font-mono text-xs font-bold flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-400" /> AI FINANCIAL PLATFORM
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-950 border border-blue-500/40 text-blue-300 font-mono text-xs font-bold">
                  FINTECH & AI
                </span>
              </div>

              <h3 className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight leading-tight">
                DhanSetu AI
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
                An intelligent AI-driven financial planning and wealth strategy web platform designed to analyze user financial inputs, optimize asset allocation, and generate actionable financial pathways.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 font-mono text-xs text-slate-300">
                  AI Financial Modeling
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 font-mono text-xs text-slate-300">
                  React / Frontend
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 font-mono text-xs text-slate-300">
                  Asset Strategy
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 font-mono text-xs text-slate-300">
                  Fintech UX
                </span>
              </div>

              {/* Live Web Link CTA Button */}
              <div className="pt-4">
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 text-white font-mono text-xs font-extrabold tracking-wider uppercase shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-300 group/btn"
                >
                  <span>LAUNCH LIVE APP</span>
                  <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Side: Animated Mockup Card Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-full max-w-sm rounded-2xl bg-slate-950 border border-sky-400/50 p-6 shadow-2xl relative overflow-hidden group/card cursor-pointer"
                onClick={() => window.open(projectUrl, '_blank')}
              >
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-mono text-[10px] text-sky-400">dhan-setu-ai-plan.lovable.app</span>
                </div>

                {/* Card Body Visual */}
                <div className="py-6 space-y-4 font-mono">
                  <div className="p-4 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="text-sky-400" size={20} />
                      <div>
                        <span className="text-xs text-white font-bold block">AI WEALTH ENGINE</span>
                        <span className="text-[10px] text-slate-400">Financial Planning AI</span>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      LIVE DEMO
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                    <div className="flex justify-between text-xs text-slate-300">
                      <span>FINANCIAL STRATEGY</span>
                      <span className="text-sky-400 font-bold">OPTIMIZED</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Action */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-xs text-sky-300 group-hover/card:text-white transition-colors">
                  <span className="flex items-center gap-1.5">
                    <ExternalLink size={14} /> VISIT PROJECT
                  </span>
                  <span className="text-[10px] text-slate-400">OPEN APP ↗</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
