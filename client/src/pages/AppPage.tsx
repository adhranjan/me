import React from "react";
import { useParams } from "wouter";
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
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-3">
        {GALLERY_ITEMS.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-lg shadow-md">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-3">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Map app content
const MapApp: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
        <Map className="w-12 h-12 text-gray-400" />
        <p className="ml-2 text-gray-500">Map view</p>
      </div>
      <div className="space-y-3">
        {GALLERY_ITEMS.map((item) => (
          <div key={item.id} className="flex items-center p-3 border rounded-lg">
            <MapPin className="w-5 h-5 text-primary mr-3" />
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
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-lg font-semibold mb-4">Connect with me</h2>
      <div className="space-y-4">
        {Object.entries(USER_INFO.social).map(([platform, url]) => (
          <a 
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
              <Share2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-medium capitalize">{platform}</div>
              <div className="text-sm text-gray-500">@johndoe</div>
            </div>
          </a>
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
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            ></textarea>
          </div>
          <Button className="w-full">Send Message</Button>
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