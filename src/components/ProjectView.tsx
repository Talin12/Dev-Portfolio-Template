import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import VideoBackground from "./VideoBackground";

interface ProjectViewProps {
  key?: string | number;
  id: string;
  project: {
    video: string;
    title: string;
    subtitle: string;
    tags: { id: string; name: string; desc: string }[];
    desc: string;
    date: string;
    footerQuote: string;
  };
  currentIndex: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onHome: () => void;
}

export default function ProjectView({
  id,
  project,
  currentIndex,
  totalPages,
  onNext,
  onPrev,
  onHome,
}: ProjectViewProps) {
  return (
    <motion.main
      key={id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="relative z-10 p-8 md:p-12 flex flex-col justify-between md:min-h-screen flex-1"
    >
      {/* Video Section */}
      <VideoBackground 
        src={project.video}
        opacityClass="opacity-40 md:opacity-30"
        gradientClass="bg-gradient-to-b from-black via-transparent to-black md:from-black/80 md:via-transparent md:to-black"
      />

      {/* Top Navigation */}
      <header className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
        <motion.button 
          onClick={onHome}
          aria-label="Back to Hub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] tracking-[0.3em] text-zinc-500 font-bold uppercase flex items-center gap-2 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer"
        >
          <ArrowRight size={12} className="rotate-180" aria-hidden="true" /> BACK TO HUB
        </motion.button>

        <nav className="flex flex-col items-end gap-2" aria-label="Pagination">
          <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] text-zinc-400 font-mono uppercase">
            <span>{currentIndex}/{totalPages}</span>
            <div className="w-24 h-[1px] bg-zinc-800 relative">
              <div 
                className="absolute top-0 left-0 h-full bg-white transition-all duration-500"
                style={{ width: `${(currentIndex / totalPages) * 100}%` }}
              ></div>
            </div>
          </div>
          <button 
            onClick={onNext}
            aria-label="Next Project"
            className="text-zinc-500 hover:text-white cursor-pointer flex items-center gap-1 transition-colors bg-transparent border-none p-0 text-[10px] tracking-[0.2em] font-mono uppercase"
          >
            NEXT PROJECT <ArrowRight size={10} aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Main Content Grid */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12 md:mt-0">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none uppercase whitespace-pre-line">
              {project.title}
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-light text-zinc-300 max-w-lg leading-tight"
          >
            {project.subtitle}
          </motion.p>

          <div className="flex gap-12 pt-8 border-t border-zinc-900">
            {project.tags.map((tag) => (
              <article key={tag.id} className="space-y-2">
                <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{tag.id} // {tag.name}</h3>
                <p className="text-xs text-zinc-400 uppercase whitespace-pre-line">{tag.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end space-y-12">
          <motion.article 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xs space-y-4 text-left md:text-right"
          >
             <p className="text-sm text-zinc-400 leading-relaxed">
              {project.desc}
            </p>
            <button 
              aria-label="Read More about Project"
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white border-b border-white pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all bg-transparent border-none cursor-pointer"
            >
              READ MORE
            </button>
          </motion.article>

          <footer className="flex flex-col items-end space-y-2 pt-12">
            <nav className="flex gap-4" aria-label="Project Navigation">
              <button 
                onClick={onPrev}
                aria-label="Previous Project"
                className="p-2 border border-zinc-800 rounded-full text-zinc-500 hover:text-white hover:border-white transition-all bg-transparent cursor-pointer"
              >
                <ArrowRight size={16} className="rotate-180" aria-hidden="true" />
              </button>
              <button 
                onClick={onNext}
                aria-label="Next Project"
                className="p-2 border border-zinc-800 rounded-full text-zinc-500 hover:text-white hover:border-white transition-all bg-transparent cursor-pointer"
              >
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </nav>
            <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest pt-4">
              {project.date}
            </div>
            <p className="text-xs text-zinc-500 italic text-right max-w-[180px]">
              {project.footerQuote}
            </p>
          </footer>
        </div>
      </section>

      {/* Bottom Decorative Element */}
      <div className="flex justify-between items-end" aria-hidden="true">
        <div className="w-12 h-12 border-l border-b border-zinc-800"></div>
        <div className="text-[8px] font-mono text-zinc-800 uppercase tracking-[0.5em]">
          SECURE // ENCRYPTED // VERIFIED
        </div>
      </div>
    </motion.main>
  );
}
