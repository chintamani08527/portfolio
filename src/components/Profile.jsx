import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, User, Sparkles, ShieldCheck } from 'lucide-react';
import profilePic from '../assets/chintamani.jpg';

export default function Profile() {
  const highlights = [
    { label: 'Technical Co-Head', desc: 'Leading technical initiatives in CABSSA (CSBS Dept Club).' },
    { label: 'Best Volunteer Award', desc: 'Selected as Best Volunteer in CABSSA for event execution.' },
    { label: 'Technology', desc: 'Passionate about digital workflows & software tools.' },
    { label: 'Business', desc: 'Understanding market dynamics, management & strategy.' },
    { label: 'Finance & Sales', desc: 'Asset management & highest event registrations.' },
    { label: 'Frontend Development', desc: 'Actively learning modern Web & React stack.' },
  ];

  const infoPanelItems = [
    { label: 'ROLE / LEADERSHIP', value: 'Technical Co-Head' },
    { label: 'ORGANIZATION', value: 'CABSSA (CSBS Department Club)' },
    { label: 'SPECIAL HONORS', value: 'Selected as Best Volunteer' },
    { label: 'DEGREE STATUS', value: 'CSBS Engineering Student' },
    { label: 'DISCIPLINE FOCUS', value: 'Technology & Business Integration' },
  ];

  return (
    <section id="profile" className="py-24 relative bg-[#050814] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="font-mono text-xs font-bold text-sky-400 tracking-widest uppercase px-3 py-1 rounded bg-sky-950/60 border border-sky-800/40">
            01 — PROFILE
          </span>
          <div className="h-px bg-white/10 flex-grow" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Main Editorial Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              TECHNOLOGY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300">
                WITH A BUSINESS
              </span> <br />
              MINDSET.
            </h2>

            {/* Interactive Paragraph with Highlight Badges */}
            <div className="text-slate-300 text-lg sm:text-xl leading-relaxed space-y-6 font-normal">
              <p>
                Motivated <span className="text-white font-semibold underline decoration-sky-400 decoration-2 underline-offset-4">CSBS student</span> currently serving as{' '}
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-950/90 border border-blue-500/50 text-sky-300 font-mono text-sm font-semibold transition-all hover:scale-105 hover:bg-blue-900">
                  Technical Co-Head
                </span>{' '}
                in <span className="text-white font-bold">CABSSA</span> (the official student club of the Computer Science & Business Systems department).
              </p>

              <p>
                Recognized for leadership and performance having been{' '}
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-950/90 border border-amber-500/50 text-amber-300 font-mono text-sm font-semibold">
                  Selected as Best Volunteer in CABSSA
                </span>{' '}
                and securing the highest number of participant registrations during CABSSA's TechNegotia event.
              </p>

              <p>
                Experienced in participant registration, digital management, email & WhatsApp automation, Google Workspace, sales, distribution, asset management, and currently learning{' '}
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-sky-500/20 border border-sky-400/50 text-sky-300 font-mono text-sm font-semibold animate-pulse">
                  Frontend Development
                </span>
                .
              </p>
            </div>

            {/* Core Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-sky-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-sky-400 group-hover:scale-110 transition-transform" />
                    <span className="font-mono text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 pl-6">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Profile Showcase Card with Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 rounded-full filter blur-2xl pointer-events-none" />

              {/* Photo & Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/10 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-sky-400/50 shadow-md shrink-0">
                  <img src={profilePic} alt="Chintamani Vijay Ginde" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-sky-400 uppercase tracking-widest block">PORTFOLIO PROFILE</span>
                  <h3 className="font-bold text-white text-lg leading-tight">Chintamani V. Ginde</h3>
                  <p className="font-mono text-xs text-slate-400">Technical Co-Head @ CABSSA</p>
                </div>
              </div>

              <div className="space-y-3 font-mono">
                {infoPanelItems.map((item) => (
                  <div key={item.label} className="p-3 rounded-xl bg-slate-950/80 border border-white/5">
                    <span className="text-[10px] text-sky-400 uppercase tracking-wider block mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-xs font-semibold text-slate-200 block">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-sky-400" /> Department Leadership
                </span>
                <span className="text-sky-400 font-bold">CABSSA CORE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
