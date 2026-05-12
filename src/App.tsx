/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Loader from './components/Loader';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="w-full bg-off-white text-charcoal min-h-screen relative font-sans palt noise-bg">
      {/* Background Grid Lines from Theme */}
      <div className="fixed top-0 right-[25%] md:right-[35%] w-[1px] h-full bg-black/[0.03] pointer-events-none z-0"></div>
      <div className="fixed top-0 right-[75%] md:right-[65%] w-[1px] h-full bg-black/[0.03] pointer-events-none z-0"></div>

      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {/* Navigation - Ultra Minimal */}
      <div className="fixed top-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-[#e4e3e0] via-[#e4e3e0]/80 to-transparent z-30 pointer-events-none mix-blend-normal"></div>
      <nav className="fixed top-0 left-0 w-full px-5 md:px-12 pt-5 md:pt-8 pb-2 z-40 flex justify-between items-baseline pointer-events-none">
        <div className="flex flex-col pointer-events-auto">
          <span className="text-[8px] md:text-[9px] uppercase font-sans mb-[2px] text-[#4a4742]/80 tracking-[0.4em] font-medium">Studio</span>
          <h1 className="font-serif italic text-[#3a3733] text-[17px] md:text-xl tracking-wide">
            7FUKU design
          </h1>
        </div>
        <div className="font-sans font-medium uppercase text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.4em] text-[#4a4742] flex gap-5 md:gap-12 pointer-events-auto">
          <span className="cursor-pointer hover:text-[#1a1a1a] transition-colors" onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}>Works</span>
          <span className="cursor-pointer hover:text-[#1a1a1a] transition-colors" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</span>
          <span className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</span>
        </div>
      </nav>

      <Hero />
      <Works />
      <About />
      <Contact />
    </main>
  );
}
