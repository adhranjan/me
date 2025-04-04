import React, { useState, useEffect } from "react";
import { Battery, Wifi, Signal } from "lucide-react";

export const StatusBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  
  // Update time every minute
  useEffect(() => {
    function getFormattedTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      // Convert to 12-hour format
      const formattedHours = hours % 12 || 12;
      const amPm = hours >= 12 ? 'PM' : 'AM';
      // Add leading zero if needed
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      
      return `${formattedHours}:${formattedMinutes} ${amPm}`;
    }
    
    // Set initial time
    setCurrentTime(getFormattedTime());
    
    // Update time every minute
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 60000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="flex items-center justify-between w-full h-7 px-4 bg-transparent text-white text-xs z-10">
      <div>{currentTime}</div>
      <div className="flex items-center gap-2">
        <Signal className="w-3.5 h-3.5" />
        <Wifi className="w-3.5 h-3.5" />
        <Battery className="w-4 h-4" />
      </div>
    </div>
  );
};