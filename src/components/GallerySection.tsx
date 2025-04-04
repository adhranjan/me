import { useState } from "react";
import { motion } from "framer-motion";
import { GALLERY_ITEMS } from "../lib/constants";
import { Button } from "./ui/button";
import React from "react";

type Category = "All" | "Europe" | "Asia" | "Americas" | "Africa";

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [visibleItems, setVisibleItems] = useState(6);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 3, GALLERY_ITEMS.length));
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Travel Gallery</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Explore some of my favorite moments captured during my travels around the world.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            <CategoryButton 
              category="All" 
              activeCategory={activeCategory} 
              onClick={() => setActiveCategory("All")} 
            />
            <CategoryButton 
              category="Europe" 
              activeCategory={activeCategory} 
              onClick={() => setActiveCategory("Europe")} 
            />
            <CategoryButton 
              category="Asia" 
              activeCategory={activeCategory} 
              onClick={() => setActiveCategory("Asia")} 
            />
            <CategoryButton 
              category="Americas" 
              activeCategory={activeCategory} 
              onClick={() => setActiveCategory("Americas")} 
            />
            <CategoryButton 
              category="Africa" 
              activeCategory={activeCategory} 
              onClick={() => setActiveCategory("Africa")} 
            />
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredItems.slice(0, visibleItems).map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </motion.div>
        
        {visibleItems < filteredItems.length && (
          <div className="text-center mt-12">
            <Button size="lg" onClick={loadMore}>
              Load More Photos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

interface CategoryButtonProps {
  category: Category;
  activeCategory: Category;
  onClick: () => void;
}

const CategoryButton = ({ category, activeCategory, onClick }: CategoryButtonProps) => {
  const isActive = category === activeCategory;
  
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full font-medium transition-all
        ${isActive 
          ? 'bg-primary text-white' 
          : 'bg-white hover:bg-gray-100 text-gray-700'}
      `}
    >
      {category}
    </button>
  );
};

interface GalleryItemProps {
  item: {
    id: number;
    title: string;
    location: string;
    category: string;
    image: string;
  };
}

const GalleryItem = ({ item }: GalleryItemProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
    >
      <img 
        src={item.image} 
        alt={`${item.title} - ${item.location}`} 
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-200">{item.location}</p>
      </div>
    </motion.div>
  );
};

export default GallerySection;
