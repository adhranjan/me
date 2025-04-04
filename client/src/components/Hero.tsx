import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CircleDecoration from "@/assets/svg/CircleDecoration";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-24 md:pt-32 pb-16 md:pb-24 relative bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 text-center md:text-left mt-10 md:mt-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight">
            Hello, I'm
            <span className="text-primary block mt-2">Alex Parker</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
            Welcome to my personal space where I share my journey, experiences, and passion for travel photography.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("gallery")}
              className="px-6 py-6 font-montserrat"
            >
              View Gallery
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection("contact")}
              className="px-6 py-6 font-montserrat"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" 
              alt="Alex Parker portrait" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <CircleDecoration
        className="hidden md:block absolute top-40 left-12 w-16 h-16"
        color="secondary"
        opacity={0.2}
      />
      <CircleDecoration
        className="hidden md:block absolute bottom-20 right-20 w-24 h-24"
        color="accent"
        opacity={0.1}
      />
    </section>
  );
};

export default Hero;
