"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Download,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  Coffee,
  Music,
  Camera,
  Gamepad2,
  Building,
  Code2
} from "lucide-react";

export default function AboutPage() {
  const education = [
    {
      degree: "B.Tech in Computer Sciences",
      institution: "SRM Institute of Science and Technology",
      year: "May 2020 - May 2024",
      gpa: "8.58 CGPA",
      description: "Specialized in software engineering, data structures, algorithms, and modern web development technologies"
    }
  ];

  const workExperience = [
    {
      title: "ReactJS/NextJS Developer",
      company: "CODER'S BOTIQUE",
      period: "May 2025 - Present",
      type: "Full-time",
      responsibilities: [
        "Collaborated with design teams to transform wireframes and mock-ups into functional, user-friendly web pages",
        "Developed user interfaces using HTML, CSS, and JavaScript to build interactive and responsive designs",
        "Optimized web performance by enhancing applications for maximum speed and scalability"
      ]
    },
    {
      title: "MERN Stack Developer Intern",
      company: "Cuvette",
      period: "Jul 2024 - Mar 2025",
      type: "Remote Internship",
      responsibilities: [
        "Developed and optimized full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
        "Enhanced application performance, resolved bugs, and gained hands-on experience with Git and deployment",
        "Collaborated with cross-functional teams to design responsive user interfaces and ensure seamless integration"
      ]
    },
    {
      title: "Front End Developer",
      company: "Internite Corporation",
      period: "2024",
      type: "Internship",
      responsibilities: [
        "Created responsive designs using HTML, CSS, and JavaScript with animations and transitions",
        "Developed two complete websites using modern web technologies",
        "Built a Portfolio Website and Interactive Quiz Application"
      ]
    }
  ];

  const technicalSkills = [
    { category: "Programming Languages", skills: ["C/C++", "JavaScript"] },
    { category: "Frontend Development", skills: ["HTML", "CSS", "ReactJS", "TypeScript", "Next.js"] },
    { category: "Database Management", skills: ["MySQL", "MongoDB"] },
    { category: "Version Control & Workflow", skills: ["GitLab", "GitHub"] },
    { category: "Design Tools", skills: ["Figma"] }
  ];

  const personalInterests = [
    { name: "AI Tools", icon: Code2 },
    { name: "Web Technologies", icon: Coffee },
    { name: "Open Source", icon: Music },
    { name: "Problem Solving", icon: Gamepad2 }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-accent/5 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  About Me
                </h1>
                <p className="mb-6 text-lg text-gray-300">
                  I'm a versatile Full Stack Developer with a Bachelor's degree in Computer Science 
                  from SRM Institute of Science and Technology. Currently working as a ReactJS/NextJS 
                  Developer at CODER'S BOTIQUE, I specialize in creating responsive and interactive web solutions.
                </p>
                <p className="mb-6 text-lg text-gray-300">
                  My expertise spans the MERN stack with strong proficiency in frontend technologies 
                  including React.js, Next.js, TypeScript, and modern CSS frameworks. I'm passionate 
                  about leveraging AI tools like Claude, ChatGPT, and Cursor AI to enhance productivity 
                  and deliver innovative solutions.
                </p>
                <p className="mb-8 text-lg text-gray-300">
                  I thrive in collaborative environments and enjoy transforming complex requirements 
                  into user-friendly, scalable applications that make a real impact.
                </p>
                
                <div className="mb-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="h-4 w-4" />
                    <span>Gorakhpur, Uttar Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="h-4 w-4" />
                    <span>2+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <GraduationCap className="h-4 w-4" />
                    <span>B.Tech Graduate</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="curved-element bg-white text-black hover:bg-gray-100" asChild>
                    <Link href="/contact">
                      Let's Work Together
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="curved-element border-white/20 bg-white/5 text-white hover:bg-white/10">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="h-80 w-80 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <Image 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      alt="Abhishek Sharma"
                      width={320}
                      height={320}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 rounded-xl bg-card p-4 shadow-lg glass-effect">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">3+</div>
                      <div className="text-sm text-gray-300">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white">
              Work Experience
            </h2>
            
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <Card key={index} className="curved-element glass-effect border-white/10 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                        <div className="flex items-center gap-2 text-primary">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="bg-white/10 text-gray-300">{job.type}</Badge>
                        <p className="text-sm text-gray-400">{job.period}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      {job.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white">
              Technical Skills
            </h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {technicalSkills.map((category, index) => (
                <Card key={index} className="curved-element glass-effect border-white/10">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-semibold text-lg text-white">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs border-white/20 bg-white/5 text-gray-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white">
              Education
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="curved-element glass-effect border-white/10">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-white">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mt-1">
                          <span>{edu.year}</span>
                          <span className="font-medium text-primary">{edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-white">
              Beyond Development
            </h2>
            <p className="mb-12 text-center text-lg text-gray-300">
              Areas of interest that fuel my passion for technology
            </p>
            
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {personalInterests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <Card key={index} className="curved-element glass-effect border-white/10 text-center">
                    <CardContent className="p-6">
                      <div className="mb-3 flex justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-medium text-white">{interest.name}</h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-white">
              My Development Philosophy
            </h2>
            <blockquote className="text-xl italic text-gray-300">
              "Technology should solve real problems and enhance human experiences. 
              I believe in writing clean, maintainable code, embracing continuous learning, 
              and leveraging AI tools to amplify productivity while keeping the user experience 
              at the heart of every solution."
            </blockquote>
            <p className="mt-6 font-medium text-white">— Abhishek Sharma</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/10 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">
              Ready to Collaborate?
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              I'm always excited to work on innovative projects and collaborate with amazing teams.
            </p>
            <Button size="lg" className="curved-element bg-white text-black hover:bg-gray-100" asChild>
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
