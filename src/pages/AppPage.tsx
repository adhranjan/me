import React from "react";
import { useParams } from "wouter";
import { motion } from "framer-motion";
import {Mail, MapPin, Share2 } from "lucide-react";
import GitApp from "./apps/GitApp";
import { AppScreen } from "../components/device/AppScreen";
import { USER_INFO, GALLERY_ITEMS, PLACES_I_WENT } from "../lib/constants";
import { Button } from "../components/ui/button";
import YoutubeApp from "./apps/YoutubeApp";
import PdfViewer from "./apps/PdfViewer";


// About app content
const AboutApp: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center space-x-4">
        <img 
          src={USER_INFO.profileImage} 
          alt={USER_INFO.name} 
          className="w-24 h-24 rounded-full object-cover border-4 border-primary" 
        />
        <div>
          <h1 className="text-2xl font-bold">{USER_INFO.fullName}</h1>
          <p className="text-gray-500">{USER_INFO.tagline}</p>
          <p className="flex items-center mt-1 text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1" /> {USER_INFO.location}
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <p>{USER_INFO.aboutParagraph1}</p>
        <p>{USER_INFO.aboutParagraph2}</p>
        <p>{USER_INFO.aboutParagraph3}</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-3">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {USER_INFO.interests.map((interest) => (
            <span key={interest} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              {interest}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-3">Statistics</h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(USER_INFO.stats).map(([key, value]) => (
            <div key={key} className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-primary">{value}</div>
              <div className="text-gray-500 capitalize">{key}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Gallery app content
const GalleryApp: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = React.useState<number | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<string>("All");
  const [currentImageIndex, setCurrentImageIndex] = React.useState<number>(0);
  
  const categories = ["All", ...Array.from(new Set(GALLERY_ITEMS.map(item => item.category)))];
  
  const filteredItems = activeCategory === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);
  
  const handleLocationClick = (locationId: number) => {
    setSelectedLocation(locationId);
    setCurrentImageIndex(0); // Reset to first image when opening a new location
  };
  
  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedLocation) {
      const location = GALLERY_ITEMS.find(item => item.id === selectedLocation);
      if (location && currentImageIndex < location.images.length - 1) {
        setCurrentImageIndex(prevIndex => prevIndex + 1);
      }
    }
  };
  
  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedLocation && currentImageIndex > 0) {
      setCurrentImageIndex(prevIndex => prevIndex - 1);
    }
  };
  
  const selectedLocationData = selectedLocation 
    ? GALLERY_ITEMS.find(item => item.id === selectedLocation) 
    : null;
  
  const currentImage = selectedLocationData 
    ? selectedLocationData.images[currentImageIndex] 
    : null;

  return (
    <div className="p-4">
      {/* Category filters */}
      <div className="flex overflow-x-auto pb-2 mb-4 hide-scrollbar">
        <div className="flex space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
                activeCategory === category 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Location grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="overflow-hidden rounded-lg shadow-md transform transition-transform active:scale-95"
            onClick={() => handleLocationClick(item.id)}
          >
            <div className="relative">
              <img 
                src={item.images[item.thumbnailIndex].url} 
                alt={item.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
                <div className="flex items-center">
                  <p className="text-xs text-white/80 mr-2">{item.category}</p>
                  <p className="text-xs text-white/80 bg-black/30 px-1.5 py-0.5 rounded-full">{item.images.length} photos</p>
                </div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.location}</p>
              <p className="text-xs text-gray-400 mt-1 line-clamp-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Image viewer modal */}
      {selectedLocation && currentImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setSelectedLocation(null)}
        >
          <div className="relative max-w-2xl w-full p-4">
            <img 
              src={currentImage.url} 
              alt={currentImage.caption} 
              className="w-full rounded-lg shadow-xl object-contain max-h-[70vh]"
            />
            
            {/* Caption */}
            <div className="absolute bottom-8 left-8 right-8 bg-black/50 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-white font-medium mb-1">
                {selectedLocationData?.title}
              </h3>
              <p className="text-white/90 text-sm font-medium">
                {currentImage.caption}
              </p>
              <p className="text-white/70 text-xs mt-1">
                {selectedLocationData?.location} • {currentImageIndex + 1} of {selectedLocationData?.images.length}
              </p>
            </div>

            {/* Navigation buttons */}
            {selectedLocationData && selectedLocationData.images.length > 1 && (
              <>
                {currentImageIndex > 0 && (
                  <button 
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors"
                    onClick={handlePrevImage}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                )}
                
                {currentImageIndex < selectedLocationData.images.length - 1 && (
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors"
                    onClick={handleNextImage}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                )}
              </>
            )}
            
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-colors"
              onClick={() => setSelectedLocation(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {/* Image thumbnails */}
            {selectedLocationData && selectedLocationData.images.length > 1 && (
              <div className="flex justify-center mt-4 gap-2">
                {selectedLocationData.images.map((image, index) => (
                  <button
                    key={image.id}
                    className={`w-12 h-12 rounded-md overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? 'border-white scale-110' : 'border-transparent opacity-70'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                  >
                    <img 
                      src={image.url} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Map app content
const MapApp: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = React.useState<number | null>(null);
  
  // Mock coordinates for visualization purposes
  const getCoordinates = (id: number) => {
    // Generate consistent pseudo-random coordinates based on id
    const baseX = (id * 17) % 80 + 10; // 10-90% of width
    const baseY = (id * 23) % 80 + 10; // 10-90% of height
    return { x: baseX, y: baseY };
  };
  
  return (
    <div className="p-4">
      {/* Interactive map */}
      <div className="relative bg-blue-50 rounded-lg h-64 mb-4 overflow-hidden">
        {/* Map background with simple continents */}
        <div className="absolute inset-0 p-4">
          <div className="absolute top-[20%] left-[15%] w-[20%] h-[35%] bg-green-200 rounded-full opacity-70" /> {/* North America */}
          <div className="absolute top-[30%] left-[40%] w-[15%] h-[20%] bg-green-200 rounded-full opacity-70" /> {/* Europe */}
          <div className="absolute top-[35%] left-[55%] w-[25%] h-[30%] bg-green-200 rounded-full opacity-70" /> {/* Asia */}
          <div className="absolute top-[40%] left-[15%] w-[15%] h-[25%] bg-green-200 rounded-full opacity-70" /> {/* South America */}
          <div className="absolute top-[60%] left-[45%] w-[20%] h-[20%] bg-green-200 rounded-full opacity-70" /> {/* Africa */}
          <div className="absolute top-[70%] left-[75%] w-[15%] h-[15%] bg-green-200 rounded-full opacity-70" /> {/* Australia */}
        </div>
        
        {/* Location pins */}
        {PLACES_I_WENT.map((item) => {
          const coords = getCoordinates(item.id);
          return (
            <div
              key={item.id}
              style={{ 
                left: `${coords.x}%`, 
                top: `${coords.y}%` 
              }}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all ${
                selectedLocation === item.id ? "scale-125" : "scale-100"
              }`}
              onClick={() => setSelectedLocation(item.id === selectedLocation ? null : item.id)}
            >
              <div className="relative">
                <MapPin 
                  className={`w-6 h-6 text-red-500 drop-shadow-md ${
                    selectedLocation === item.id ? "animate-bounce" : ""
                  }`} 
                />
                
                {/* Show location name on hover/select */}
                {selectedLocation === item.id && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 bg-black/75 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                    {item.location}
                  </div>
                )}
                
                {/* Ping animation for selected location */}
                {selectedLocation === item.id && (
                  <div className="absolute inset-0 rounded-full animate-ping bg-red-400 opacity-75" />
                )}
              </div>
            </div>
          );
        })}
        
        {/* Map overlay text */}
        <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-sm rounded px-2 py-1 text-xs font-medium">
          Interactive Travel Map
        </div>
      </div>
      
      {/* Locations list */}
      <h3 className="font-medium mb-2 text-gray-700">Visited Locations</h3>
      <div className="space-y-2">
        {PLACES_I_WENT.map((item) => (
          <div 
            key={item.id} 
            className={`flex items-center p-3 border rounded-lg transition-colors cursor-pointer ${
              selectedLocation === item.id 
                ? "bg-primary/10 border-primary" 
                : "hover:bg-gray-50"
            }`}
            onClick={() => setSelectedLocation(item.id === selectedLocation ? null : item.id)}
          >
            <MapPin className={`w-5 h-5 mr-3 ${selectedLocation === item.id ? "text-primary" : "text-gray-400"}`} />
            <div>
              <h3 className="font-medium">{item.location}</h3>
              <p className="text-xs text-gray-500">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Social app content
const SocialApp: React.FC = () => {
  const platformIcons: { [key: string]: React.ReactNode } = {
    facebook: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" /></svg>,
    github: <svg width="64px" height="64px" viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#161614"> <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"></path> <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"></path> </g> </g></svg>,
    instagram: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" /></svg>,
    linkedin: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5.00002C6.94 5.53002 6.81 5.96002 6.56 6.30002C6.31 6.63002 5.91 6.80002 5.35 6.80002H5.33C4.78 6.80002 4.36 6.63002 4.08 6.30002C3.8 5.96002 3.66 5.53002 3.66 5.00002C3.66 4.47002 3.81 4.03002 4.1 3.69002C4.39 3.35002 4.81 3.18002 5.37 3.18002C5.93 3.18002 6.34 3.35002 6.61 3.69002C6.89 4.03002 7.03 4.47002 6.94 5.00002ZM6.94 18H3.82V8.00002H6.94V18ZM13.73 18H16.66V12.31C16.66 9.40002 15.14 7.97002 13.15 7.97002C12.94 7.96421 12.7289 7.99428 12.5305 8.05814C12.3322 8.12201 12.1511 8.21853 11.9979 8.34175C11.8448 8.46496 11.7232 8.61234 11.6405 8.77691C11.5578 8.94147 11.5156 9.11952 11.5166 9.30002V9.30002H11.48V8.00002H8.64C8.69 8.93002 8.64 18 8.64 18H11.56V12.67C11.56 12.4 11.59 12.2 11.64 12.05C11.75 11.78 11.93 11.55 12.18 11.36C12.42 11.17 12.72 11.08 13.08 11.08C14.02 11.08 14.53 11.8 14.53 12.96V18H13.73Z" /></svg>
  };
  
  const platformColors: { [key: string]: string } = {
    facebook: "#1877F2",  // Facebook blue
    github: "#333",   // github black
    instagram: "#E4405F", // Instagram pink
    linkedin: "#0A66C2"   // LinkedIn blue
  };
  
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-lg font-semibold mb-4">Connect with me</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {Object.entries(USER_INFO.social).map(([platform, url], index) => (
          <motion.a 
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            style={{ backgroundColor: platformColors[platform] || "#4285F4" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
              <div className="text-white">
                {platformIcons[platform] || <Share2 className="w-5 h-5" />}
              </div>
            </div>
            <div className="text-white font-medium text-center">
              <div className="capitalize">{platform}</div>
            </div>
          </motion.a>
        ))}
      </div>
      
      {/* <div className="space-y-4">
        <h3 className="font-medium text-gray-700">Quick Links</h3>
        {Object.entries(USER_INFO.social).map(([platform, url], index) => (
          <motion.a 
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center mr-4 text-white"
              style={{ backgroundColor: platformColors[platform] || "#4285F4" }}
            >
              {platformIcons[platform] || <Share2 className="w-5 h-5" />}
            </div>
            <div>
              <div className="font-medium capitalize">{platform}</div>
            </div>
          </motion.a>
        ))}
      </div> */}
    </div>
  );
};

// Resume app content
const ResumeApp: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
    
          <PdfViewer url="https://ranjan.fyi/Ranjan_Adhikari_Resume_Senior_Backend_Engineer.pdf">
          </PdfViewer>
    
      </div>
  );
};

// Contact app content
const ContactApp: React.FC = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = React.useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formState.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters long";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after success
      setFormState({
        name: "",
        email: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium">Email</div>
              <a href={`mailto:${USER_INFO.email}`} className="text-primary">{USER_INFO.email}</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium">Location</div>
              <div className="text-gray-600">{USER_INFO.location}</div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold mb-4">Send a Message</h2>
        
        {isSuccess && (
          <div className="mb-4 p-3 bg-green-100 border border-green-200 text-green-800 rounded-md">
            Your message has been sent successfully! I'll get back to you soon.
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formState.message}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            className="w-full relative" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="opacity-0">Send Message</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

const AppPage: React.FC = () => {
  const params = useParams();
  const appId = params.appId || '';
  
  // Render different app content based on app ID
  const renderAppContent = () => {
    switch (appId) {
      case 'about':
        return <AboutApp />;
      case 'gallery':
        return <GalleryApp />;
      case 'map':
        return <MapApp />;
      case 'social':
        return <SocialApp />;
      case 'resume':
        return <ResumeApp />;
      case 'contact':
        return <ContactApp />;
      case 'git':
        return <GitApp />;
      case 'youtube':
        return <YoutubeApp  />;  
      default:
        return <div className="p-6 text-center">App not found</div>;
    }
  };
  
  return (
    <AppScreen appId={appId}>
      {renderAppContent()}
    </AppScreen>
  );
};

export default AppPage;