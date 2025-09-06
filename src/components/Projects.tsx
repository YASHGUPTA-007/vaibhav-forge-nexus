import { useState } from 'react';
import { ExternalLink, Github, Code2, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Library Management System',
      description: 'A comprehensive full-stack web application built with Django REST framework for backend API and ReactJS for the frontend. Features include user authentication, book catalog management, borrowing system, and admin dashboard.',
      technologies: ['Django REST', 'ReactJS', 'MySQL', 'JavaScript', 'HTML/CSS'],
      category: 'Full Stack',
      icon: Database,
      features: [
        'User authentication & authorization',
        'Book catalog with search & filtering',
        'Borrowing & return system',
        'Admin dashboard for library management',
        'Responsive design for all devices'
      ],
      github: '#',
      demo: '#',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'E-Commerce Website',
      description: 'A dynamic and responsive e-commerce platform developed during my internship at F5 Softech. Includes product browsing, shopping cart functionality, secure checkout process, and user account management.',
      technologies: ['Django', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
      category: 'Web Development',
      icon: Globe,
      features: [
        'Product catalog with categories',
        'Shopping cart & wishlist functionality',
        'Secure user authentication',
        'Order management system',
        'Payment integration ready'
      ],
      github: '#',
      demo: '#',
      status: 'In Development'
    },
    {
      id: 3,
      title: 'Data Analysis Dashboard',
      description: 'Interactive data visualization dashboard using Python libraries NumPy and Pandas for data processing, with a web interface for displaying analytical insights and charts.',
      technologies: ['Python', 'NumPy', 'Pandas', 'JavaScript', 'Chart.js'],
      category: 'Data Science',
      icon: Code2,
      features: [
        'Data processing with NumPy & Pandas',
        'Interactive charts and graphs',
        'Real-time data filtering',
        'Export functionality',
        'Responsive dashboard design'
      ],
      github: '#',
      demo: '#',
      status: 'Completed'
    }
  ];

  const categories = ['All', 'Full Stack', 'Web Development', 'Data Science'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'Django REST': 'bg-cyber-green/20 text-cyber-green border-cyber-green/30',
      'Django': 'bg-cyber-green/20 text-cyber-green border-cyber-green/30',
      'ReactJS': 'bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30',
      'JavaScript': 'bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30',
      'Python': 'bg-cyber-green/20 text-cyber-green border-cyber-green/30',
      'MySQL': 'bg-primary/20 text-primary border-primary/30',
      'HTML/CSS': 'bg-cyber-pink/20 text-cyber-pink border-cyber-pink/30',
      'NumPy': 'bg-cyber-green/20 text-cyber-green border-cyber-green/30',
      'Pandas': 'bg-cyber-green/20 text-cyber-green border-cyber-green/30',
      'Chart.js': 'bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30',
    };
    return colors[tech] || 'bg-muted/20 text-muted-foreground border-muted/30';
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="font-mono text-primary">02.</span>
            <span className="ml-4 bg-gradient-cyber bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills through real-world applications and innovative solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`font-mono transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'border-primary/30 text-muted-foreground hover:text-primary hover:border-primary/50'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-card rounded-2xl border border-primary/20 overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-cyber"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Card Header */}
              <div className="p-6 border-b border-primary/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className={`text-xs font-mono px-2 py-1 rounded-full ${
                        project.status === 'Completed' 
                          ? 'bg-cyber-green/20 text-cyber-green' 
                          : 'bg-cyber-blue/20 text-cyber-blue'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`text-xs font-mono px-2 py-1 rounded-full border ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Features - Expandable */}
              <div className={`px-6 transition-all duration-500 ${
                hoveredProject === project.id ? 'max-h-64 py-4' : 'max-h-0 py-0'
              } overflow-hidden`}>
                <h4 className="font-mono text-sm text-primary mb-3">Key Features:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Actions */}
              <div className="p-6 pt-4 flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="group/btn p-2 rounded-lg bg-muted/50 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                    title="View Code"
                  >
                    <Github className="w-4 h-4 text-muted-foreground group-hover/btn:text-primary transition-colors duration-300" />
                  </a>
                  <a
                    href={project.demo}
                    className="group/btn p-2 rounded-lg bg-muted/50 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/btn:text-primary transition-colors duration-300" />
                  </a>
                </div>
                
                <span className="text-xs font-mono text-muted-foreground">
                  {project.category}
                </span>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="group border-primary/50 text-primary hover:bg-primary/10 hover:border-primary px-8 py-3 font-mono rounded-xl transition-all duration-300"
          >
            View More Projects
            <ExternalLink className="w-4 h-4 ml-2 group-hover:animate-float" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;