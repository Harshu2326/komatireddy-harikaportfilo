import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Languages,
  Code,
  Database,
  BarChart3,
  Brain,
  Award,
  Calendar,
  ChevronDown
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Portfolio = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/80"></div>
        
        {/* Animated particles */}
        <div className="particles">
          <div className="particle" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
          <div className="particle" style={{ top: '60%', left: '80%', animationDelay: '2s' }}></div>
          <div className="particle" style={{ top: '40%', left: '60%', animationDelay: '1s' }}></div>
          <div className="particle" style={{ top: '80%', left: '30%', animationDelay: '3s' }}></div>
          <div className="particle" style={{ top: '15%', left: '70%', animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
            Harika Komati Reddy
          </h1>
          <div className="text-xl md:text-2xl mb-4 text-gradient font-semibold">
            Data Analyst | Python Developer | Tech Enthusiast
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Transforming data into insights. Building future-ready solutions with Python, AI, and analytics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="glow-border hover-glow bg-transparent text-neon-blue border-neon-blue hover:bg-neon-blue hover:text-background"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glow-border hover-glow bg-transparent text-neon-purple border-neon-purple hover:bg-neon-purple hover:text-background"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glow-border hover-glow bg-transparent text-neon-green border-neon-green hover:bg-neon-green hover:text-background"
              asChild
            >
              <a href="/resume.pdf" download="Harika_Komati_Reddy_Resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-neon-blue" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Detail-oriented Data Science graduate with expertise in Python, SQL, Power BI, and Machine Learning. 
                Experienced in data cleaning, visualization, and predictive modeling with proven efficiency improvements through automation. 
                Passionate about solving problems with data and building impactful solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-neon-blue">
                  <MapPin className="w-5 h-5" />
                  <span>Based in Dubai</span>
                </div>
                <div className="flex items-center gap-3 text-neon-purple">
                  <GraduationCap className="w-5 h-5" />
                  <span>B.Tech in CSE (Data Science), 2025</span>
                </div>
                <div className="flex items-center gap-3 text-neon-green">
                  <Languages className="w-5 h-5" />
                  <span>Languages: Telugu, English</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <Card className="glow-border hover-glow bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-neon-blue">Problem Solving</h3>
                  <p className="text-sm text-muted-foreground">Analytical thinking and creative solution finding</p>
                </CardContent>
              </Card>
              <Card className="glow-border hover-glow bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-neon-purple">Teamwork</h3>
                  <p className="text-sm text-muted-foreground">Collaborative approach to complex projects</p>
                </CardContent>
              </Card>
              <Card className="glow-border hover-glow bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-neon-green">Attention to Detail</h3>
                  <p className="text-sm text-muted-foreground">Precision in data analysis and code quality</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glow-border hover-glow bg-card/50 backdrop-blur group">
              <CardHeader>
                <CardTitle className="text-xl text-neon-blue group-hover:text-neon-cyan transition-colors">
                  Sales Data Analysis
                </CardTitle>
                <CardDescription>
                  Python & Excel Analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Cleaned and analyzed retail data with Pandas, identified trends, and improved inventory planning by 15%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-neon-blue text-neon-blue">Python</Badge>
                  <Badge variant="outline" className="text-xs border-neon-green text-neon-green">Excel</Badge>
                  <Badge variant="outline" className="text-xs border-neon-purple text-neon-purple">Pandas</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:glow-blue">
                  View Details <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="glow-border hover-glow bg-card/50 backdrop-blur group">
              <CardHeader>
                <CardTitle className="text-xl text-neon-purple group-hover:text-neon-pink transition-colors">
                  Student Performance Prediction
                </CardTitle>
                <CardDescription>
                  Machine Learning Model
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Built regression model for predicting student scores with 85% accuracy using machine learning techniques.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-neon-blue text-neon-blue">Python</Badge>
                  <Badge variant="outline" className="text-xs border-neon-green text-neon-green">Scikit-learn</Badge>
                  <Badge variant="outline" className="text-xs border-neon-purple text-neon-purple">ML</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:glow-purple">
                  View Details <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="glow-border hover-glow bg-card/50 backdrop-blur group">
              <CardHeader>
                <CardTitle className="text-xl text-neon-green group-hover:text-neon-cyan transition-colors">
                  Dashboards & Reporting
                </CardTitle>
                <CardDescription>
                  Power BI Analytics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Designed Power BI dashboards that improved reporting accuracy by 20% with interactive visualizations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-neon-blue text-neon-blue">Power BI</Badge>
                  <Badge variant="outline" className="text-xs border-neon-green text-neon-green">SQL</Badge>
                  <Badge variant="outline" className="text-xs border-neon-purple text-neon-purple">Analytics</Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:glow-green">
                  View Details <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">Achievements</h2>
          
          <div className="space-y-8">
            <div className="timeline-item">
              <Card className="glow-border bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <BarChart3 className="w-6 h-6 text-neon-blue" />
                    <h3 className="text-xl font-semibold text-neon-blue">Data Processing Optimization</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Reduced data processing time by <span className="text-neon-green font-semibold">30%</span> using Python automation scripts and optimized workflows.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="timeline-item">
              <Card className="glow-border bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Code className="w-6 h-6 text-neon-purple" />
                    <h3 className="text-xl font-semibold text-neon-purple">Project Efficiency</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Boosted project efficiency by <span className="text-neon-green font-semibold">15%</span> through optimized analysis methodologies and automation.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="timeline-item">
              <Card className="glow-border bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Database className="w-6 h-6 text-neon-green" />
                    <h3 className="text-xl font-semibold text-neon-green">Dashboard Accuracy</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Designed dashboards that improved accuracy by <span className="text-neon-green font-semibold">20%</span> with enhanced data visualization and reporting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">Tech Stack</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glow-border hover-glow bg-card/50 backdrop-blur group">
              <CardHeader className="text-center">
                <Code className="w-12 h-12 mx-auto text-neon-blue group-hover:animate-pulse-glow" />
                <CardTitle className="text-neon-blue">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue">Python</Badge>
                  <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue">SQL</Badge>
                  <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue">HTML</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glow-border hover-glow bg-card/50 backdrop-blur group">
              <CardHeader className="text-center">
                <Database className="w-12 h-12 mx-auto text-neon-purple group-hover:animate-pulse-glow" />
                <CardTitle className="text-neon-purple">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple">Power BI</Badge>
                  <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple">Excel</Badge>
                  <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple">Jupyter</Badge>
                  <Badge className="bg-neon-purple/20 text-neon-purple border-neon-purple">MS Office</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glow-border hover-glow bg-card/50 backdrop-blur group">
              <CardHeader className="text-center">
                <Brain className="w-12 h-12 mx-auto text-neon-green group-hover:animate-pulse-glow" />
                <CardTitle className="text-neon-green">Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-neon-green/20 text-neon-green border-neon-green">Data Cleaning</Badge>
                  <Badge className="bg-neon-green/20 text-neon-green border-neon-green">EDA</Badge>
                  <Badge className="bg-neon-green/20 text-neon-green border-neon-green">ML</Badge>
                  <Badge className="bg-neon-green/20 text-neon-green border-neon-green">NLP</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">Certifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Data Analytics Job Simulation", issuer: "Quantium Forage", year: "2025", icon: BarChart3 },
              { title: "NLP Using Python", issuer: "Infosys Wingspan", year: "2025", icon: Brain },
              { title: "Cybersecurity Analyst", issuer: "Forage", year: "2025", icon: Award },
              { title: "Python for Data Science", issuer: "Infosys Wingspan", year: "2024", icon: Code },
              { title: "Deep Learning Using Python", issuer: "Infosys Wingspan", year: "2024", icon: Brain },
              { title: "Software Engineering", issuer: "Accenture Forage", year: "2025", icon: Code },
            ].map((cert, index) => (
              <Card key={index} className="glow-border hover-glow bg-card/50 backdrop-blur group">
                <CardContent className="p-6 text-center">
                  <cert.icon className="w-8 h-8 mx-auto mb-3 text-neon-blue group-hover:animate-pulse-glow" />
                  <h3 className="font-semibold text-sm mb-1">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-xs text-neon-green">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">Education</h2>
          
          <div className="space-y-6">
            <div className="timeline-item">
              <Card className="glow-border bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-neon-blue">B.Tech in CSE (Data Science)</h3>
                      <p className="text-muted-foreground">Audisankara College</p>
                      <p className="text-sm text-neon-green">CGPA: 7.7</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      2021 – 2025
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="timeline-item">
              <Card className="glow-border bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-neon-purple">Intermediate</h3>
                      <p className="text-muted-foreground">Narayana Junior College</p>
                      <p className="text-sm text-neon-green">70%</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      2019 – 2021
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="timeline-item">
              <Card className="glow-border bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-neon-green">CBSE</h3>
                      <p className="text-muted-foreground">Silver Bells Central School</p>
                      <p className="text-sm text-neon-green">75%</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      2018 – 2019
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-neon-blue">Let's Connect</h3>
              <p className="text-muted-foreground">
                I'm always interested in new opportunities and collaborations. 
                Feel free to reach out if you'd like to discuss data analytics, Python development, or any exciting projects.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:harikareddykomatyreddy@gmail.com"
                  className="flex items-center gap-3 text-neon-blue hover:text-neon-cyan transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:animate-pulse-glow" />
                  harikareddykomatyreddy@gmail.com
                </a>
                
                <a 
                  href="tel:+971526546356"
                  className="flex items-center gap-3 text-neon-purple hover:text-neon-pink transition-colors group"
                >
                  <Phone className="w-5 h-5 group-hover:animate-pulse-glow" />
                  +971 52 654 6356
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/harika-komatyreddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neon-green hover:text-neon-cyan transition-colors group"
                >
                  <Linkedin className="w-5 h-5 group-hover:animate-pulse-glow" />
                  linkedin.com/in/harika-komatyreddy
                </a>
              </div>
            </div>
            
            <Card className="glow-border bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Your Name" 
                      className="glow-border bg-transparent border-neon-blue/50 focus:border-neon-blue"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="glow-border bg-transparent border-neon-purple/50 focus:border-neon-purple"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="glow-border bg-transparent border-neon-green/50 focus:border-neon-green resize-none"
                    />
                  </div>
                  <Button className="w-full hover-glow bg-gradient-primary border-0 text-background">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Harika Komati Reddy | Built with 💻 & ☁️
            </p>
            <div className="flex gap-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm text-muted-foreground hover:text-neon-blue transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-sm text-muted-foreground hover:text-neon-purple transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm text-muted-foreground hover:text-neon-green transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;