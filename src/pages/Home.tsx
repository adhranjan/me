import { Header } from "@radix-ui/react-accordion";
import { useEffect } from "react";
import { Footer } from "react-day-picker";
import AboutSection from "../components/AboutSection";
import BackToTop from "../components/BackToTop";
import ContactSection from "../components/ContactSection";
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";


const Home = () => {
  useEffect(() => {
    // Set page title and metadata
    document.title = "John Doe | Personal Website";
    
    // Create meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Personal website of John Doe - sharing life experiences, travel photos, and more.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Personal website of John Doe - sharing life experiences, travel photos, and more.";
      document.head.appendChild(meta);
    }
    
    // Add Poppins and Inter fonts
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Poppins:wght@500;600;700&display=swap";
    document.head.appendChild(fontLink);
    
    // Add custom styles
    const style = document.createElement("style");
    style.textContent = `
      .font-poppins {
        font-family: 'Poppins', sans-serif;
      }
      @media (min-width: 768px) {
        .masonry-grid {
          column-count: 2;
          column-gap: 1rem;
        }
        
        @media (min-width: 1024px) {
          .masonry-grid {
            column-count: 3;
          }
        }
        
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1rem;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-16 flex-grow">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
