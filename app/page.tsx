"use client";

import { Button } from "../frontend/components/ui/button";
import { Badge } from "../frontend/components/ui/badge";
import { Card, CardContent } from "../frontend/components/ui/card";
import StarsBackground from "../frontend/components/StarsBackground";
import BentoGrid from "../frontend/components/BentoGrid";
import ProjectsSection from "../frontend/components/ProjectsSection";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Palette,
  Smartphone,
  MapPin,
  Phone,
  Copy,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const skills = [
    { name: "React.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "Next.js", category: "Framework" },
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "Responsive portfolio website with animations showcasing personal details and projects",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      link: "#",
    },
    {
      title: "React Notes App",
      description:
        "Feature-rich notes application with categorization and local storage",
      tech: ["React.js", "LocalStorage", "Tailwind CSS", "Bootstrap"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
      link: "#",
    },
    {
      title: "Weather App",
      description:
        "Real-time weather application with OpenWeatherMap API integration",
      tech: ["HTML", "CSS", "JavaScript", "API Integration"],
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop",
      link: "#",
    },
  ];

  const copyEmail = () => {
    const email = "abhi9161.sharma@gmail.com";

    // Try modern clipboard API first
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          // Success - could add toast notification here
          console.log("Email copied to clipboard");
        })
        .catch(() => {
          // Fallback if clipboard API fails
          fallbackCopyTextToClipboard(email);
        });
    } else {
      // Fallback for older browsers or insecure contexts
      fallbackCopyTextToClipboard(email);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        console.log("Email copied to clipboard (fallback)");
      } else {
        console.log("Unable to copy email");
      }
    } catch (err) {
      console.error("Fallback: Could not copy text", err);
    }

    document.body.removeChild(textArea);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Top blur background */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 z-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-purple-300/75 blur-[150px] dark:bg-[#0b0218]"
        ></div>

        {/* Canvas background with radial mask and stars */}
        <div
          id="_r_1s_"
          className="absolute inset-0 bottom-0 z-0 size-full [mask-image:radial-gradient(100%_50%,white,transparent_90%)]"
        >
          <StarsBackground />
        </div>

        {/* Bottom curved background elements */}
        <div className="absolute bottom-0 left-1/2 z-0 h-60 w-full -translate-x-1/2">
          <div
            className="absolute bottom-0 left-1/2 z-0 h-[400px] w-[1200px] -translate-x-1/2 transform overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 30%, black 70%, transparent)",
            }}
          >
            <div className="absolute bottom-[167px] left-1/2 h-[111px] w-[787px] -translate-x-1/2 transform overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#5506ba_0%,rgba(10,10,10,0)_100%)] blur-[57px]"></div>
            <div className="absolute right-[-432px] bottom-[-753px] left-[-454px] h-[955px] rounded-[100%] bg-gradient-to-b from-black to-transparent dark:from-white"></div>
            <div className="absolute right-[-510px] bottom-[-759px] left-[-532px] aspect-[2.346820809248555/1] h-[956px] rounded-[100%] shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d] dark:bg-black"></div>
          </div>
        </div>

        <div className="container relative z-10 px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Status Badge */}
            <div className="mb-8 flex justify-center">
              <Badge
                variant="secondary"
                className="glass-effect border-primary/20 px-4 py-2 text-primary"
              >
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                  Next Ventures is live
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              I help to turn{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(236, 11, 200), rgb(91, 178, 246), rgb(246, 196, 54))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ideas
              </span>
              <br />
              into <span style={{ color: "rgb(251, 172, 172)" }}>seamless</span>
              <span className="italic text-purple-400">
                &nbsp;digital experiences
              </span>
            </h1>

            {/* Introduction */}
            <div className="mb-12 flex items-center justify-center gap-4 text-lg text-gray-300 sm:text-xl">
              <span>Hello, I'm Abhishek Sharma</span>
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-purple-500 group cursor-pointer">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd209ae98c41f479fa6b7a3b45e18a30b%2F9d20c290ee0e441cb68eb28acc5fe13d"
                  alt="Abhishek Sharma"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1"
                />
                {/* Emoji overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xl">👋</span>
                </div>
              </div>
              <span>a Full Stack Developer</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-12">
              <Button
                size="lg"
                className="curved-element bg-transparent border border-white/20 text-white hover:bg-white hover:text-black group relative"
                asChild
              >
                <Link href="/contact" className="flex items-center">
                  Let's Connect
                  <div className="relative ml-2 bg-white text-black rounded-full p-1 flex flex-col">
                    <ArrowRight className="flex h-[18px] w-[25px] transition-transform duration-300 group-hover:translate-x-1 flex-col justify-end items-start gap-[1px] ml-[1px]" />
                  </div>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="curved-element border-white/20 bg-white/5 text-white hover:bg-white/10"
                onClick={copyEmail}
              >
                <Copy className="mr-2 h-4 w-4" />
                abhi9161.sharma@gmail.com
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <BentoGrid />

      {/* Featured Case Studies */}
      <ProjectsSection />

      {/* Skills */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-gray-300 text-lg">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="curved-element border-white/20 bg-white/5 px-4 py-2 text-sm text-gray-300 hover:bg-white/10 transition-colors"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Current Work */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="curved-element glass-effect border-white/10 p-8 text-center">
            <div className="mb-6">
              <Badge className="mb-4 bg-green-500/20 text-green-400">
                Currently Working
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-2">
                ReactJS/NextJS Developer
              </h3>
              <p className="text-purple-400 font-medium mb-4">
                CODER'S BOTIQUE • May 2025 - Present
              </p>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Collaborating with design teams to transform wireframes into
                functional web applications. Optimizing web performance and
                ensuring seamless user experiences across various devices.
              </p>
            </div>
            <Button
              asChild
              className="curved-element bg-white text-black hover:bg-gray-100"
            >
              <Link href="/about">Learn More About My Journey</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            I'm always interested in new opportunities and exciting projects.
          </p>
          <Button
            size="lg"
            className="curved-element bg-white text-black hover:bg-gray-100"
            asChild
          >
            <Link href="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
