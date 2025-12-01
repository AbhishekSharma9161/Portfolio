"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Github } from "lucide-react";

export default function ProjectsSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const project = {
    title: "AI Resume Builder",
    description: "A modern, full-stack resume builder application powered by AI that helps users create professional, ATS-optimized resumes in minutes.",
    features: [
      "AI-Powered Content Generation with intelligent suggestions for job descriptions and skills",
      "ATS Optimization ensures your resume passes Applicant Tracking Systems",
      "Professional Templates with real-time preview and PDF export functionality",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL", "Prisma", "OpenAI"],
    images: [
      "/projects/AI%20Resume%20Builder_Home.png",
      "/projects/AI%20Resume%20Builder%202.png",
      "/projects/AI%20Resume%20Builder%203.png",
      "/projects/AI%20Resume%20Builder%204.png",
      "/projects/AI%20Resume%20Builder%205.png",
    ],
    githubUrl: "https://github.com/AbhishekSharma9161/Ai_Resume_Builder_App",
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const scrollTop = scrollContainerRef.current.scrollTop;
      const scrollHeight = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight;
      
      if (scrollHeight === 0) return;
      
      const scrollPercentage = scrollTop / scrollHeight;
      const imageCount = project.images.length;
      const newIndex = Math.min(Math.floor(scrollPercentage * imageCount), imageCount - 1);
      
      setActiveImageIndex(Math.max(0, newIndex));
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [project.images.length]);

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        <h2 className="relative z-2 text-balance font-medium text-5xl tracking-tight sm:text-5xl md:text-6xl text-center mb-20 md:mb-24"
          style={{ textShadow: "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px" }}>
          <p className="mb-3 font-mono font-normal text-xs uppercase tracking-widest text-white/70">
            FEATURED CASE STUDIES
          </p>
          <span className="font-light">
            <span className="text-white">Curated </span>
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x">
              work
            </span>
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT SIDE - Scrollable Images (65%) */}
          <div className="lg:col-span-7">
            <div 
              ref={scrollContainerRef}
              className="h-[600px] overflow-y-scroll scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
            >
              <div className="sticky top-0 mb-4">
                <div className="relative w-full h-[550px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-4">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} - Screenshot ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-700 ${
                        index === activeImageIndex ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </div>
                {/* Image indicator */}
                <div className="flex justify-center gap-2 mt-4">
                  {project.images.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all ${
                        index === activeImageIndex 
                          ? "w-8 bg-pink-500" 
                          : "w-2 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
              {/* Spacer for scrolling */}
              <div className="h-[2000px]"></div>
            </div>
          </div>

          {/* RIGHT SIDE - Static Details (35%) */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="flex">
                <div aria-hidden="true" className="my-4 me-4 h-[2px] min-w-6 bg-pink-500"></div>
                <div>
                  <h3 className="font-bold text-2xl xl:text-3xl text-white mb-3">{project.title}</h3>
                  <p className="my-2 font-light text-sm xl:text-base text-white/90 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <ul className="mt-4 flex flex-col gap-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-xs xl:text-sm text-white/90">
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="mt-[2px] me-1.5 size-5 shrink-0 fill-pink-600 text-pink-600 bg-pink-600/20 lg:bg-transparent">
                          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex flex-wrap gap-1.5 xl:gap-3">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-md px-3 py-1 font-mono text-neutral-300 text-xs xl:text-sm border border-white/10 bg-neutral-900 transition-colors hover:bg-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-medium text-sm transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
