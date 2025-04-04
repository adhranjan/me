import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import * as LucideIcons from "lucide-react";
import { APPS } from "../../lib/constants";


interface AppIconProps {
  app: {
    id: string;
    name: string;
    icon: string;
    color: string;
    description: string;
  };
  index: number;
}

const AppIcon: React.FC<AppIconProps> = ({ app, index }) => {
  const [_, setLocation] = useLocation();
  
  // Dynamically get the icon from Lucide
  const IconComponent = (LucideIcons as any)[app.icon] || LucideIcons.Box;
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("App icon clicked:", app.id);
    setLocation(`/app/${app.id}`);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex flex-col items-center relative z-30"
    >
      <button 
        onClick={handleClick}
        className="flex flex-col items-center focus:outline-none w-full"
      >
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 shadow-lg hover:scale-105 transition-transform"
          style={{ backgroundColor: app.color }}
        >
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <span className="text-sm text-white font-medium text-center">{app.name}</span>
      </button>
    </motion.div>
  );
};

export const AppGrid: React.FC = () => {
  const [_, setLocation] = useLocation();
  
  // Direct navigation functions for each app
  const navigateToApp = (appId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Direct navigation to:", appId);
    setLocation(`/app/${appId}`);
  };
  
  return (
    <div className="p-8">     
      {/* Regular app grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
        {APPS.map((app, index) => (
          <AppIcon key={app.id} app={app} index={index} />
        ))}
      </div>
    </div>
  );
};