import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Mouse Follower Glow */}
      <div
        className="absolute w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      {/* Animated Code Brackets */}
      <div className="absolute top-1/4 left-1/4 text-cyber-green/30 font-mono text-6xl animate-pulse">
        {'{'}
      </div>
      <div className="absolute bottom-1/4 right-1/4 text-cyber-green/30 font-mono text-6xl animate-pulse" style={{ animationDelay: '1s' }}>
        {'}'}
      </div>
      
      {/* Floating Binary */}
      <div className="absolute top-1/3 right-1/3 text-cyber-blue/20 font-mono text-sm animate-float space-y-1">
        <div>1010101</div>
        <div>0101010</div>
        <div>1100110</div>
      </div>
      
      {/* Function Declaration */}
      <div className="absolute bottom-1/3 left-1/5 text-cyber-purple/25 font-mono text-xs animate-float" style={{ animationDelay: '3s' }}>
        <div>function() {'{'}</div>
        <div className="ml-4">return success;</div>
        <div>{'}'}</div>
      </div>
      
      {/* Animated Dots */}
      <div className="absolute top-1/2 right-10">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-cyber-pink rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-cyber-yellow rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
      
      {/* Git Commands */}
      <div className="absolute top-2/3 left-10 text-cyber-orange/30 font-mono text-xs animate-float" style={{ animationDelay: '5s' }}>
        <div>$ git add .</div>
        <div>$ git commit -m "✨"</div>
        <div>$ git push origin main</div>
      </div>
      
      {/* Terminal Prompt */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cyber-green/20 font-mono text-sm animate-pulse">
        vaibhav@localhost:~$ _
      </div>
    </div>
  );
};

export default FloatingElements;