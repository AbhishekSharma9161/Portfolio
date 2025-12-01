import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
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
  ExternalLink
} from "lucide-react";

export default function Index() {
  const skills = [
    { name: "React.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "Next.js", category: "Framework" },
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "HTML/CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" }
  ];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Responsive portfolio website with animations showcasing personal details and projects",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      link: "#"
    },
    {
      title: "React Notes App",
      description: "Feature-rich notes application with categorization and local storage",
      tech: ["React.js", "LocalStorage", "Tailwind CSS", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
      link: "#"
    },
    {
      title: "Weather App",
      description: "Real-time weather application with OpenWeatherMap API integration",
      tech: ["HTML", "CSS", "JavaScript", "API Integration"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=200&fit=crop",
      link: "#"
    }
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText("abhi9161.sharma@gmail.com");
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background curved element */}
        <div className="absolute bottom-0 left-0 right-0 h-96 curved-bg"></div>
        <div className="absolute bottom-0 left-1/2 h-40 w-full max-w-4xl -translate-x-1/2 rounded-t-full bg-gradient-to-t from-background/20 to-transparent"></div>
        
        <div className="container relative z-10 px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Status Badge */}
            <div className="mb-8 flex justify-center">
              <Badge variant="secondary" className="glass-effect border-primary/20 px-4 py-2 text-primary">
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
              I help founders turn ideas
              <br />
              into seamless{" "}
              <span className="italic text-purple-400">digital experiences</span>
            </h1>
            
            {/* Introduction */}
            <div className="mb-12 flex items-center justify-center gap-4 text-lg text-gray-300 sm:text-xl">
              <span>Hello, I'm Abhishek Sharma</span>
              <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-purple-500">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                  alt="Abhishek Sharma"
                  className="h-full w-full object-cover"
                />
              </div>
              <span>a Full Stack Developer</span>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-12">
              <Button size="lg" className="curved-element bg-white text-black hover:bg-gray-100">
                Let's Connect
                <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Versatile Full Stack Developer with a Bachelor's degree in Computer Science 
              from SRM Institute of Science and Technology. Currently working as a ReactJS/NextJS 
              Developer at CODER'S BOTIQUE.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="curved-element glass-effect border-white/10">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                    <Code className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Frontend Expert</h3>
                <p className="text-gray-300">
                  React.js, Next.js, TypeScript, and modern CSS frameworks
                </p>
              </CardContent>
            </Card>
            
            <Card className="curved-element glass-effect border-white/10">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                    <Smartphone className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">MERN Stack</h3>
                <p className="text-gray-300">
                  Full-stack development with MongoDB, Express.js, React.js, Node.js
                </p>
              </CardContent>
            </Card>
            
            <Card className="curved-element glass-effect border-white/10">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                    <Palette className="h-6 w-6 text-green-400" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">AI Enhanced</h3>
                <p className="text-gray-300">
                  Experience with Claude, ChatGPT, Cursor AI for enhanced productivity
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-300 text-lg">
              Some of my recent work that I'm proud to share
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="curved-element glass-effect border-white/10 overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-white/10 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-0">
                    View Project <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-gray-300 text-lg">
              Technologies I work with to bring ideas to life
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="curved-element border-white/20 bg-white/5 px-4 py-2 text-sm text-gray-300 hover:bg-white/10 transition-colors">
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
              <Badge className="mb-4 bg-green-500/20 text-green-400">Currently Working</Badge>
              <h3 className="text-2xl font-bold text-white mb-2">ReactJS/NextJS Developer</h3>
              <p className="text-purple-400 font-medium mb-4">CODER'S BOTIQUE ��� May 2025 - Present</p>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Collaborating with design teams to transform wireframes into functional web applications. 
                Optimizing web performance and ensuring seamless user experiences across various devices.
              </p>
            </div>
            <Button asChild className="curved-element bg-white text-black hover:bg-gray-100">
              <Link to="/about">Learn More About My Journey</Link>
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
          <Button size="lg" className="curved-element bg-white text-black hover:bg-gray-100">
            <Link to="/contact" className="flex items-center">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
