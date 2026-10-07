import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Code2, Briefcase, Users, Cpu, TrendingUp, Award, ShieldCheck } from 'lucide-react';
import profilePic from '../assets/chintamani.jpg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center bg-grid-pattern overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* LEFT COLUMN */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Top Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
            <span className="w-8 h-px bg-sky-400"></span>
            <span className="font-mono text-xs font-semibold tracking-widest text-sky-400 uppercase">
              CSBS STUDENT / TECHNOLOGY & BUSINESS
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/40 text-blue-300 font-mono text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
              <ShieldCheck size={14} className="text-sky-400" /> TECHNICAL CO-HEAD @ CABSSA
            </span>
          </motion.div>

          {/* Large Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none mb-6">
            CHINTAMANI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-sky-200 to-sky-400">
              VIJAY
            </span> <br />
            GINDE
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl font-mono text-sky-300 mb-6 font-medium tracking-tight">
            Technical Co-Head @ CABSSA | Technology & Business Enthusiast
          </motion.h2>

          {/* Pitch */}
          <motion.p variants={itemVariants} className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed mb-10 font-normal">
            Leading technical initiatives as Technical Co-Head of CABSSA (CSBS Dept Club), while driving digital automation, business operations, and web development.
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a
              href="#profile"
              data-cursor="pointer"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-mono text-xs tracking-wider uppercase font-bold hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 group"
            >
              <span>EXPLORE MY PROFILE</span>
              <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              data-cursor="pointer"
              className="px-8 py-4 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 hover:text-white hover:border-sky-400 font-mono text-xs tracking-wider uppercase font-bold transition-all duration-300 hover:bg-slate-800"
            >
              LET'S CONNECT
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Profile Portrait & Interactive Hybrid Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 relative flex flex-col items-center justify-center py-4"
        >
          {/* Main Portrait Frame */}
          <div className="relative w-full max-w-[380px] rounded-3xl bg-slate-950/80 border border-sky-500/30 p-4 shadow-2xl overflow-hidden group">
            {/* Glowing Backdrop */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full filter blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

            {/* Photo Container */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 shadow-inner">
              <img
                src={profilePic}
                alt="Chintamani Vijay Ginde"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* Floating Badge 1: Technical Co-Head */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/90 border border-sky-400/40 backdrop-blur-md flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/50 flex items-center justify-center text-sky-400">
                    <Award size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-sky-400 font-bold block uppercase">CURRENT ROLE</span>
                    <span className="font-mono text-xs font-extrabold text-white block">Technical Co-Head @ CABSSA</span>
                  </div>
                </div>
                <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  ACTIVE
                </span>
              </motion.div>

              {/* Floating Badge 2: Best Volunteer */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-slate-950/90 border border-amber-400/50 backdrop-blur-md font-mono text-[10px] font-bold text-amber-300 flex items-center gap-1.5 shadow-lg"
              >
                <Sparkles size={12} className="text-amber-400" />
                <span>BEST VOLUNTEER</span>
              </motion.div>
            </div>

            {/* Bottom Caption Pill */}
            <div className="mt-3 px-2 flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
                CSBS DEPARTMENT CLUB
              </span>
              <span className="text-sky-400 font-semibold">CABSSA CORE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
