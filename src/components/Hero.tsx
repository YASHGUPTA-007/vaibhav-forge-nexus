import { useEffect, useState } from 'react';
import { Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Full Stack Developer',
    'Python Expert', 
    'React Specialist',
    'Django Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const type = () => {
      const current = titles[currentIndex];
      
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.substring(0, displayText.length + 1));
          timeout = setTimeout(type, 100);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.substring(0, displayText.length - 1));
          timeout = setTimeout(type, 50);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, isDeleting, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-6 text-center z-20 relative">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <span className="font-mono text-cyber-blue text-lg tracking-wide shadow-glow">
              Hello, World! I'm
            </span>
          </div>
          
          {/* Name with Enhanced Glitch Effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-cyber bg-clip-text text-transparent hover:animate-glitch cursor-default drop-shadow-2xl">
              VAIBHAV
            </span>
            <br />
            <span className="text-foreground font-mono font-normal text-4xl md:text-6xl drop-shadow-lg">
              GUPTA
            </span>
          </h1>
          
          {/* Typing Animation */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl md:text-3xl font-mono h-12 flex items-center justify-center">
              <span className="text-cyber-green mr-2 shadow-neon">$</span>
              <span className="text-cyber-blue shadow-glow">{displayText}</span>
              <span className="animate-pulse text-cyber-cyan ml-1 shadow-electric">|</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Passionate Computer Science student specializing in full-stack web development. 
            I build scalable applications using Django, React, and modern web technologies.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={() => scrollToSection('projects')}
              className="group relative bg-gradient-cyber hover:bg-gradient-cyber-alt text-primary-foreground px-8 py-4 text-lg font-mono rounded-xl shadow-cyber transition-all duration-300 hover:shadow-glow overflow-hidden border border-cyber-blue/30"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-cyber-alt opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </Button>
            
            <Button
              variant="outline"
              className="group border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/10 hover:border-cyber-purple px-8 py-4 text-lg font-mono rounded-xl transition-all duration-300 shadow-electric"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 mb-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://linkedin.com/in/vaibhav-gupta-559a8240"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-gradient-card border border-cyber-blue/30 hover:border-cyber-blue/60 transition-all duration-300 hover:shadow-glow"
            >
              <Linkedin className="w-6 h-6 text-cyber-blue group-hover:animate-float" />
            </a>
            <a 
              href="https://github.com/vaibhav"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-gradient-card border border-cyber-green/30 hover:border-cyber-green/60 transition-all duration-300 hover:shadow-neon"
            >
              <Github className="w-6 h-6 text-cyber-green group-hover:animate-float" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-muted-foreground hover:text-cyber-cyan transition-colors duration-300"
          >
            <span className="font-mono text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 left-10 text-cyber-green/40 font-mono text-sm animate-float shadow-neon">
        {'<developer>'}
      </div>
      <div className="absolute bottom-20 right-10 text-cyber-blue/40 font-mono text-sm animate-float shadow-glow" style={{ animationDelay: '2s' }}>
        {'</coder>'}
      </div>
      <div className="absolute top-1/2 left-5 text-cyber-purple/40 font-mono text-xs animate-float shadow-electric" style={{ animationDelay: '4s' }}>
        {'// Building the future'}
      </div>
      <div className="absolute top-1/3 right-20 text-cyber-pink/40 font-mono text-xs animate-float" style={{ animationDelay: '6s' }}>
        {'console.log("Hello!");'}
      </div>
    </section>
  );
};

export default Hero;