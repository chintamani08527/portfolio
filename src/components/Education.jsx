import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle2, TrendingUp, Star } from 'lucide-react';

export default function Education() {
  const academicCompartments = [
    {
      title: 'B-TECH — CSBS CGPA',
      score: '9.1',
      unit: 'CGPA',
      level: 'Undergraduate Engineering',
      desc: 'Computer Science & Business Systems (CSBS) current cumulative performance.',
      badge: 'CURRENT ACADEMIC RECORD',
      accentColor: 'from-sky-400 to-blue-600',
      borderColor: 'border-sky-400/50',
      textColor: 'text-sky-400',
      bgGlow: 'bg-sky-500/10',
    },
    {
      title: '10TH STANDARD',
      score: '95.86%',
      unit: 'PERCENTAGE',
      level: 'Secondary School Certification',
      desc: 'Outstanding secondary academic achievement demonstrating core analytical consistency.',
      badge: 'TOP ACADEMIC TIER',
      accentColor: 'from-amber-300 to-amber-500',
      borderColor: 'border-amber-400/50',
      textColor: 'text-amber-400',
      bgGlow: 'bg-amber-500/10',
    },
    {
      title: '12TH STANDARD',
      score: '67.5%',
      unit: 'PERCENTAGE',
      level: 'Higher Secondary Certification',
      desc: 'Higher secondary coursework laying the foundation for computer science engineering.',
      badge: 'SECONDARY RECORD',
      accentColor: 'from-indigo-400 to-blue-500',
      borderColor: 'border-indigo-400/40',
      textColor: 'text-indigo-400',
      bgGlow: 'bg-indigo-500/10',
    },
  ];

  return (
    <section id="education" className="py-24 relative bg-[#050814] border-t border-white/5 overflow-hidden">
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
            06 — ACADEMIC SHOWCASE
          </span>
          <div className="h-px bg-white/10 flex-grow" />
        </motion.div>

        {/* 3 Metric Compartment Boxes with Smooth Stagger Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {academicCompartments.map((comp, idx) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`p-6 sm:p-8 rounded-3xl bg-slate-950/90 border ${comp.borderColor} shadow-2xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300`}
            >
              {/* Top Ambient Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${comp.bgGlow} rounded-full filter blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700`} />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full bg-slate-900 border border-white/10 ${comp.textColor} font-bold`}>
                    {comp.badge}
                  </span>
                  <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                </div>

                <span className="font-mono text-xs text-slate-400 block mb-1 uppercase tracking-wider">
                  {comp.level}
                </span>

                <h3 className="font-mono text-lg font-bold text-white mb-6">
                  {comp.title}
                </h3>

                {/* Score Number Display */}
                <div className="mb-6 flex items-baseline gap-2">
                  <span className={`text-5xl sm:text-6xl font-extrabold font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${comp.accentColor}`}>
                    {comp.score}
                  </span>
                  <span className="font-mono text-xs text-slate-400 font-bold uppercase">{comp.unit}</span>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed font-sans mb-6">
                  {comp.desc}
                </p>
              </div>

              {/* Bottom Progress Line */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-400">STATUS</span>
                <span className={`${comp.textColor} font-bold flex items-center gap-1`}>
                  <CheckCircle2 size={12} /> VERIFIED
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Degree Program Overview Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-10 rounded-3xl bg-slate-950/80 border border-white/10 relative overflow-hidden backdrop-blur-md"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                <GraduationCap size={26} />
              </div>
              <div>
                <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider block">
                  MAIN ENGINEERING DEGREE
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-mono text-white">
                  Bachelor of Technology (B-Tech) — CSBS
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-950 border border-sky-500/40 text-sky-300 font-mono text-xs font-bold">
              <Star size={14} className="text-amber-400 fill-amber-400" />
              <span>9.1 CGPA HIGHLIGHT</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2">
              <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider block">
                SPECIALIZED CURRICULUM
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Computer Science & Business Systems (CSBS) integrates software engineering fundamentals with financial concepts, business management, sales strategy, and enterprise operations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/5 space-y-2">
              <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-wider block">
                KEY ACADEMIC CORE
              </span>
              <div className="grid grid-cols-2 gap-2 font-mono text-[11px] text-slate-300 pt-1">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-sky-400" /> C / C++ Programming</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-sky-400" /> Business Operations</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-sky-400" /> Financial Concepts</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-sky-400" /> Asset Management</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
