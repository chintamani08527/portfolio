import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import TechnicalSkills from './components/TechnicalSkills';
import BusinessSkills from './components/BusinessSkills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import HybridProfile from './components/HybridProfile';
import Strengths from './components/Strengths';
import Education from './components/Education';
import CurrentlyLearning from './components/CurrentlyLearning';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#050814] text-slate-100 min-h-screen selection:bg-sky-500 selection:text-white font-sans antialiased">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <TechnicalSkills />
        <BusinessSkills />
        <Projects />
        <Experience />
        <HybridProfile />
        <Strengths />
        <Education />
        <CurrentlyLearning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
