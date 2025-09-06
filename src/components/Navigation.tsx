import { useState, useEffect } from 'react';
import { Home, User, Code2, Mail, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Floating Navigation */}
      <nav 
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-card/80 backdrop-blur-md shadow-cyber border border-primary/20' 
            : 'bg-card/60 backdrop-blur-sm'
        } rounded-full px-6 py-3 hidden md:block`}
      >
        <div className="flex items-center space-x-8">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === id
                  ? 'text-primary bg-primary/10 shadow-glow'
                  : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-mono text-sm font-medium">{label}</span>
              {activeSection === id && (
                <div className="absolute inset-0 rounded-full bg-gradient-cyber opacity-20 animate-glow" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ${
            isScrolled 
              ? 'bg-card/80 backdrop-blur-md shadow-cyber border border-primary/20' 
              : 'bg-card/60 backdrop-blur-sm'
          }`}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-primary" />
          ) : (
            <Menu className="w-5 h-5 text-primary" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`group flex items-center space-x-4 px-8 py-4 rounded-xl transition-all duration-300 ${
                    activeSection === id
                      ? 'text-primary bg-primary/10 shadow-glow'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="font-mono text-xl font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navigation;