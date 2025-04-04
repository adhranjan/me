import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useLocation } from "wouter";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  const navigateTo = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    // Using setTimeout to ensure the menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm py-2" : "bg-white/95 py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            navigateTo("home");
          }}
          className="text-2xl font-montserrat font-bold"
        >
          <span className="text-primary">Alex</span>
          <span className="text-gray-900">Parker</span>
        </a>
        
        {/* Mobile navigation toggle */}
        <div className="md:hidden">
          <button 
            className="focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {["home", "about", "gallery", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                navigateTo(item);
              }}
              className="font-montserrat font-medium capitalize hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile navigation menu */}
      <div className={`md:hidden bg-white w-full py-4 px-4 shadow-md transition-all duration-300 ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-4">
          {["home", "about", "gallery", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                navigateTo(item);
              }}
              className="font-montserrat font-medium capitalize hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
