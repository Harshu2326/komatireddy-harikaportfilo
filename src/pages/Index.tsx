import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  ExternalLink, 
  MapPin, 
  GraduationCap,
  Code,
  Database,
  Brain,
  Award,
  Calendar,
  ArrowUp,
  Github,
  Download
} from "lucide-react";
import harikaPhoto from "@/assets/harika-photo.jpg";

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">HARIKA KOMATI REDDY</h1>
            <div className="flex gap-6">
              {['Home', 'About', 'Skills', 'Education', 'Work', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                Hi There, <br />
                I'm <span className="text-primary">HARIKA KOMATI REDDY</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-2">I am into</p>
              <div className="text-2xl font-semibold text-primary mb-8 animate-pulse">
                Full Stack Development | Data Science
              </div>
              <div className="flex gap-4 justify-center lg:justify-start mb-8">
                <Button onClick={() => scrollToSection('about')} size="lg">
                  About Me
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://linkedin.com/in/harika-komati-reddy" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com/harika" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="mailto:harikakomati@gmail.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img 
                    src={harikaPhoto} 
                    alt="Harika Komati Reddy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 border-2 border-primary/30 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={harikaPhoto} 
                  alt="Harika Komati Reddy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <h3 className="text-2xl font-semibold text-primary mb-2">I'm HARIKA KOMATI REDDY</h3>
              <p className="text-lg text-primary/80 mb-4">Full Stack Developer & Data Scientist</p>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a passionate Full-Stack Developer and Data Scientist with expertise in modern web technologies 
                  and machine learning. Currently pursuing my Computer Science Engineering degree.
                </p>
                <p>
                  I am very passionate about improving my coding skills & developing innovative applications. 
                  I build scalable web applications using the MERN stack and develop intelligent solutions using Python and machine learning.
                </p>
                <p>
                  Working continuously to improve my skills in both development and data science. 
                  Love to build full-stack applications and solve real-world problems with data.
                </p>
              </div>

              <div className="mt-6 space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">harikakomati@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">Hyderabad, India</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Skills & Abilities</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" },
              { name: "Node.js", icon: "https://img.icons8.com/fluency/48/000000/node-js.png" },
              { name: "Python", icon: "https://img.icons8.com/color/48/000000/python--v1.png" },
              { name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript--v1.png" },
              { name: "MongoDB", icon: "https://img.icons8.com/color/48/000000/mongodb.png" },
              { name: "MySQL", icon: "https://img.icons8.com/color/48/000000/mysql-logo.png" },
              { name: "HTML5", icon: "https://img.icons8.com/color/48/000000/html-5--v1.png" },
              { name: "CSS3", icon: "https://img.icons8.com/color/48/000000/css3.png" },
              { name: "Bootstrap", icon: "https://img.icons8.com/color/48/000000/bootstrap.png" },
              { name: "GitHub", icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png" },
              { name: "AWS", icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png" },
              { name: "Docker", icon: "https://img.icons8.com/color/48/000000/docker.png" }
            ].map((skill) => (
              <Card key={skill.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-12 h-12 mx-auto mb-3"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <p className="text-sm font-medium">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-6">My Education</h2>
          <p className="text-center text-muted-foreground mb-16">
            Education is not the learning of facts, but the training of the mind to think.
          </p>
          
          <div className="space-y-12">
            {[
              {
                degree: "Bachelor of Technology in Computer Science Engineering",
                institution: "Vignan's Institute of Information Technology",
                duration: "2021-2025 | Pursuing",
                logo: "https://via.placeholder.com/80x80/3B82F6/FFFFFF?text=VIIT"
              },
              {
                degree: "Intermediate",
                institution: "Sri Chaitanya Junior College | MPC",
                duration: "2019-2021 | Completed",
                logo: "https://via.placeholder.com/80x80/10B981/FFFFFF?text=SC"
              },
              {
                degree: "Schooling",
                institution: "Kasturba Gandhi Balika Vidyalaya | SSC",
                duration: "2018-2019 | Completed",
                logo: "https://via.placeholder.com/80x80/F59E0B/FFFFFF?text=KG"
              }
            ].map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    <img 
                      src={edu.logo} 
                      alt={edu.institution}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                      <p className="text-primary font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work/Projects Section */}
      <section id="work" className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">My Work</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Portfolio Website",
                description: "A responsive portfolio website built with React and Tailwind CSS",
                tech: ["React", "TypeScript", "Tailwind CSS"],
                link: "#"
              },
              {
                title: "E-commerce Platform",
                description: "Full-stack e-commerce solution with payment integration",
                tech: ["MERN Stack", "Stripe", "JWT"],
                link: "#"
              },
              {
                title: "Data Analytics Dashboard",
                description: "Interactive dashboard for data visualization and analysis",
                tech: ["Python", "Pandas", "Plotly"],
                link: "#"
              }
            ].map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
          
          <div className="space-y-8">
            {[
              {
                company: "Quantium",
                role: "Data Analytics Job Simulation",
                duration: "September 2025",
                type: "Virtual Experience"
              },
              {
                company: "Forage",
                role: "Cybersecurity Analyst Program",
                duration: "2025",
                type: "Virtual Experience"
              },
              {
                company: "Accenture",
                role: "Software Engineering Virtual Experience",
                duration: "2025",
                type: "Virtual Experience"
              }
            ].map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{exp.company}</h3>
                      <p className="text-lg font-medium mb-2">{exp.role}</p>
                      <p className="text-sm text-muted-foreground">{exp.type}</p>
                    </div>
                    <Badge variant="outline">{exp.duration}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Harika Komati Reddy | Designed with <span className="text-red-500">❤️</span> By KOMATI REDDY HARIKA
            </p>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;