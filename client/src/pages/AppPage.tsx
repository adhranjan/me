import React from "react";
import { useParams } from "wouter";
import { motion } from "framer-motion";
import { AppScreen } from "@/components/device/AppScreen";
import { APPS, USER_INFO, GALLERY_ITEMS } from "@/lib/constants";
import { User, Mail, MapPin, Image, FileText, Share2, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(GALLERY_ITEMS.map(item => item.category)))];
  
  const filteredItems = activeCategory === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);
  
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
      
      {/* Image grid */}
      <div className="grid grid-cols-2 gap-3">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="overflow-hidden rounded-lg shadow-md transform transition-transform active:scale-95"
            onClick={() => setSelectedImage(item.id)}
          >
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
                <p className="text-xs text-white/80">{item.category}</p>
              </div>
            </div>
            <div className="p-3">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Image viewer modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-lg w-full">
            {GALLERY_ITEMS.find(item => item.id === selectedImage) && (
              <>
                <img 
                  src={GALLERY_ITEMS.find(item => item.id === selectedImage)?.image} 
                  alt={GALLERY_ITEMS.find(item => item.id === selectedImage)?.title}
                  className="w-full rounded-lg shadow-xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm p-3 rounded-lg">
                  <h3 className="text-white font-medium">
                    {GALLERY_ITEMS.find(item => item.id === selectedImage)?.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {GALLERY_ITEMS.find(item => item.id === selectedImage)?.location} - 
                    {GALLERY_ITEMS.find(item => item.id === selectedImage)?.category}
                  </p>
                </div>
              </>
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
        {GALLERY_ITEMS.map((item) => {
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
        {GALLERY_ITEMS.map((item) => (
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
    twitter: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52833 8.31345 7.04329 7.56059C5.55824 6.80773 4.24813 5.75098 3.198 4.45893C2.82629 5.09738 2.63095 5.82315 2.632 6.56193C2.632 8.01193 3.37 9.29293 4.492 10.0429C3.82802 10.022 3.17864 9.84271 2.598 9.51993V9.57193C2.5985 10.5376 2.93236 11.4735 3.54399 12.221C4.15563 12.9684 5.00524 13.4814 5.953 13.6729C5.33669 13.84 4.69031 13.8646 4.063 13.7449C4.32986 14.5762 4.85 15.3031 5.55059 15.824C6.25118 16.345 7.09718 16.6337 7.97 16.6499C7.10252 17.3313 6.10917 17.8349 5.04689 18.1321C3.98462 18.4293 2.87392 18.5142 1.779 18.3819C3.6907 19.6114 5.91599 20.264 8.189 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.23009 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z" /></svg>,
    instagram: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" /></svg>,
    linkedin: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5.00002C6.94 5.53002 6.81 5.96002 6.56 6.30002C6.31 6.63002 5.91 6.80002 5.35 6.80002H5.33C4.78 6.80002 4.36 6.63002 4.08 6.30002C3.8 5.96002 3.66 5.53002 3.66 5.00002C3.66 4.47002 3.81 4.03002 4.1 3.69002C4.39 3.35002 4.81 3.18002 5.37 3.18002C5.93 3.18002 6.34 3.35002 6.61 3.69002C6.89 4.03002 7.03 4.47002 6.94 5.00002ZM6.94 18H3.82V8.00002H6.94V18ZM13.73 18H16.66V12.31C16.66 9.40002 15.14 7.97002 13.15 7.97002C12.94 7.96421 12.7289 7.99428 12.5305 8.05814C12.3322 8.12201 12.1511 8.21853 11.9979 8.34175C11.8448 8.46496 11.7232 8.61234 11.6405 8.77691C11.5578 8.94147 11.5156 9.11952 11.5166 9.30002V9.30002H11.48V8.00002H8.64C8.69 8.93002 8.64 18 8.64 18H11.56V12.67C11.56 12.4 11.59 12.2 11.64 12.05C11.75 11.78 11.93 11.55 12.18 11.36C12.42 11.17 12.72 11.08 13.08 11.08C14.02 11.08 14.53 11.8 14.53 12.96V18H13.73Z" /></svg>
  };
  
  const platformColors: { [key: string]: string } = {
    facebook: "#1877F2",  // Facebook blue
    twitter: "#1DA1F2",   // Twitter blue
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
      
      <div className="space-y-4">
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
              <div className="text-sm text-gray-500">@johndoe</div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

// Resume app content
const ResumeApp: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">{USER_INFO.fullName}</h1>
        <p className="text-gray-500">{USER_INFO.tagline}</p>
        <p className="flex items-center justify-center mt-1 text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" /> {USER_INFO.location}
        </p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold border-b pb-2 mb-4">Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Senior Photographer</h3>
            <p className="text-primary">Travel Magazine</p>
            <p className="text-sm text-gray-500">2018 - Present</p>
            <p className="mt-2 text-sm">Capturing stunning travel photography for print and digital publications.</p>
          </div>
          <div>
            <h3 className="font-medium">Content Creator</h3>
            <p className="text-primary">Freelance</p>
            <p className="text-sm text-gray-500">2016 - Present</p>
            <p className="mt-2 text-sm">Creating content for various brands and tourism boards.</p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold border-b pb-2 mb-4">Education</h2>
        <div>
          <h3 className="font-medium">Bachelor of Fine Arts in Photography</h3>
          <p className="text-primary">Art Institute</p>
          <p className="text-sm text-gray-500">2012 - 2016</p>
        </div>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold border-b pb-2 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["Photography", "Editing", "Content Creation", "Social Media", "Travel Planning", "Storytelling"].map((skill) => (
            <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <Button className="w-full">Download PDF</Button>
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