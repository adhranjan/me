import React from "react";
import { AppScreen } from "@/components/device/AppScreen";
import { USER_INFO } from "@/lib/constants";
import { ArrowLeft, Facebook, ExternalLink } from "lucide-react";
import { useLocation } from "wouter";

const FacebookApp: React.FC = () => {
  const [_, setLocation] = useLocation();

  const goBack = () => {
    setLocation("/");
  };

  const facebookUrl = USER_INFO.social.facebook;

  return (
    <AppScreen appId="facebook">
      <div className="flex flex-col h-full bg-white">
        {/* Header */}
        <div className="flex items-center gap-2 p-4 bg-[#1877F2] text-white">
          <button 
            onClick={goBack}
            className="rounded-full p-1 hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2">
            <Facebook size={24} />
            <h1 className="text-xl font-semibold">Facebook</h1>
          </div>
        </div>

        {/* Facebook Content */}
        <div className="flex-grow flex items-center justify-center p-6 bg-gray-100">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-600 mb-6">
              Due to security restrictions, Facebook doesn't allow embedding their site in iframes.
            </p>
            
            <a 
              href={facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#1561c5] text-white px-6 py-3 rounded-md font-medium mx-auto"
            >
              <span>Visit Facebook Profile</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </AppScreen>
  );
};

export default FacebookApp;