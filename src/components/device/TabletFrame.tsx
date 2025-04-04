import React from "react";
import { motion } from "framer-motion";
import { StatusBar } from "./StatusBar";
import { NavigationBar } from "./NavigationBar";

interface TabletFrameProps {
  children: React.ReactNode;
}

export const TabletFrame: React.FC<TabletFrameProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-900 p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-4xl w-full aspect-[4/3] bg-black rounded-[40px] shadow-2xl overflow-hidden border-[12px] border-gray-800"
      >
        {/* Camera and sensors */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex items-center z-10">
          <div className="w-2 h-2 rounded-full bg-gray-700 mr-2"></div>
          <div className="w-4 h-4 rounded-full bg-gray-700"></div>
        </div>
        
        {/* Status Bar */}
        <StatusBar />
        
        {/* Screen Content */}
        <div className="bg-gradient-to-b from-primary/10 to-primary/5 h-full w-full overflow-y-auto pb-16">
          {children}
        </div>
        
        {/* Navigation Bar */}
        <NavigationBar />
      </motion.div>
    </div>
  );
};