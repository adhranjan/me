import { AlertTriangle } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "../components/ui/button";


export default function NotFound() {
  const [_, setLocation] = useLocation();
  
  return (
    <div className="flex flex-col h-screen w-full bg-black text-white">
      {/* Status Bar (simplified) */}
      <div className="h-8 bg-black flex items-center justify-between px-4 text-xs">
        <div>4:04 PM</div>
        <div className="flex items-center gap-1">
          <span>●</span>
          <span>●</span>
          <span>●</span>
        </div>
      </div>
      
      {/* Main Error Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2">App Error</h1>
        <p className="text-lg text-gray-400 mb-2">404: Not Found</p>
        <p className="mb-8 text-gray-500">
          The application you're trying to open doesn't exist or has crashed.
        </p>
        
        <Button 
          onClick={() => setLocation("/")}
          className="px-6 bg-blue-600 hover:bg-blue-700"
        >
          Return to Home Screen
        </Button>
      </div>
      
      {/* Navigation Bar (simplified) */}
      <div className="h-12 bg-black flex items-center justify-center border-t border-gray-800">
        <div className="w-12 h-1 bg-gray-400 rounded-full"></div>
      </div>
    </div>
  );
}
