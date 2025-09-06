import { useEffect, useRef } from 'react';

const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Enhanced code rain effect with multiple colors
    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}[]()<>=+-*/$';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);
    const colors = ['#00ff88', '#0088ff', '#ff0088', '#8800ff', '#00ffff'];

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(8, 12, 16, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const opacity = Math.random() * 0.9 + 0.1;
        const colorIndex = Math.floor(Math.random() * colors.length);
        
        // Add slight glow effect
        ctx.shadowColor = colors[colorIndex];
        ctx.shadowBlur = 10;
        ctx.fillStyle = `${colors[colorIndex]}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      
      // Reset shadow
      ctx.shadowBlur = 0;
    };

    const interval = setInterval(draw, 80);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <>
      {/* Enhanced Matrix Code Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40"
        style={{ background: 'transparent' }}
      />
      
      {/* Floating Geometric Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        {/* Enhanced Floating Cubes with different colors */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`cube-${i}`}
            className={`absolute w-4 h-4 border-2 rotate-45 animate-float opacity-70 ${
              i % 4 === 0 ? 'border-cyber-blue' :
              i % 4 === 1 ? 'border-cyber-green' :
              i % 4 === 2 ? 'border-cyber-purple' :
              'border-cyber-pink'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              boxShadow: i % 4 === 0 ? 'var(--shadow-glow)' : 
                        i % 4 === 1 ? 'var(--shadow-neon)' :
                        i % 4 === 2 ? 'var(--shadow-electric)' : 
                        '0 0 15px hsl(var(--cyber-pink) / 0.4)'
            }}
          />
        ))}
        
        {/* Floating Hexagons */}        
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`hex-${i}`}
            className="absolute opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="animate-float"
              style={{ animationDuration: `${8 + Math.random() * 4}s` }}
            >
              <polygon
                points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"
                fill="none"
                stroke={i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#ff00ff' : '#ffff00'}
                strokeWidth="1"
                opacity="0.8"
              />
            </svg>
          </div>
        ))}
        
        {/* Enhanced Circuit Patterns */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`circuit-${i}`}
            className="absolute w-20 h-20 opacity-25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.8}s`,
            }}
          >
            <svg
              viewBox="0 0 80 80"
              className="w-full h-full animate-float"
              style={{ animationDuration: `${10 + Math.random() * 6}s` }}
            >
              <path
                d="M10 10h60v10H10zm0 20h60v10H10zm0 20h60v10H10zm0 20h60v10H10z"
                fill="none"
                stroke={i % 4 === 0 ? '#00ff88' : i % 4 === 1 ? '#0088ff' : i % 4 === 2 ? '#ff0088' : '#8800ff'}
                strokeWidth="1"
                opacity="0.6"
              />
              <circle cx="20" cy="15" r="2" fill={i % 4 === 0 ? '#00ff88' : '#0088ff'} />
              <circle cx="60" cy="35" r="2" fill={i % 4 === 1 ? '#ff0088' : '#8800ff'} />
              <circle cx="40" cy="55" r="2" fill={i % 4 === 2 ? '#00ffff' : '#ff00ff'} />
            </svg>
          </div>
        ))}
        
        {/* Animated Glitch Lines with multiple colors */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`line-${i}`}
            className={`absolute h-px opacity-60 animate-pulse ${
              i % 5 === 0 ? 'bg-gradient-to-r from-transparent via-cyber-blue to-transparent' :
              i % 5 === 1 ? 'bg-gradient-to-r from-transparent via-cyber-green to-transparent' :
              i % 5 === 2 ? 'bg-gradient-to-r from-transparent via-cyber-purple to-transparent' :
              i % 5 === 3 ? 'bg-gradient-to-r from-transparent via-cyber-pink to-transparent' :
              'bg-gradient-to-r from-transparent via-cyber-cyan to-transparent'
            }`}
            style={{
              width: `${20 + Math.random() * 40}%`,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
        
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute w-1 h-1 rounded-full animate-float ${
              i % 5 === 0 ? 'bg-cyber-blue' :
              i % 5 === 1 ? 'bg-cyber-green' :
              i % 5 === 2 ? 'bg-cyber-purple' :
              i % 5 === 3 ? 'bg-cyber-pink' :
              'bg-cyber-cyan'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              boxShadow: `0 0 10px currentColor`,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced Ambient Glow Effects with Mesh Gradient */}
      <div className="fixed inset-0 pointer-events-none z-5 bg-gradient-mesh opacity-80" />
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyber-green/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyber-pink/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-cyber-cyan/7 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '8s' }} />
      </div>
    </>
  );
};

export default BackgroundEffects;