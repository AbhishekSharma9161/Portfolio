"use client";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Copy, ArrowRight, Heart } from "lucide-react";

export default function BentoGrid() {
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [globeRotation, setGlobeRotation] = useState(0);
  
  const skillsRow1 = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
  ];
  
  const skillsRow2 = [
    { name: "TailwindCSS", icon: "🎨" },
    { name: "Framer Motion", icon: "🎬" },
    { name: "Three.js", icon: "🎲" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Git", icon: "📦" },
  ];
  
  const skillsRow3 = [
    { name: "Python", icon: "🐍" },
    { name: "GraphQL", icon: "◈" },
    { name: "Redis", icon: "🔴" },
    { name: "Prisma", icon: "🔷" },
    { name: "Vercel", icon: "▲" },
    { name: "Figma", icon: "🎯" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGlobeRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    const email = "abhi9161.sharma@gmail.com";
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email);
    }
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Grid Layout: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          
          {/* Collaboration Card - Full Width */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-[#0a0a0a] border border-white/5 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 min-h-[340px] col-span-1 md:col-span-2 lg:col-span-3">
            <div className="relative h-full flex items-center justify-center py-12">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
              <div className="relative text-center">
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    <Image
                      alt="Profile"
                      className="relative h-24 w-24 rounded-full border-2 border-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:border-purple-500/50"
                      src="https://cdn.builder.io/api/v1/image/assets%2Fd209ae98c41f479fa6b7a3b45e18a30b%2F9d20c290ee0e441cb68eb28acc5fe13d"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Heart className="w-5 h-5 text-gray-500" />
                  <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Collaboration</span>
                </div>
                <h3 className="text-2xl font-light text-white max-w-2xl mx-auto leading-relaxed">
                  I prioritize client collaboration, fostering open communication
                </h3>
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium transition-all">
                Book a call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Technologies Card - Scrolling Marquee - Full Width */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[28px] p-8 hover:border-white/10 transition-all duration-500 shadow-2xl col-span-1 md:col-span-2 lg:col-span-3 overflow-hidden">
            <h3 className="text-white text-2xl font-light text-center mb-10 leading-relaxed">
              Passionate about cutting-edge
              <br />
              <span className="text-gray-400">technologies</span>
            </h3>
            <div className="space-y-5">
              {/* Row 1 - Left to Right */}
              <div className="relative overflow-hidden">
                <div className="flex gap-4 animate-scroll-left">
                  {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, index) => (
                    <div
                      key={`row1-${index}`}
                      className="flex-shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 flex items-center gap-3 hover:scale-105 hover:border-purple-500/50 transition-all cursor-pointer"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-white text-sm font-medium whitespace-nowrap">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Row 2 - Right to Left */}
              <div className="relative overflow-hidden">
                <div className="flex gap-4 animate-scroll-right">
                  {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, index) => (
                    <div
                      key={`row2-${index}`}
                      className="flex-shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 flex items-center gap-3 hover:scale-105 hover:border-cyan-500/50 transition-all cursor-pointer"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-white text-sm font-medium whitespace-nowrap">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Row 3 - Left to Right */}
              <div className="relative overflow-hidden">
                <div className="flex gap-4 animate-scroll-left">
                  {[...skillsRow3, ...skillsRow3, ...skillsRow3].map((skill, index) => (
                    <div
                      key={`row3-${index}`}
                      className="flex-shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/30 flex items-center gap-3 hover:scale-105 hover:border-pink-500/50 transition-all cursor-pointer"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-white text-sm font-medium whitespace-nowrap">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Globe Card - 3D Animated */}
          <div className="group bg-[#0a0a0a] border border-white/5 rounded-[28px] p-8 hover:border-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden min-h-[520px] col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-white text-lg font-light mb-6 leading-relaxed">
              I'm very flexible with time
              <br />
              zone communications
            </h3>
            
            {/* Country Tabs */}
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setSelectedCountry("GB")}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedCountry === "GB"
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/50 shadow-lg shadow-blue-500/20"
                    : "bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] hover:bg-[#2a2a2a]"
                }`}
              >
                GB UK
              </button>
              <button
                onClick={() => setSelectedCountry("IN")}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedCountry === "IN"
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/50 shadow-lg shadow-blue-500/20"
                    : "bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] hover:bg-[#2a2a2a]"
                }`}
              >
                IN India
              </button>
              <button
                onClick={() => setSelectedCountry("US")}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedCountry === "US"
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/50 shadow-lg shadow-blue-500/20"
                    : "bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] hover:bg-[#2a2a2a]"
                }`}
              >
                US USA
              </button>
            </div>
            
            {/* 3D Globe */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-80 h-80">
              <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/30 via-cyan-600/20 to-blue-700/30 blur-3xl animate-pulse"></div>
                
                {/* Globe container */}
                <div 
                  className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-950/60 to-black border border-blue-500/20 overflow-hidden group-hover:rotate-12 transition-transform duration-700"
                  style={{ transform: `rotateY(${globeRotation}deg)` }}
                >
                  {/* Dot pattern */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.6) 2px, transparent 2px)`,
                    backgroundSize: '20px 20px',
                    maskImage: 'radial-gradient(circle at center, black 45%, transparent 75%)',
                    animation: 'rotate 20s linear infinite'
                  }}></div>
                  
                  {/* Grid lines */}
                  <div className="absolute inset-0">
                    {[10, 25, 40, 55, 70, 85].map((top) => (
                      <div 
                        key={`h-${top}`} 
                        className="absolute left-0 right-0 h-[1px] bg-blue-500/20" 
                        style={{ 
                          top: `${top}%`,
                          transform: `scaleX(${Math.sin((top / 100) * Math.PI)})`
                        }}
                      ></div>
                    ))}
                    {[10, 25, 40, 55, 70, 85].map((left) => (
                      <div 
                        key={`v-${left}`} 
                        className="absolute top-0 bottom-0 w-[1px] bg-blue-500/20" 
                        style={{ left: `${left}%` }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Location highlight - India */}
                  <div className="absolute top-[42%] right-[35%]">
                    <div className="relative">
                      <div className="h-4 w-4 rounded-full bg-blue-500 animate-ping absolute"></div>
                      <div className="h-4 w-4 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
                    </div>
                  </div>
                  
                  {/* Additional location dots */}
                  <div className="absolute top-[30%] left-[25%]">
                    <div className="h-2 w-2 rounded-full bg-cyan-400/60"></div>
                  </div>
                  <div className="absolute top-[35%] left-[15%]">
                    <div className="h-2 w-2 rounded-full bg-cyan-400/60"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-8">
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full px-6 py-4 font-medium text-sm transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105">
                Connect now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Work Together Card */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[28px] p-8 hover:border-white/10 transition-all duration-500 shadow-2xl flex flex-col justify-between min-h-[250px] col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="text-white text-2xl font-light leading-relaxed mb-6">
              Let's work together
              <br />
              <span className="text-gray-400">on your next project</span>
            </h3>
            <button
              onClick={copyEmail}
              className="group/btn flex items-center justify-center gap-3 px-5 py-4 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all text-gray-300 hover:text-white text-sm font-medium"
            >
              <Copy className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              <span className="text-sm">abhi9161.sharma@gmail.com</span>
            </button>
          </div>

          {/* Impact Card */}
          <div className="bg-gradient-to-br from-blue-950/40 to-purple-950/40 border border-blue-500/20 rounded-[28px] p-8 hover:border-blue-500/30 hover:scale-[1.02] transition-all duration-500 shadow-2xl shadow-blue-500/5 flex flex-col justify-between min-h-[250px] col-span-1 md:col-span-1 lg:col-span-1">
            <div>
              <div className="flex gap-2 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                <div className="h-3 w-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
              </div>
              <h3 className="text-white text-2xl font-light text-center leading-relaxed mb-2">
                Websites that
              </h3>
              <p className="text-4xl font-light text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                impact.
              </p>
            </div>
            <div className="flex gap-3 mt-6">
              <Button className="flex-1 bg-white text-black hover:bg-gray-100 rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
                Start ✨
              </Button>
              <Button variant="outline" className="flex-1 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 rounded-full font-medium transition-all">
                Details
              </Button>
            </div>
          </div>

          {/* Inside Scoop - Full Width */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-[#0a0a0a] border border-white/5 rounded-[28px] p-8 hover:border-white/10 transition-all duration-500 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">THE INSIDE SCOOP</span>
            </div>
            <h3 className="text-white text-2xl font-light mb-10">
              Currently building a <span className="text-purple-400">SaaS Application</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                "Design System 3.0",
                "API Gateway 2.0",
                "User Onboarding",
                "Payment System",
                "Monitoring & Alerts",
                "API Integration",
                "User Dashboard"
              ].map((project) => (
                <div
                  key={project}
                  className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all text-center group cursor-pointer"
                >
                  <span className="text-white text-sm font-light group-hover:text-purple-400 transition-colors">{project}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
