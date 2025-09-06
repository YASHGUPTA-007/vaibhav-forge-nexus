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

    // Code rain effect
    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}[]()<>=+-*/';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = 'rgba(8, 12, 16, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const opacity = Math.random() * 0.8 + 0.2;
        ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <>
      {/* Matrix Code Rain Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-30"
        style={{ background: 'transparent' }}
      />
      
      {/* Floating Geometric Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        {/* Floating Cubes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`cube-${i}`}
            className="absolute w-3 h-3 border border-primary/20 rotate-45 animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Floating Circuits */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`circuit-${i}`}
            className="absolute w-16 h-16 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          >
            <svg
              viewBox="0 0 64 64"
              className="w-full h-full animate-float"
              style={{ animationDuration: `${6 + Math.random() * 4}s` }}
            >
              <path
                d="M8 8h48v8H8zm0 16h48v8H8zm0 16h48v8H8zm0 16h48v8H8z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary/30"
              />
              <circle cx="16" cy="12" r="2" fill="currentColor" className="text-primary/50" />
              <circle cx="48" cy="28" r="2" fill="currentColor" className="text-primary/50" />
              <circle cx="32" cy="44" r="2" fill="currentColor" className="text-primary/50" />
            </svg>
          </div>
        ))}
        
        {/* Glitch Lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-60"
            style={{
              width: `${20 + Math.random() * 30}%`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Ambient Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyber-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
    </>
  );
};

export default BackgroundEffects;