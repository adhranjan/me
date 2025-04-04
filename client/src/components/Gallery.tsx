import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { galleryImages } from "@/data/galleryImages";

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  
  const loadMorePhotos = () => {
    setVisibleImages((prev) => Math.min(prev + 3, galleryImages.length));
  };

  const hasMorePhotos = visibleImages < galleryImages.length;

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-montserrat font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Travel Gallery
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A collection of moments from my journeys around the world. Each photo tells a story of adventure and discovery.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.slice(0, visibleImages).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="overflow-hidden">
                  <motion.img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-montserrat font-semibold text-lg">{image.location}</h3>
                  <p className="text-gray-600 text-sm mt-1">{image.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {hasMorePhotos && (
          <div className="text-center mt-10">
            <Button 
              onClick={loadMorePhotos}
              className="px-6 py-3 font-montserrat"
            >
              Load More Photos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
