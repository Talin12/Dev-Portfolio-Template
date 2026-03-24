/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, 
  Dna, 
  Activity, 
  ArrowRight, 
  Terminal 
} from "lucide-react";
import LoadingScreen from "./components/LoadingScreen";

type Page = "home" | "project1" | "nexus" | "quantum" | "contact";
const PAGES: Page[] = ["home", "project1", "nexus", "quantum", "contact"];

const PROJECTS = {
  project1: {
    video: "https://res.cloudinary.com/duk9coqow/video/upload/v1774381672/Video_Generation_Request_Fulfilled_2_vomuie.mp4",
    title: "PROJECTY\nSYSTEMS",
    subtitle: "We create interesting digital architectures for modern brands.",
    tags: [
      { id: "01", name: "CORE ENGINE", desc: "Distributed Node\nInfrastructure" },
      { id: "02", name: "VISUAL STACK", desc: "High-Density\nInterface Layer" }
    ],
    desc: "Projecty is an advanced framework that creates visual identities for various digital entities. Our final results are brilliant and technically sound.",
    date: "24 MARCH 2026 | ARCHIVE",
    footerQuote: "Architectures that attract global attention."
  },
  nexus: {
    video: "https://cdn.pixabay.com/video/2026/01/21/329185_large.mp4",
    title: "NEXUS\nPROTOCOL",
    subtitle: "High-speed data pathways for decentralized computing.",
    tags: [
      { id: "01", name: "NEURAL NET", desc: "Deep Learning\nIntegrations" },
      { id: "02", name: "DATA STREAM", desc: "Real-time Sync\nMechanisms" }
    ],
    desc: "Nexus handles immense real-time data flow with zero latency. It's built for environments where split-second decisions define success.",
    date: "25 MARCH 2026 | ARCHIVE",
    footerQuote: "Connections that transcend physical limits."
  },
  quantum: {
    video: "https://cdn.pixabay.com/video/2025/11/17/316531_large.mp4",
    title: "QUANTUM\nENGINE",
    subtitle: "Next-generation cryptographic processing units.",
    tags: [
      { id: "01", name: "CRYPTO CORE", desc: "Quantum-Safe\nEncryption" },
      { id: "02", name: "LOGIC GATES", desc: "Multi-State\nProcessing" }
    ],
    desc: "The Quantum Engine breaks conventional computing paradigms by processing multiple states simultaneously, delivering unparalleled security.",
    date: "26 MARCH 2026 | RESEARCH",
    footerQuote: "Defining the future of secure computation."
  },
  contact: {
    video: "https://cdn.pixabay.com/video/2025/10/11/309178_large.mp4",
    title: "ARCHITECT\nPROFILE",
    subtitle: "Ready to initialize your next digital masterpiece?",
    tags: [
      { id: "01", name: "DISCUSS", desc: "Project Scoping\n& Analysis" },
      { id: "02", name: "DEPLOY", desc: "Global Production\nRollout" }
    ],
    desc: "I am always looking for the next complex system to architect. If you have a functional vision, I have the operational capability to build it.",
    date: "STATUS: AVAILABLE",
    footerQuote: "Initiate contact sequence."
  }
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const goToNextPage = () => {
    const currentIndex = PAGES.indexOf(currentPage);
    const nextIndex = (currentIndex + 1) % PAGES.length;
    setCurrentPage(PAGES[nextIndex]);
  };

  const goToPrevPage = () => {
    const currentIndex = PAGES.indexOf(currentPage);
    const prevIndex = (currentIndex - 1 + PAGES.length) % PAGES.length;
    setCurrentPage(PAGES[prevIndex]);
  };

  const currentProjectIndex = PAGES.indexOf(currentPage) + 1;
  const projectData = currentPage !== "home" ? PROJECTS[currentPage as keyof typeof PROJECTS] : null;

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div 
        style={{ 
          opacity: isLoading ? 0 : 1, 
          transition: "opacity 0.5s ease-out" 
        }}
        className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-y-auto md:overflow-hidden flex flex-col md:block"
      >
        <AnimatePresence mode="wait">
          {currentPage === "home" ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative z-10 p-8 md:p-12 flex flex-col justify-between md:min-h-screen flex-1"
            >
              {/* Video Section (Fixed background for Home) */}
              <div className="fixed inset-0 z-0 pointer-events-none">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover opacity-60 md:opacity-50"
                >
                  <source 
                    src="https://res.cloudinary.com/duk9coqow/video/upload/v1774329521/Video_Generation_Request_Fulfilled_1_wziqwk.mp4" 
                    type="video/mp4" 
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black md:from-black/60 md:via-transparent md:to-black/80"></div>
              </div>

              {/* Top Section */}
              <div className="relative z-10 flex justify-between items-start">
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
                  
                  <div className="flex gap-4 mt-8">
                    <div className="w-10 h-10 rounded-full border border-zinc-700 bg-black/40 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors cursor-crosshair">
                      <Cpu size={18} />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-zinc-700 bg-black/40 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors cursor-crosshair">
                      <Dna size={18} />
                    </div>
                    <div className="w-10 h-10 rounded-full border border-zinc-700 bg-black/40 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-400 transition-colors cursor-crosshair">
                      <Activity size={18} />
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="hidden md:flex flex-col items-end gap-1"
                >
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-[10px] tracking-[0.2em] text-zinc-400 font-mono uppercase bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-4">
                      <span>1/{PAGES.length}</span>
                      <div className="w-24 h-[1px] bg-zinc-700 relative">
                        <div className="absolute top-0 left-0 w-1/5 h-full bg-white"></div>
                      </div>
                    </div>
                    <button 
                      onClick={goToNextPage}
                      className="text-zinc-200 mt-2 hover:text-white cursor-pointer flex items-center gap-1 transition-colors bg-transparent border-none p-0 text-[10px] tracking-[0.2em] font-mono uppercase"
                    >
                      NEXT PROJECT <ArrowRight size={10} />
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Middle Right - Technical Specs */}
              <div className="relative z-10 flex justify-end mt-12 md:mt-0">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="w-full md:w-80 space-y-6 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-zinc-800/50"
                >
                  <h3 className="text-[10px] tracking-[0.3em] text-zinc-400 font-bold uppercase border-b border-zinc-800 pb-2">
                    TECHNICAL SPECS
                  </h3>
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
              </div>

              {/* Bottom Section */}
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8 mt-12">
                {/* Product Card */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="w-full md:w-[420px] bg-black/60 border border-zinc-800 rounded-3xl p-6 flex gap-6 items-center backdrop-blur-xl hover:border-zinc-600 transition-all group"
                >
                  <div className="w-24 h-24 bg-zinc-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Terminal className="text-zinc-600 group-hover:text-orange-500 transition-colors" size={40} />
                    {/* Subtle glow effect */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-orange-500 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="space-y-1">
                      <h4 className="text-xs font-mono tracking-widest text-zinc-400">TL-01: FULL-STACK DEV WORK</h4>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        Robust and clean software code deployed globally. Fast and scalable for any-size project..
                      </p>
                    </div>
                    <button 
                      onClick={goToNextPage}
                      className="px-4 py-2 bg-zinc-900/80 border border-zinc-700 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2 cursor-pointer"
                    >
                      VIEW WORK <ArrowRight size={12} />
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
                  >
                    <div className="w-full h-full border border-zinc-700 rotate-45 flex items-center justify-center">
                      <div className="w-1 h-1 bg-zinc-400 rounded-full"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : projectData ? (
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="relative z-10 p-8 md:p-12 flex flex-col justify-between md:min-h-screen flex-1"
            >
              {/* Video Section (Project Background) */}
              <div className="fixed inset-0 z-0 pointer-events-none">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  key={projectData.video}
                  className="w-full h-full object-cover opacity-40 md:opacity-30"
                >
                  <source 
                    src={projectData.video} 
                    type="video/mp4" 
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black md:from-black/80 md:via-transparent md:to-black"></div>
              </div>

              {/* Top Navigation */}
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
                <motion.button 
                  onClick={() => setCurrentPage("home")}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[10px] tracking-[0.3em] text-zinc-500 font-bold uppercase flex items-center gap-2 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer"
                >
                  <ArrowRight size={12} className="rotate-180" /> BACK TO HUB
                </motion.button>

                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] text-zinc-400 font-mono uppercase">
                    <span>{currentProjectIndex}/{PAGES.length}</span>
                    <div className="w-24 h-[1px] bg-zinc-800 relative">
                      <div 
                        className="absolute top-0 left-0 h-full bg-white transition-all duration-500"
                        style={{ width: `${(currentProjectIndex / PAGES.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <button 
                    onClick={goToNextPage}
                    className="text-zinc-500 hover:text-white cursor-pointer flex items-center gap-1 transition-colors bg-transparent border-none p-0 text-[10px] tracking-[0.2em] font-mono uppercase"
                  >
                    NEXT PROJECT <ArrowRight size={10} />
                  </button>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12 md:mt-0">
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none uppercase whitespace-pre-line">
                      {projectData.title}
                    </h2>
                  </motion.div>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl font-light text-zinc-300 max-w-lg leading-tight"
                  >
                    {projectData.subtitle}
                  </motion.p>

                  <div className="flex gap-12 pt-8 border-t border-zinc-900">
                    {projectData.tags.map((tag) => (
                      <div key={tag.id} className="space-y-2">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{tag.id} // {tag.name}</span>
                        <p className="text-xs text-zinc-400 uppercase whitespace-pre-line">{tag.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end space-y-12">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-xs space-y-4 text-left md:text-right"
                  >
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {projectData.desc}
                    </p>
                    <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-white border-b border-white pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all bg-transparent border-none cursor-pointer">
                      READ MORE
                    </button>
                  </motion.div>

                  <div className="flex flex-col items-end space-y-2 pt-12">
                    <div className="flex gap-4">
                      <button 
                        onClick={goToPrevPage}
                        className="p-2 border border-zinc-800 rounded-full text-zinc-500 hover:text-white hover:border-white transition-all bg-transparent cursor-pointer"
                      >
                        <ArrowRight size={16} className="rotate-180" />
                      </button>
                      <button 
                        onClick={goToNextPage}
                        className="p-2 border border-zinc-800 rounded-full text-zinc-500 hover:text-white hover:border-white transition-all bg-transparent cursor-pointer"
                      >
                        <ArrowRight size={16} />
                      </button>
                    </div>
                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest pt-4">
                      {projectData.date}
                    </div>
                    <p className="text-xs text-zinc-500 italic text-right max-w-[180px]">
                      {projectData.footerQuote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Element */}
              <div className="flex justify-between items-end">
                <div className="w-12 h-12 border-l border-b border-zinc-800"></div>
                <div className="text-[8px] font-mono text-zinc-800 uppercase tracking-[0.5em]">
                  SECURE // ENCRYPTED // VERIFIED
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}
