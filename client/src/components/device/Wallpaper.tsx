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
      
      {/* Arthur Morgan silhouette */}
      <div className="absolute right-[10%] bottom-[15%] h-[50%] w-[30%] opacity-90">
        <svg 
          viewBox="0 0 300 500" 
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Gradient for silhouette */}
          <defs>
            <linearGradient id="arthurGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(30, 10, 5, 0.9)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 1)" />
            </linearGradient>
          </defs>
          
          {/* Arthur Morgan silhouette */}
          <g fill="url(#arthurGradient)">
            {/* Hat */}
            <path d="M100,50 C120,40 180,40 200,50 L210,65 C215,70 220,75 225,80 L220,100 C215,105 200,110 190,100 C180,105 170,110 160,110 C150,110 140,105 130,100 C120,110 105,105 100,100 L95,80 C100,75 105,70 110,65 L100,50 Z" />
            
            {/* Face and neck */}
            <path d="M130,100 C135,105 145,110 150,110 C155,110 165,105 170,100 L175,130 C173,135 172,140 170,145 C168,150 165,160 160,165 C155,160 152,150 150,145 C148,140 147,135 145,130 L130,100 Z" />
            
            {/* Body and coat */}
            <path d="M120,145 L110,160 L100,200 L95,250 L90,300 L95,350 L100,400 L105,410 C110,420 120,430 130,440 L140,450 L150,455 L155,460 L160,450 L170,440 C180,430 190,420 195,410 L200,400 L205,350 L210,300 L205,250 L200,200 L190,160 L180,145 C170,150 160,155 150,155 C140,155 130,150 120,145 Z" />
            
            {/* Arms and gun belt */}
            <path d="M110,160 L90,180 L70,220 L65,250 L70,280 L90,300 L100,310 L105,300 L100,270 L105,250 L100,220 L110,200 L120,180 L110,160 Z" />
            <path d="M190,160 L210,180 L230,220 L235,250 L230,280 L210,300 L200,310 L195,300 L200,270 L195,250 L200,220 L190,200 L180,180 L190,160 Z" />
            <path d="M100,250 L110,260 L150,265 L190,260 L200,250 L190,240 L150,235 L110,240 L100,250 Z" />
            
            {/* Belt and Gun */}
            <path d="M185,280 L220,290 L230,285 L235,280 L230,275 L220,270 L185,275 L180,280 L185,280 Z" />
            
            {/* Legs */}
            <path d="M130,440 L125,460 L120,480 L115,500 L135,500 L140,480 L145,460 L140,450 L130,440 Z" />
            <path d="M170,440 L175,460 L180,480 L185,500 L165,500 L160,480 L155,460 L160,450 L170,440 Z" />
          </g>
        </svg>
      </div>
      
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
      
      {/* RDR2 title text shadow */}
      <div className="absolute bottom-[10%] left-[5%] opacity-25">
        <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="40" fill="#8B0000" fontFamily="serif" fontWeight="bold" fontSize="30" style={{ filter: 'drop-shadow(0px 0px 2px #000)' }}>
            RED DEAD
          </text>
          <text x="20" y="60" fill="#8B0000" fontFamily="serif" fontWeight="bold" fontSize="16" style={{ filter: 'drop-shadow(0px 0px 2px #000)' }}>
            REDEMPTION II
          </text>
        </svg>
      </div>
    </div>
  );
};