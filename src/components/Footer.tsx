import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { USER_INFO } from "../lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1F2937] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <a className="text-2xl font-semibold text-white">
                John<span className="text-primary">Doe</span>
              </a>
            </Link>
            <p className="text-gray-400 mt-2 max-w-md">
              Sharing my adventures and experiences from around the world.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-all">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-all">About</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white transition-all">Gallery</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-all">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <SocialButton href={USER_INFO.social.facebook} icon={<Facebook size={18} />} />
                <SocialButton href={USER_INFO.social.twitter} icon={<Twitter size={18} />} />
                <SocialButton href={USER_INFO.social.instagram} icon={<Instagram size={18} />} />
                <SocialButton href={USER_INFO.social.linkedin} icon={<Linkedin size={18} />} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
}

const SocialButton = ({ href, icon }: SocialButtonProps) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-all"
  >
    {icon}
  </a>
);

export default Footer;
