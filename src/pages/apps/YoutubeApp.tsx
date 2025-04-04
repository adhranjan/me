import React from "react";
import { YOUTUBE_VIDEOS } from "../../lib/constants";

export const YoutubeApp: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {YOUTUBE_VIDEOS.map((v, index)=>{
            return         (
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-red-500/50 transition-shadow">
              <iframe  title={v}
                className="w-full aspect-video"
                src= {v}
              ></iframe>
            </div>
            )
          })    
          } 
        </div>
      </div>
    </div>
  );
};

export default YoutubeApp;