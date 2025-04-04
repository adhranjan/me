import React from "react";
import { motion } from "framer-motion";
import { APPS } from "@/lib/constants";
import * as LucideIcons from "lucide-react";

interface AppScreenProps {
  children: React.ReactNode;
  appId: string;
}

export const AppScreen: React.FC<AppScreenProps> = ({ children, appId }) => {
  // Find the app data from constants
  const app = APPS.find(a => a.id === appId) || {
    id: appId,
    name: "Unknown App",
    icon: "Box",
    color: "#777777",
    description: ""
  };
  
  // Dynamically get the icon from Lucide
  const IconComponent = (LucideIcons as any)[app.icon] || LucideIcons.Box;
  
  return (
    <motion.div
      className="h-full flex flex-col bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* App Header */}
      <div 
        className="flex items-center px-4 py-3 text-white"
        style={{ backgroundColor: app.color }}
      >
        <div className="flex items-center">
          <IconComponent className="mr-2 h-5 w-5" />
          <h1 className="text-lg font-medium">{app.name}</h1>
        </div>
      </div>
      
      {/* App content */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </motion.div>
  );
};