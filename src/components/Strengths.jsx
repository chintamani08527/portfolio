import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Users, Calendar, Award, Lightbulb, Zap, Briefcase } from 'lucide-react';

export default function Strengths() {
  const [activeStrength, setActiveStrength] = useState(0);

  const strengthsList = [
    {
      title: 'COMMUNICATION',
      icon: MessageSquare,
      desc: 'Clear, articulate verbal & written communication across technical teams, event delegates, and campus leadership.',
    },
    {
      title: 'TEAMWORK',
      icon: Users,
      desc: 'Collaborative team player experienced in working alongside diverse student committees and volunteer groups.',
    },
    {
      title: 'EVENT COORDINATION',
      icon: Calendar,
      desc: 'End-to-end participant registration drive, schedule management, and on-site event facilitation for TechNegotia.',
    },
    {
      title: 'LEADERSHIP',
      icon: Award,
      desc: 'Taking initiative in outreach efforts and setting volunteer registration benchmarks.',
    },
    {
      title: 'PROBLEM SOLVING',
      icon: Lightbulb,
      desc: 'Analytical approach to resolving operational bottlenecks, registration bugs, and logistics hurdles.',
    },
    {
      title: 'QUICK LEARNING',
      icon: Zap,
      desc: 'Rapidly assimilating new frameworks, tools, automated messaging systems, and web technologies.',
    },
    {
      title: 'BUSINESS MINDSET',
      icon: Briefcase,
      desc: 'Viewing technical solutions through commercial value, asset efficiency, and organizational goals.',
    },
  ];

  return (
    <section id="strengths" className="py-24 relative bg-[#070C1D] border-t border-white/5">
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
            05 — STRENGTHS
          </span>
          <div className="h-px bg-white/10 flex-grow" />
        </motion.div>

        {/* Interactive Kinetic Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengthsList.map((strength, idx) => {
            const Icon = strength.icon;
            const isSelected = activeStrength === idx;

            return (
              <motion.div
                key={strength.title}
                data-cursor="pointer"
                onMouseEnter={() => setActiveStrength(idx)}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-sky-400 shadow-xl shadow-sky-500/15 ring-1 ring-sky-400/40'
                    : 'bg-slate-950/70 border-white/10 hover:border-sky-500/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-sky-500 text-slate-950' : 'bg-slate-900 text-sky-400'
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                  </div>

                  <h3 className="font-mono text-xl font-bold text-white mb-3 tracking-tight">
                    {strength.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed font-sans">
                    {strength.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>CORE COMPETENCY</span>
                  <span className={isSelected ? 'text-sky-400 font-semibold' : 'text-slate-500'}>
                    ACTIVE TRAIT
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
