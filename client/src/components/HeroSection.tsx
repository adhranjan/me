import { motion } from "framer-motion";
import { USER_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-4">
              Hi, I'm <span className="text-primary">{USER_INFO.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {USER_INFO.tagline}
            </p>
            <p className="text-gray-700 mb-8 max-w-lg">
              {USER_INFO.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#about">About Me</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#gallery">View Gallery</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 md:mt-0 md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
                <img 
                  src={USER_INFO.profileImage} 
                  alt={`${USER_INFO.name} profile`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 md:bottom-0 md:right-20 bg-[#8B5CF6] text-white p-3 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.6 
                }}
              >
                <Camera className="h-6 w-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
