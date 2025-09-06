import { useEffect, useRef } from 'react';
import { Code2, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate-skill');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Python', level: 90, color: 'bg-cyber-green' },
    { name: 'Django REST', level: 85, color: 'bg-primary' },
    { name: 'ReactJS', level: 80, color: 'bg-cyber-blue' },
    { name: 'JavaScript', level: 85, color: 'bg-cyber-purple' },
    { name: 'HTML/CSS', level: 90, color: 'bg-cyber-pink' },
    { name: 'MySQL', level: 75, color: 'bg-primary' },
    { name: 'NumPy/Pandas', level: 70, color: 'bg-cyber-green' },
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expertise in both frontend and backend technologies with a focus on modern web development.',
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Proficient in database design, optimization, and management using MySQL and other systems.',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Deep understanding of web frameworks, RESTful APIs, and responsive design principles.',
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Strong analytical thinking and ability to solve complex programming challenges efficiently.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="font-mono text-cyber-blue shadow-glow">01.</span>
            <span className="ml-4 bg-gradient-cyber-alt bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber-alt mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <div className="bg-gradient-card p-8 rounded-2xl border border-primary/20 shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-primary font-mono">
                {'<profile>'}
              </h3>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Computer Science student from Gwalior, MP, with a solid foundation in 
                  full-stack web development. Currently pursuing my degree while gaining hands-on experience 
                  through internships and personal projects.
                </p>
                
                <p>
                  My journey in programming started with curiosity about how websites work, which led me 
                  to dive deep into both frontend and backend technologies. I specialize in building 
                  scalable web applications using Django REST framework and React.
                </p>
                
                <p>
                  Currently interning at F5 Softech, where I'm working on cutting-edge e-commerce solutions 
                  and learning about production-level application development, user authentication systems, 
                  and database optimization.
                </p>
              </div>
              
              <div className="mt-6 text-primary font-mono">
                {'</profile>'}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group bg-gradient-card p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow"
                >
                  <item.icon className="w-8 h-8 text-primary mb-4 group-hover:animate-float" />
                  <h4 className="font-mono font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div ref={skillsRef} className="space-y-8">
            <div className="bg-gradient-card p-8 rounded-2xl border border-primary/20 shadow-card">
              <h3 className="text-2xl font-bold mb-8 text-primary font-mono">
                {'<skills>'}
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-foreground font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`skill-bar h-full ${skill.color} rounded-full transition-all duration-1000 ease-out opacity-0 w-0`}
                        style={{
                          '--target-width': `${skill.level}%`,
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-primary font-mono">
                {'</skills>'}
              </div>
            </div>

            {/* Education */}
            <div className="bg-gradient-card p-8 rounded-2xl border border-primary/20 shadow-card">
              <h3 className="text-2xl font-bold mb-6 text-primary font-mono">
                {'<education>'}
              </h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-6">
                  <h4 className="font-mono font-semibold text-foreground">
                    B.Tech Computer Science
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    2022 - Present | Gwalior, India
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Coursework: Data Structures, Algorithms, Database Management, 
                    Software Engineering, Web Technologies
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-primary font-mono">
                {'</education>'}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;