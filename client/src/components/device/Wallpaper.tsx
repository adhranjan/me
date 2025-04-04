import React from "react";

export const Wallpaper: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black to-primary/30"
        style={{ mixBlendMode: "normal" }}
      />
      
      {/* Low-poly background pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(62, 161, 219, 0.7)" />
              <stop offset="100%" stopColor="rgba(93, 52, 236, 0.7)" />
            </linearGradient>
          </defs>
          <polygon points="0,0 100,0 100,20 80,30 60,15 40,30 20,10 0,30" fill="url(#grad1)" />
          <polygon points="0,30 20,10 40,30 60,15 80,30 100,20 100,70 80,60 60,80 40,50 20,70 0,50" fill="url(#grad1)" opacity="0.8" />
          <polygon points="0,50 20,70 40,50 60,80 80,60 100,70 100,100 0,100" fill="url(#grad1)" opacity="0.6" />
        </svg>
      </div>
      
      {/* Particles/Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => {
          const size = Math.random() * 2 + 1;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const opacity = Math.random() * 0.5 + 0.3;
          
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                opacity,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};