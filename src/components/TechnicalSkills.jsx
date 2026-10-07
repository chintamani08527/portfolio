import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Mail, MessageSquare, FormInput, HardDrive, Code, Cpu, Terminal, Sparkles } from 'lucide-react';

export default function TechnicalSkills() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);

  const skills = [
    {
      name: 'WEBSITE MANAGEMENT',
      category: 'Digital Operations',
      icon: Globe,
      desc: 'Operational management, digital maintenance, and content updating of web platforms.',
      tag: 'OPERATIONAL',
    },
    {
      name: 'EMAIL AUTOMATION',
      category: 'Communication Workflows',
      icon: Mail,
      desc: 'Experience with digital communication workflows and automated messaging systems.',
      tag: 'AUTOMATION',
    },
    {
      name: 'WHATSAPP AUTOMATION',
      category: 'Messaging Systems',
      icon: MessageSquare,
      desc: 'Configuring automated response pipelines and broadcast coordination for participant outreach.',
      tag: 'MESSAGING',
    },
    {
      name: 'GOOGLE FORMS',
      category: 'Data Intake',
      icon: FormInput,
      desc: 'Designing structured participant registration forms, surveys, and response processing.',
      tag: 'DATA INTAKE',
    },
    {
      name: 'GOOGLE DRIVE',
      category: 'Asset Management',
      icon: HardDrive,
      desc: 'Organizing digital asset storage, permission structures, and shared drive workflows.',
      tag: 'STORAGE',
    },
    {
      name: 'FRONTEND DEVELOPMENT',
      category: 'Web Tech',
      icon: Code,
      desc: 'Currently developing modern frontend web skills using HTML, CSS, JavaScript & React.',
      tag: 'LEARNING',
    },
    {
      name: 'C',
      category: 'Core Programming',
      icon: Terminal,
      desc: 'Low-level programming fundamentals, pointers, memory allocation, and algorithmic logic.',
      tag: 'LANGUAGE',
    },
    {
      name: 'C++',
      category: 'Object-Oriented',
      icon: Cpu,
      desc: 'Object-oriented principles, Standard Template Library (STL), and structural problem solving.',
      tag: 'LANGUAGE',
    },
  ];

  const activeSkill = skills[activeSkillIndex];

  return (
    <section id="skills" className="py-24 relative bg-[#070C1D] border-t border-white/5">
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
            02 — TECHNICAL SKILLS
          </span>
          <div className="h-px bg-white/10 flex-grow" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Skill Ecosystem Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              const isActive = activeSkillIndex === idx;

              return (
                <motion.div
                  key={skill.name}
                  data-cursor="pointer"
                  onClick={() => setActiveSkillIndex(idx)}
                  onMouseEnter={() => setActiveSkillIndex(idx)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden border ${
                    isActive
                      ? 'bg-slate-900 border-sky-400 shadow-xl shadow-sky-500/20 ring-1 ring-sky-400/50'
                      : 'bg-slate-950/60 border-white/10 hover:border-sky-500/30 hover:bg-slate-900/80'
                  }`}
                >
                  {/* Subtle Connecting Glow */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillGlow"
                      className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-blue-600/10 pointer-events-none"
                    />
                  )}

                  <div className="flex items-start justify-between mb-3 relative z-10">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-sky-500 text-slate-950 font-bold'
                          : 'bg-slate-900 text-sky-400 border border-white/5'
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-white/10 text-slate-400">
                      {skill.tag}
                    </span>
                  </div>

                  <h3
                    className={`font-mono text-sm font-bold tracking-tight mb-1 relative z-10 transition-colors ${
                      isActive ? 'text-white' : 'text-slate-200'
                    }`}
                  >
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono relative z-10">{skill.category}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Central Hub Node Detail Visualizer */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-3xl bg-slate-950 border border-sky-500/30 p-8 shadow-2xl relative flex flex-col justify-between min-h-[380px]">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sky-400 animate-ping" />
                  <span className="font-mono text-xs font-bold text-white tracking-wider">ECOSYSTEM HUB</span>
                </div>
                <span className="font-mono text-[11px] text-sky-400">NODE 0{activeSkillIndex + 1} / 08</span>
              </div>

              {/* Animated Detail Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="my-auto py-6"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 font-mono text-xs font-semibold mb-4">
                    <Sparkles size={14} />
                    {activeSkill.category}
                  </div>

                  <h4 className="text-2xl font-extrabold text-white font-mono mb-4 tracking-tight">
                    {activeSkill.name}
                  </h4>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {activeSkill.desc}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5 font-mono text-xs text-slate-400">
                    <div className="flex justify-between items-center mb-1">
                      <span>VERIFIED CAPACITY</span>
                      <span className="text-sky-400 font-bold">READY</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.8 }}
                        className="h-full bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>HOVER OR TAP TO INSPECT</span>
                <span className="text-sky-400">TECH MATRIX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
