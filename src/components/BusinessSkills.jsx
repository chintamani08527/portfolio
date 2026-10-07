import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Layers, ShoppingBag, Settings, Briefcase, ArrowRight, TrendingUp } from 'lucide-react';

export default function BusinessSkills() {
  const businessItems = [
    {
      id: '01',
      title: 'FINANCIAL CONCEPTS',
      icon: DollarSign,
      stage: 'FUNDAMENTALS',
      desc: 'Understanding baseline financial principles, budget allocation, cost accounting, and economic metrics.',
    },
    {
      id: '02',
      title: 'ASSET MANAGEMENT',
      icon: Layers,
      stage: 'RESOURCE TRACKING',
      desc: 'Organizing and tracking organizational assets, equipment allocation, and inventory efficiency.',
    },
    {
      id: '03',
      title: 'SALES & DISTRIBUTION',
      icon: ShoppingBag,
      stage: 'OUTREACH & CONVERSION',
      desc: 'Participant acquisition strategy, campaign execution, registration growth, and event ticket distribution.',
    },
    {
      id: '04',
      title: 'BUSINESS OPERATIONS',
      icon: Settings,
      stage: 'PROCESS EXECUTION',
      desc: 'Structuring day-to-day administrative flows, logistics handling, and workflow coordination.',
    },
    {
      id: '05',
      title: 'BUSINESS MANAGEMENT',
      icon: Briefcase,
      stage: 'STRATEGIC OVERVIEW',
      desc: 'Cross-functional leadership, team coordination, objective tracking, and strategic decision making.',
    },
  ];

  const businessFlowStages = [
    { label: 'IDEA', desc: 'Concept & Strategy' },
    { label: 'MANAGEMENT', desc: 'Resource Planning' },
    { label: 'OPERATION', desc: 'Execution & Logistics' },
    { label: 'GROWTH', desc: 'Value Creation' },
  ];

  return (
    <section id="business" className="py-24 relative bg-[#050814] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-xs font-bold text-sky-400 tracking-widest uppercase px-3 py-1 rounded bg-sky-950/60 border border-sky-800/40">
            03 — BUSINESS + FINANCE
          </span>
          <div className="h-px bg-white/10 flex-grow" />
        </motion.div>

        {/* Visual Metaphor: BUSINESS FLOW PIPELINE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-8 rounded-3xl bg-slate-950/80 border border-white/10 relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2">
              <TrendingUp size={20} className="text-sky-400" />
              <span>THE BUSINESS FLOW METAPHOR</span>
            </h3>
            <span className="font-mono text-xs text-sky-400">CSBS VALUE PIPELINE</span>
          </div>

          {/* Flow Stepper */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
            {businessFlowStages.map((stage, idx) => (
              <div key={stage.label} className="relative group">
                <div className="p-4 rounded-xl bg-slate-900 border border-white/5 hover:border-sky-400/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-sky-400 font-bold">STAGE 0{idx + 1}</span>
                    {idx < 3 && <ArrowRight size={16} className="text-slate-600 hidden md:block" />}
                  </div>
                  <h4 className="font-mono text-lg font-extrabold text-white tracking-wider mb-1">
                    {stage.label}
                  </h4>
                  <p className="text-xs text-slate-400 font-sans">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Card Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth">
            {businessItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  data-cursor="view"
                  className="min-w-[300px] sm:min-w-[340px] p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 hover:border-sky-400/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-2xl font-black text-slate-700 group-hover:text-sky-400 transition-colors">
                        {item.id}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-800/40 flex items-center justify-center text-sky-400">
                        <Icon size={20} />
                      </div>
                    </div>

                    <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest block mb-2 font-semibold">
                      {item.stage}
                    </span>

                    <h4 className="font-mono text-lg font-bold text-white mb-3 tracking-tight">
                      {item.title}
                    </h4>

                    <p className="text-slate-300 text-sm leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>BUSINESS DOMAIN</span>
                    <span className="text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      EXPLORE <ArrowRight size={12} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
