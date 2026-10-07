import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Calendar, Award, CheckCircle, ShieldCheck, Sparkles, Maximize2, X, Star } from 'lucide-react';
import awardImg from '../assets/best_volunteer_award.jpg';

export default function Experience() {
  const [showAwardModal, setShowAwardModal] = useState(false);

  return (
    <section id="experience" className="py-24 relative bg-[#070C1D] border-t border-white/5">
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
            04 — LEADERSHIP, EXPERIENCE & ACHIEVEMENTS
          </span>
          <div className="h-px bg-white/10 flex-grow" />
        </motion.div>

        {/* Top Banner: CABSSA Dept Club Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-6 rounded-2xl bg-slate-950/80 border border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 className="text-white font-bold text-base">CABSSA</h3>
              <p className="text-xs text-slate-400">
                Computer Science & Business Systems Student Association (Official Department Club)
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-blue-950 border border-blue-700/60 text-sky-300 text-xs font-bold">
            CSBS DEPARTMENT CLUB
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Experience Roles (Current & Past) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {/* Role 1: TECHNICAL CO-HEAD (CURRENT) */}
            <div className="rounded-3xl bg-slate-950/90 border border-sky-500/40 p-8 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
                    CURRENT LEADERSHIP
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono text-[11px] font-bold">
                  PRESENT
                </span>
              </div>

              <span className="font-mono text-xs text-sky-400 font-bold block mb-1">ORGANIZATION</span>
              <h3 className="text-2xl font-extrabold text-white mb-2">Technical Co-Head</h3>
              <p className="font-mono text-xs text-slate-400 mb-6">CABSSA — CSBS Department Club</p>

              <div className="space-y-3 font-sans text-slate-300 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-sky-400 mt-0.5 shrink-0" />
                  <span>Directing department-level technical activities, workshops, and digital projects.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-sky-400 mt-0.5 shrink-0" />
                  <span>Overseeing digital infrastructure, registration automation, and tech team execution.</span>
                </div>
              </div>
            </div>

            {/* Role 2: VOLUNTEER (TECHNEGOTIA) */}
            <div className="rounded-3xl bg-slate-950/90 border border-white/10 p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">PREVIOUS YEAR</span>
                <span className="font-mono text-[11px] text-sky-400">CABSSA FLAGSHIP</span>
              </div>

              <span className="font-mono text-xs text-sky-400 font-bold block mb-1">EVENT VOLUNTEER</span>
              <h3 className="text-2xl font-extrabold text-white mb-2">TechNegotia</h3>
              <p className="font-mono text-xs text-slate-400 mb-6">Participant Registration & Event Coordination</p>

              <div className="space-y-3 font-sans text-slate-300 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-sky-400 mt-0.5 shrink-0" />
                  <span>Managed end-to-end registration desks and participant onboarding.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-sky-400 mt-0.5 shrink-0" />
                  <span>Achieved the single highest registration count among all event volunteers.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive Best Volunteer Award Poster Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl bg-gradient-to-br from-amber-950/40 via-slate-950 to-slate-900 border border-amber-400/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden group">
              {/* Top Award Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-400">
                    <Trophy size={22} />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-amber-300 block uppercase tracking-wider">
                      FEATURED RECOGNITION
                    </span>
                    <span className="font-mono text-[11px] text-slate-400 block">CABSSA OFFICIAL AWARD</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-950 border border-amber-500/50 text-amber-300 font-mono text-xs font-bold">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span>BEST VOLUNTEER</span>
                </div>
              </div>

              {/* Award Content Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Official Poster Preview */}
                <div className="sm:col-span-5 relative group/img cursor-pointer" onClick={() => setShowAwardModal(true)}>
                  <div className="aspect-[9/16] rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-xl relative">
                    <img src={awardImg} alt="Best Volunteer Award Poster" className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-2.5 rounded-full bg-slate-950/90 text-amber-300 border border-amber-400">
                        <Maximize2 size={18} />
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 text-center block mt-2">
                    CLICK TO ENLARGE POSTER
                  </span>
                </div>

                {/* Text & Citation */}
                <div className="sm:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-widest block mb-1">
                      THE REGISTRATION KING!
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-3">
                      BEST VOLUNTEER OF TECHNEGOTIA
                    </h4>

                    <div className="p-4 rounded-xl bg-slate-950/90 border border-amber-500/30 text-xs text-slate-300 font-sans italic leading-relaxed mb-4">
                      "Major props to Chintamani Ginde for bringing in the highest number of registrations! Your hustle and outreach game are on another level."
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-white/10 font-mono text-xs text-slate-400 flex items-center justify-between">
                    <span>ISSUED BY</span>
                    <span className="text-amber-300 font-bold">CABSSA @ KIT COLLEGE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Award Poster Lightbox Modal */}
      <AnimatePresence>
        {showAwardModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAwardModal(false)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-md w-full max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden border border-amber-400/50 p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowAwardModal(false)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 border border-white/20 text-white hover:bg-slate-800"
              >
                <X size={20} />
              </button>
              <img src={awardImg} alt="Official Best Volunteer Certificate Poster" className="w-full h-auto rounded-2xl object-contain max-h-[85vh]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
