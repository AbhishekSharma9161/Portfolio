import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
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

export default function About() {
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

  const coreSkills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React & Next.js", level: 95 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js & Express", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 75 },
    { name: "Git/GitHub", level: 85 },
    { name: "Figma", level: 70 }
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
                <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                  About Me
                </h1>
                <p className="mb-6 text-lg text-muted-foreground">
                  I'm a versatile Full Stack Developer with a Bachelor's degree in Computer Science 
                  from SRM Institute of Science and Technology. Currently working as a ReactJS/NextJS 
                  Developer at CODER'S BOTIQUE, I specialize in creating responsive and interactive web solutions.
                </p>
                <p className="mb-6 text-lg text-muted-foreground">
                  My expertise spans the MERN stack with strong proficiency in frontend technologies 
                  including React.js, Next.js, TypeScript, and modern CSS frameworks. I'm passionate 
                  about leveraging AI tools like Claude, ChatGPT, and Cursor AI to enhance productivity 
                  and deliver innovative solutions.
                </p>
                <p className="mb-8 text-lg text-muted-foreground">
                  I thrive in collaborative environments and enjoy transforming complex requirements 
                  into user-friendly, scalable applications that make a real impact.
                </p>
                
                <div className="mb-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Gorakhpur, Uttar Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    <span>B.Tech Graduate</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link to="/contact">
                      Let's Work Together
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="h-80 w-80 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      alt="Abhishek Sharma"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 rounded-xl bg-card p-4 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">3+</div>
                      <div className="text-sm text-muted-foreground">Projects</div>
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
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
              Work Experience
            </h2>
            
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <div className="flex items-center gap-2 text-primary">
                          <Building className="h-4 w-4" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{job.type}</Badge>
                        <p className="text-sm text-muted-foreground">{job.period}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
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

      {/* Core Skills */}
      <section className="bg-muted/30 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
              Core Skills & Proficiency
            </h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {coreSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
              Technical Skills
            </h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {technicalSkills.map((category, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-semibold text-lg">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
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
      <section className="bg-muted/30 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
              Education
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                          <span>{edu.year}</span>
                          <span className="font-medium text-primary">{edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
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
            <h2 className="mb-6 text-center text-3xl font-bold tracking-tight">
              Beyond Development
            </h2>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              Areas of interest that fuel my passion for technology
            </p>
            
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {personalInterests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="mb-3 flex justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-medium">{interest.name}</h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-muted/30 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              My Development Philosophy
            </h2>
            <blockquote className="text-xl italic text-muted-foreground">
              "Technology should solve real problems and enhance human experiences. 
              I believe in writing clean, maintainable code, embracing continuous learning, 
              and leveraging AI tools to amplify productivity while keeping the user experience 
              at the heart of every solution."
            </blockquote>
            <p className="mt-6 font-medium">— Abhishek Sharma</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Ready to Collaborate?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              I'm always excited to work on innovative projects and collaborate with amazing teams.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
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
