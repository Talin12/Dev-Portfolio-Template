import React from "react";
import { motion } from "motion/react";
import { Cpu, Dna, Activity, ArrowRight, Terminal } from "lucide-react";
import VideoBackground from "./VideoBackground";

interface HomeViewProps {
  key?: string | number;
  onNext: () => void;
  totalPages: number;
}

export default function HomeView({ onNext, totalPages }: HomeViewProps) {
  return (
    <motion.main
      key="home"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="relative z-10 p-8 md:p-12 flex flex-col justify-between md:min-h-screen flex-1"
    >
      <VideoBackground 
        src="https://res.cloudinary.com/duk9coqow/video/upload/v1774329521/Video_Generation_Request_Fulfilled_1_wziqwk.mp4" 
        opacityClass="opacity-60 md:opacity-50"
        gradientClass="bg-gradient-to-b from-black via-transparent to-black md:from-black/60 md:via-transparent md:to-black/80"
      />

      {/* Top Section */}
      <header className="relative z-10 flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-2"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
            TALIN-DEV-01 //
            <br />
            CREATIVES
            <br />
            CODE
          </h1>
          <p className="max-w-md text-sm md:text-base text-zinc-300 font-light leading-relaxed mt-6 drop-shadow-lg">
            Specialized in seamless digital experiences and intuitive interfaces. For those who seek more than just code—they want a functional masterpiece. Build your vision..
          </p>
          
          <div className="flex gap-4 mt-8" aria-label="Technical focus icons">
            <div className="w-10 h-10 rounded-full border border-zinc-700 bg-black/40 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors cursor-crosshair">
              <Cpu size={18} aria-hidden="true" />
            </div>
            <div className="w-10 h-10 rounded-full border border-zinc-700 bg-black/40 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors cursor-crosshair">
              <Dna size={18} aria-hidden="true" />
            </div>
            <div className="w-10 h-10 rounded-full border border-zinc-700 bg-black/40 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors cursor-crosshair">
              <Activity size={18} aria-hidden="true" />
            </div>
          </div>
        </motion.div>

        <motion.nav 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden md:flex flex-col items-end gap-1"
          aria-label="Pagination"
        >
          <div className="flex flex-col items-end gap-2">
            <div className="text-[10px] tracking-[0.2em] text-zinc-400 font-mono uppercase bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-4">
              <span>1/{totalPages}</span>
              <div className="w-24 h-[1px] bg-zinc-700 relative">
                <div className="absolute top-0 left-0 w-1/5 h-full bg-white"></div>
              </div>
            </div>
            <button 
              onClick={onNext}
              aria-label="Next Project"
              className="text-zinc-200 mt-2 hover:text-white cursor-pointer flex items-center gap-1 transition-colors bg-transparent border-none p-0 text-[10px] tracking-[0.2em] font-mono uppercase"
            >
              NEXT PROJECT <ArrowRight size={10} aria-hidden="true" />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Middle Right - Technical Specs */}
      <section className="relative z-10 flex justify-end mt-12 md:mt-0" aria-label="Technical Specs">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full md:w-80 space-y-6 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-zinc-800/50"
        >
          <h2 className="text-[10px] tracking-[0.3em] text-zinc-400 font-bold uppercase border-b border-zinc-800 pb-2">
            TECHNICAL SPECS
          </h2>
          <div className="space-y-4 font-mono text-xs">
            <div className="flex justify-between items-center group cursor-default">
              <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">Stack</span>
              <span className="text-zinc-300 group-hover:text-white transition-colors">React/TS-Core</span>
            </div>
            <div className="flex justify-between items-center group cursor-default">
              <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">Logic</span>
              <span className="text-zinc-300 group-hover:text-white transition-colors">V8 - Runtime Engine X</span>
            </div>
            <div className="flex justify-between items-center group cursor-default">
              <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">Style</span>
              <span className="text-zinc-300 group-hover:text-white transition-colors">Tailwind-CSS-UI</span>
            </div>
            <div className="flex justify-between items-center group cursor-default">
              <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">Build</span>
              <span className="text-zinc-300 group-hover:text-white transition-colors">Modern-Web-Framework-Pro</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom Section */}
      <footer className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8 mt-12">
        {/* Product Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full md:w-[420px] bg-black/60 border border-zinc-800 rounded-3xl p-6 flex gap-6 items-center backdrop-blur-xl hover:border-zinc-600 transition-all group"
        >
          <div className="w-24 h-24 bg-zinc-900 rounded-2xl flex items-center justify-center relative overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Terminal className="text-zinc-600 group-hover:text-orange-500 transition-colors" size={40} />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-orange-500 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="flex-1 space-y-3">
            <div className="space-y-1">
              <h3 className="text-xs font-mono tracking-widest text-zinc-400">TL-01: FULL-STACK DEV WORK</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Robust and clean software code deployed globally. Fast and scalable for any-size project..
              </p>
            </div>
            <button 
              onClick={onNext}
              aria-label="View Work"
              className="px-4 py-2 bg-zinc-900/80 border border-zinc-700 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2 cursor-pointer"
            >
              VIEW WORK <ArrowRight size={12} aria-hidden="true" />
            </button>
          </div>
        </motion.div>

        {/* Tags and Logo */}
        <div className="flex flex-col items-end gap-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-end gap-2"
          >
            {["UI-DESIGN", "FRONT-END", "BACK-END", "SYSTEMS"].map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 rounded-full border border-zinc-800 bg-black/40 backdrop-blur-md text-[10px] font-mono tracking-widest text-zinc-400 hover:bg-white hover:text-black transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="w-full h-full border border-zinc-700 rotate-45 flex items-center justify-center">
              <div className="w-1 h-1 bg-zinc-400 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </footer>
    </motion.main>
  );
}
