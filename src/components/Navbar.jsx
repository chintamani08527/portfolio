import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrolledRef = useRef(scrolled);
  const activeSectionRef = useRef(activeSection);
  const tickingRef = useRef(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'PROFILE', href: '#profile' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 40;
          if (isScrolled !== scrolledRef.current) {
            scrolledRef.current = isScrolled;
            setScrolled(isScrolled);
          }

          const sections = navLinks.map((l) => l.href.substring(1));
          const scrollPosition = window.scrollY + 220;

          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                if (section !== activeSectionRef.current) {
                  activeSectionRef.current = section;
                  setActiveSection(section);
                }
                break;
              }
            }
          }
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050814]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            data-cursor="pointer"
            className="group flex items-center gap-2 font-mono text-xl font-bold tracking-tighter text-white"
          >
            <span className="text-sky-400 group-hover:text-blue-500 transition-colors">CVG</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 font-mono text-xs tracking-widest text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-cursor="pointer"
                className={`relative py-1 transition-colors duration-200 hover:text-white ${
                  activeSection === link.href.substring(1) ? 'text-sky-400 font-semibold' : ''
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Status Indicator Pill & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-[11px] font-mono tracking-wider text-emerald-400 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>OPEN TO OPPORTUNITIES</span>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#050814]/95 backdrop-blur-xl border-b border-white/10 md:hidden px-6 py-8"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 px-3 py-1.5 w-fit rounded-full bg-emerald-950/60 border border-emerald-500/40 text-xs font-mono text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                OPEN TO OPPORTUNITIES
              </div>
              <div className="h-px bg-white/10 w-full" />
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-mono tracking-wider text-slate-200 hover:text-sky-400 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={18} className="text-slate-500" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
