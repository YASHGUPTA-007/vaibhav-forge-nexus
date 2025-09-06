import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vaibhav2941@gmail.com',
      link: 'mailto:vaibhav2941@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7667194342',
      link: 'tel:+917667194342'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Gwalior, MP',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      link: 'https://github.com/vaibhav',
      color: 'hover:text-foreground'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      link: 'https://linkedin.com/in/vaibhav-gupta-559a8240',
      color: 'hover:text-cyber-blue'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="font-mono text-primary">03.</span>
            <span className="ml-4 bg-gradient-cyber bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together 
            to bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            {/* Terminal Style Contact Info */}
            <div className="bg-gradient-card rounded-2xl border border-primary/20 p-8 shadow-card">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-purple"></div>
                  <div className="w-3 h-3 rounded-full bg-cyber-green"></div>
                </div>
                <span className="font-mono text-sm text-muted-foreground ml-4">
                  ~/contact-info
                </span>
              </div>
              
              <div className="font-mono text-sm space-y-4">
                <div className="text-primary">$ cat contact.json</div>
                <div className="text-muted-foreground pl-4">{'{'}</div>
                
                {contactInfo.map((info, index) => (
                  <div key={index} className="pl-8 group">
                    <div className="flex items-center space-x-3 py-2">
                      <info.icon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-cyber-green">"{info.title.toLowerCase()}":</div>
                        <a 
                          href={info.link}
                          className="text-foreground hover:text-primary transition-colors duration-300 hover:underline"
                        >
                          "{info.value}"
                        </a>
                      </div>
                    </div>
                    {index < contactInfo.length - 1 && <div className="text-muted-foreground">,</div>}
                  </div>
                ))}
                
                <div className="text-muted-foreground pl-4">{'}'}</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-card rounded-2xl border border-primary/20 p-8 shadow-card">
              <h3 className="font-mono text-lg text-primary mb-6">
                {'<social-links>'}
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 rounded-xl bg-muted/20 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow ${social.color}`}
                    title={social.title}
                  >
                    <social.icon className="w-6 h-6 text-muted-foreground group-hover:animate-float" />
                  </a>
                ))}
              </div>
              
              <div className="mt-6 text-primary font-mono">
                {'</social-links>'}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-card rounded-2xl border border-primary/20 p-6 shadow-card">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-cyber-green animate-pulse"></div>
                <div>
                  <div className="font-mono text-sm text-cyber-green">Status: Available</div>
                  <div className="text-xs text-muted-foreground">
                    Open to new opportunities and collaborations
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-card rounded-2xl border border-primary/20 p-8 shadow-card">
              <div className="flex items-center space-x-2 mb-8">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-mono text-muted-foreground">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="pl-10 bg-muted/20 border-primary/20 focus:border-primary/50 rounded-xl"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-mono text-muted-foreground">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="pl-10 bg-muted/20 border-primary/20 focus:border-primary/50 rounded-xl"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-mono text-muted-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-muted/20 border-primary/20 focus:border-primary/50 rounded-xl"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-mono text-muted-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-muted/20 border-primary/20 focus:border-primary/50 rounded-xl resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-mono shadow-cyber transition-all duration-300 hover:shadow-glow disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;