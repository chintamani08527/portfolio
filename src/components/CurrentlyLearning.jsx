import React from 'react';
import { motion } from 'framer-motion';
import { Code, Flame, ArrowRight, Check } from 'lucide-react';

export default function CurrentlyLearning() {
  const stages = [
    { label: 'LEARNING', status: 'COMPLETED', desc: 'HTML5, CSS3, Modern JavaScript & Component Architecture.' },
    { label: 'PRACTICING', status: 'ACTIVE', desc: 'Building responsive layouts, Tailwind styling & UI states.' },
    { label: 'BUILDING', status: 'IN PROGRESS', desc: 'Developing full interactive portfolio & modular frontend apps.' },
    { label: 'IMPROVING', status: 'ONGOING', desc: 'Mastering Framer Motion animations & API integrations.' },
  ];

  return (
    <section className="py-24 relative bg-[#070C1D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs font-bold text-sky-400 tracking-widest uppercase px-3 py-1 rounded bg-sky-950/60 border border-sky-800/40">
            07 — CURRENTLY LEARNING
          </span>
          <div className="h-px bg-white/10 flex-grow" />
        </motion.div>

        {/* Featured Skill Card */}
        <div className="rounded-3xl bg-slate-950/90 border border-sky-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 shadow-inner">
                <Code size={30} />
              </div>
              <div>
                <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider block">
                  ACTIVE SKILL DEVELOPMENT
                </span>
                <h3 className="text-3xl font-extrabold text-white font-mono">
                  FRONTEND DEVELOPMENT
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-950 border border-sky-500/40 text-sky-300 font-mono text-xs font-bold">
              <Flame size={16} className="text-amber-400 animate-bounce" />
              <span>ACTIVE PIPELINE</span>
            </div>
          </div>

          {/* 4-Stage Learning Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, idx) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="p-6 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-sky-400/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-sky-400 font-bold">STAGE 0{idx + 1}</span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-white/5">
                      {stage.status}
                    </span>
                  </div>

                  <h4 className="font-mono text-xl font-extrabold text-white mb-2 tracking-wide group-hover:text-sky-300 transition-colors">
                    {stage.label}
                  </h4>

                  <p className="text-slate-300 text-xs leading-relaxed font-sans">
                    {stage.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>PROGRESS STATE</span>
                  {idx < 3 ? <ArrowRight size={14} className="text-sky-400" /> : <Check size={14} className="text-emerald-400" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
