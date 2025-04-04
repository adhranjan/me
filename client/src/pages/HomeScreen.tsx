import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { USER_INFO, APPS } from "@/lib/constants";
import { AppGrid } from "@/components/device/AppGrid";
import { Wallpaper } from "@/components/device/Wallpaper";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  const navigateToAbout = () => {
    console.log("Navigating to about app");
    setLocation("/app/about");
  };
  
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
        
        {/* Test button */}
        <div className="mt-4 relative z-50">
          <Button 
            onClick={navigateToAbout}
            className="bg-white text-primary hover:bg-white/90 font-bold"
            style={{ padding: '12px 24px' }}
          >
            Open About App (Test)
          </Button>
        </div>
      </motion.div>
      
      {/* App navigation menu */}
      <div className="relative z-50 px-4 mb-4">
        <div className="bg-black/50 backdrop-blur-md p-3 rounded-xl">
          <h3 className="text-white font-medium mb-2 text-center">Quick Navigation</h3>
          <div className="grid grid-cols-3 gap-3">
            {APPS.slice(0, 6).map((app) => (
              <Button
                key={app.id}
                onClick={() => setLocation(`/app/${app.id}`)}
                className="py-3"
                style={{ backgroundColor: app.color }}
              >
                {app.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
      
      {/* App grid */}
      <div className="flex-grow flex flex-col justify-center">
        <AppGrid />
      </div>
    </div>
  );
};

export default HomeScreen;