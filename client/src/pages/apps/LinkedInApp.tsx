import React, { useState } from "react";
import { AppScreen } from "@/components/device/AppScreen";
import { USER_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowLeft, Linkedin } from "lucide-react";
import { useLocation } from "wouter";

const LinkedInApp: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [_, setLocation] = useLocation();

  const goBack = () => {
    setLocation("/");
  };

  const linkedinUrl = USER_INFO.social.linkedin;

  return (
    <AppScreen appId="linkedin">
      <div className="flex flex-col h-full bg-white">
        {/* Header */}
        <div className="flex items-center gap-2 p-4 bg-[#0A66C2] text-white">
          <button 
            onClick={goBack}
            className="rounded-full p-1 hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <Linkedin size={24} />
            <h1 className="text-xl font-semibold">LinkedIn</h1>
          </div>
        </div>

        {/* LinkedIn Content */}
        <div className="flex-grow relative overflow-hidden">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10">
              <div className="w-12 h-12 rounded-full border-4 border-[#0A66C2] border-t-transparent animate-spin mb-4"></div>
              <p className="text-gray-600">Loading profile...</p>
            </div>
          )}
          
          <iframe 
            src={linkedinUrl}
            className="w-full h-full border-none"
            onLoad={() => setLoading(false)}
            title="LinkedIn Profile"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </AppScreen>
  );
};

export default LinkedInApp;