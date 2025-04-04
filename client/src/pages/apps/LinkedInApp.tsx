import React from "react";
import { AppScreen } from "@/components/device/AppScreen";
import { USER_INFO } from "@/lib/constants";
import { ArrowLeft, Linkedin, ExternalLink } from "lucide-react";
import { useLocation } from "wouter";

const LinkedInApp: React.FC = () => {
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
        <div className="flex-grow flex items-center justify-center p-6 bg-gray-100">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-600 mb-6">
              Due to security restrictions, LinkedIn doesn't allow embedding their site in iframes.
            </p>
            
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#084e96] text-white px-6 py-3 rounded-md font-medium mx-auto"
            >
              <span>Visit LinkedIn Profile</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </AppScreen>
  );
};

export default LinkedInApp;