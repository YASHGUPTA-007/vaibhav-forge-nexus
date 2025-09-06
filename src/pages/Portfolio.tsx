import Navigation from '@/components/Navigation';
import BackgroundEffects from '@/components/BackgroundEffects';
import FloatingElements from '@/components/FloatingElements';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-primary text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <BackgroundEffects />
      
      {/* Floating Interactive Elements */}
      <FloatingElements />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-primary/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            © 2024 Vaibhav Gupta. Built with passion and code.
          </p>
          <div className="mt-2 text-xs text-muted-foreground/70">
            <span className="text-primary">{'</'}</span>
            <span>portfolio</span>
            <span className="text-primary">{'>'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;