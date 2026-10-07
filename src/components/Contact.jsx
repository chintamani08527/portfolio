import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Copy, Check, Globe } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = React.useState('');

  const linkedinUrl = 'https://www.linkedin.com/in/chintamani-ginde-048748381';
  const githubUrl = 'https://github.com/chintamani08527';

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#050814] border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs font-bold text-sky-400 tracking-widest uppercase px-3 py-1 rounded bg-sky-950/60 border border-sky-800/40 inline-block mb-4">
              DIRECT INQUIRIES
            </span>

            <h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-6 font-mono">
              LET'S CONNECT.
            </h2>

            <p className="text-slate-300 text-lg max-w-xl mx-auto font-normal leading-relaxed">
              Interested in technology, business, collaboration or new opportunities? Feel free to reach out directly.
            </p>
          </div>

          {/* Contact Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-slate-950/90 border border-sky-500/30 shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                    <Mail size={24} />
                  </div>
                  <button
                    onClick={() => copyToClipboard('chintamani08527@gmail.com', 'email')}
                    className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copied === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                <span className="font-mono text-xs text-sky-400 font-bold block mb-1">EMAIL ADDRESS</span>
                <a
                  href="mailto:chintamani08527@gmail.com"
                  data-cursor="pointer"
                  className="text-xl sm:text-2xl font-bold font-mono text-white hover:text-sky-300 transition-colors block mb-4"
                >
                  chintamani08527@gmail.com
                </a>
              </div>

              <a
                href="mailto:chintamani08527@gmail.com"
                data-cursor="pointer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-sky-500/25 transition-all"
              >
                <span>EMAIL ME</span>
                <ArrowUpRight size={16} />
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-8 rounded-3xl bg-slate-950/90 border border-blue-500/30 shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400">
                    <Phone size={24} />
                  </div>
                  <button
                    onClick={() => copyToClipboard('9632861668', 'phone')}
                    className="p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone Number"
                  >
                    {copied === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                <span className="font-mono text-xs text-blue-400 font-bold block mb-1">PHONE / MOBILE</span>
                <a
                  href="tel:9632861668"
                  data-cursor="pointer"
                  className="text-xl sm:text-2xl font-bold font-mono text-white hover:text-sky-300 transition-colors block mb-4"
                >
                  +91 9632861668
                </a>
              </div>

              <a
                href="tel:9632861668"
                data-cursor="pointer"
                className="w-full py-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-sky-400 font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all hover:bg-slate-800"
              >
                <span>CALL ME</span>
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>

          {/* Social Profiles Bar */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-sky-500/30 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <span className="flex items-center gap-2 text-slate-400">
              <Globe size={16} className="text-sky-400" /> PROFESSIONAL NETWORKING
            </span>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="px-5 py-2.5 rounded-xl bg-blue-600/20 border border-blue-400/40 text-blue-300 font-bold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 1.63 1.63A1.63 1.63 0 0 0 7.86 6.7Z" />
                </svg>
                <span>LINKEDIN PROFILE</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold flex items-center gap-2 hover:bg-slate-800 hover:border-sky-400 hover:text-white transition-all shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                </svg>
                <span>GITHUB PROFILE</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
