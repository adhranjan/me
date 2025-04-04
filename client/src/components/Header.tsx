import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`bg-white ${scrolled ? "shadow-md" : "shadow-sm"} fixed w-full top-0 z-50 transition-all`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-poppins font-semibold text-primary">
            John<span className="text-dark">Doe</span>
          </a>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-dark focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="#home" label="Home" />
          <NavLink href="#about" label="About" />
          <NavLink href="#gallery" label="Gallery" />
          <NavLink href="#contact" label="Contact" />
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="bg-white px-4 py-4 md:hidden"
        >
          <div className="flex flex-col space-y-4">
            <NavLink href="#home" label="Home" onClick={() => setIsMenuOpen(false)} />
            <NavLink href="#about" label="About" onClick={() => setIsMenuOpen(false)} />
            <NavLink href="#gallery" label="Gallery" onClick={() => setIsMenuOpen(false)} />
            <NavLink href="#contact" label="Contact" onClick={() => setIsMenuOpen(false)} />
          </div>
        </motion.nav>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavLink = ({ href, label, onClick }: NavLinkProps) => {
  return (
    <a 
      href={href} 
      className="text-dark hover:text-primary font-medium transition-all"
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default Header;
