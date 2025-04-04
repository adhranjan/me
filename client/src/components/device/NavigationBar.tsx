import React from "react";
import { useLocation } from "wouter";
import { ArrowLeft, Home, Square } from "lucide-react";

export const NavigationBar: React.FC = () => {
  const [location, setLocation] = useLocation();
  
  const isHome = location === "/";
  
  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/60 backdrop-blur-md flex items-center justify-between px-6 border-t border-white/10">
      {/* Back button */}
      <button 
        onClick={() => !isHome && setLocation("/")}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-opacity ${isHome ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:bg-white/10'}`}
        disabled={isHome}
      >
        <ArrowLeft className="w-5 h-5 text-white" />
      </button>
      
      {/* Home button */}
      <button 
        onClick={() => setLocation("/")}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition ${!isHome ? 'hover:bg-white/10' : 'border-2 border-white'}`}
      >
        <Home className="w-6 h-6 text-white" />
      </button>
      
      {/* Recent apps */}
      <button 
        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10"
      >
        <Square className="w-5 h-5 text-white" />
      </button>
    </div>
  );
};