import React from "react";

export const Wallpaper: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Red Dead Redemption 2 Themed Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-amber-900 via-red-800 to-gray-900"
        style={{ 
          mixBlendMode: "normal",
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(180, 83, 9, 0.8) 0%, rgba(0, 0, 0, 0) 35%),
            radial-gradient(circle at 80% 30%, rgba(153, 27, 27, 0.7) 0%, rgba(0, 0, 0, 0) 40%),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))
          `,
        }}
      />
      
      {/* Western landscape silhouette */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] opacity-80">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="rdr2grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 0, 0, 0)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0.9)" />
            </linearGradient>
          </defs>
          {/* Mountain ranges and western scenery */}
          <polygon points="0,40 0,25 5,24 10,26 15,22 20,25 25,20 30,23 35,19 40,22 45,18 50,21 55,17 60,19 65,16 70,20 75,15 80,18 85,14 90,19 95,15 100,17 100,40" fill="url(#rdr2grad)" />
          <polygon points="0,40 0,30 8,29 15,32 25,28 30,30 40,27 50,31 60,29 70,33 80,30 90,32 100,28 100,40" fill="rgba(0,0,0,0.8)" />
        </svg>
      </div>
      
      {/* Dust particles for western atmosphere */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => {
          const size = Math.random() * 2 + 0.5;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const opacity = Math.random() * 0.3 + 0.1;
          const duration = Math.random() * 20 + 20;
          const delay = Math.random() * 10;
          
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                opacity,
                backgroundColor: `rgba(${180 + Math.random() * 40}, ${140 + Math.random() * 30}, ${90 + Math.random() * 30}, 0.5)`,
                animation: `float ${duration}s linear infinite`,
                animationDelay: `${delay}s`
              }}
            />
          );
        })}
      </div>

      {/* RDR2 sun glow effect */}
      <div 
        className="absolute w-[150px] h-[150px] rounded-full opacity-20" 
        style={{
          background: "radial-gradient(circle, rgba(255,140,50,1) 0%, rgba(255,140,50,0) 70%)",
          top: "10%",
          right: "20%",
          filter: "blur(15px)"
        }}
      />
    </div>
  );
};