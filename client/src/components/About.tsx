import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <Card className="text-center p-4 bg-gray-50">
    <div className="text-3xl font-montserrat font-bold text-primary">{number}</div>
    <div className="text-sm text-gray-600 mt-1">{label}</div>
  </Card>
);

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-montserrat font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 bg-primary rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b" 
                alt="Alex on a mountain top" 
                className="relative z-10 rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-montserrat font-bold mb-4">My Journey</h3>
            <p className="text-gray-700 mb-4">
              I'm a passionate traveler and photographer based in San Francisco. With a background in design and a love for adventure, 
              I've spent the last 5 years exploring remote corners of the world, capturing moments that tell stories of different cultures 
              and landscapes.
            </p>
            <p className="text-gray-700 mb-6">
              My travels have taken me across 30 countries on 4 continents, from the bustling streets of Tokyo to the serene landscapes 
              of Patagonia. Through my photography, I aim to share the beauty and diversity of our world.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <StatCard number="30+" label="Countries" />
              <StatCard number="120+" label="Cities" />
              <StatCard number="5000+" label="Photos" />
              <StatCard number="10+" label="Years" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
