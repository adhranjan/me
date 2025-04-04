import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { AppGrid } from "../components/device/AppGrid";
import { USER_INFO } from "../lib/constants";
import { Wallpaper } from "../components/device/Wallpaper";


const HomeScreen: React.FC = () => {
  const [greeting, setGreeting] = useState<string>("Hello");
  const [_, setLocation] = useLocation();
  
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good morning");
    } else if (hour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);
  
  // Test navigation function
  return (
    <div className="relative h-full w-full flex flex-col">
      <Wallpaper />
      
      {/* Clock and greeting */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="p-6 text-center"
      >
        <div className="text-5xl font-light text-white mb-1">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="text-xl text-white/80">
          {greeting}, {USER_INFO.name}
        </div>
      </motion.div>
      
      {/* App grid */}
      <div className="flex-grow flex flex-col justify-center">
        <AppGrid />
      </div>
    </div>
  );
};

export default HomeScreen;