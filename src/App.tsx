/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import HomeView from "./components/HomeView";
import ProjectView from "./components/ProjectView";
import { Page, PAGES, PROJECTS } from "./data/projects";

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
            <HomeView 
              key="home" 
              onNext={goToNextPage} 
              totalPages={PAGES.length} 
            />
          ) : projectData ? (
            <ProjectView 
              key={currentPage}
              id={currentPage}
              project={projectData}
              currentIndex={currentProjectIndex}
              totalPages={PAGES.length}
              onNext={goToNextPage}
              onPrev={goToPrevPage}
              onHome={() => setCurrentPage("home")}
            />
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}
