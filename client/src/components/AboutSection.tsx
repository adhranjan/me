import { motion } from "framer-motion";
import { USER_INFO } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const AboutSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* About content */}
          <motion.div 
            className="md:w-2/3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6"
              variants={item}
            >
              {USER_INFO.fullName}
            </motion.h3>
            <div className="space-y-4 text-gray-700">
              <motion.p variants={item}>{USER_INFO.aboutParagraph1}</motion.p>
              <motion.p variants={item}>{USER_INFO.aboutParagraph2}</motion.p>
              <motion.p variants={item}>{USER_INFO.aboutParagraph3}</motion.p>
            </div>
            
            <motion.div 
              className="mt-8"
              variants={item}
            >
              <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
              <div className="flex flex-wrap gap-3">
                <SocialButton 
                  icon={<Facebook size={18} />} 
                  label="Facebook" 
                  href={USER_INFO.social.facebook} 
                  bgColor="bg-[#1877F2]" 
                />
                <SocialButton 
                  icon={<Twitter size={18} />} 
                  label="Twitter" 
                  href={USER_INFO.social.twitter} 
                  bgColor="bg-[#1DA1F2]" 
                />
                <SocialButton 
                  icon={<Instagram size={18} />} 
                  label="Instagram" 
                  href={USER_INFO.social.instagram} 
                  bgColor="bg-[#E4405F]" 
                />
                <SocialButton 
                  icon={<Linkedin size={18} />} 
                  label="LinkedIn" 
                  href={USER_INFO.social.linkedin} 
                  bgColor="bg-[#0A66C2]" 
                />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Stats and info */}
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <InfoItem label="Location" value={USER_INFO.location} />
                  <InfoItem label="Email" value={USER_INFO.email} />
                  
                  <div>
                    <h4 className="text-gray-500 font-medium">Interests</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">{USER_INFO.interests[0]}</span>
                      <span className="px-3 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full text-sm">{USER_INFO.interests[1]}</span>
                      <span className="px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-sm">{USER_INFO.interests[2]}</span>
                      <span className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm">{USER_INFO.interests[3]}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="text-xl font-semibold mb-4">Travel Stats</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <StatCard 
                        value={USER_INFO.stats.countries} 
                        label="Countries" 
                        bgColor="bg-primary/5" 
                        textColor="text-primary" 
                      />
                      <StatCard 
                        value={USER_INFO.stats.cities} 
                        label="Cities" 
                        bgColor="bg-[#10B981]/5" 
                        textColor="text-[#10B981]" 
                      />
                      <StatCard 
                        value={USER_INFO.stats.photos} 
                        label="Photos" 
                        bgColor="bg-[#8B5CF6]/5" 
                        textColor="text-[#8B5CF6]" 
                      />
                      <StatCard 
                        value={USER_INFO.stats.years} 
                        label="Years" 
                        bgColor="bg-amber-500/5" 
                        textColor="text-amber-500" 
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  bgColor: string;
}

const SocialButton = ({ icon, label, href, bgColor }: SocialButtonProps) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-2 px-4 py-2 ${bgColor} text-white rounded-lg hover:opacity-90 transition-all`}
  >
    {icon}
    <span>{label}</span>
  </a>
);

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem = ({ label, value }: InfoItemProps) => (
  <div>
    <h4 className="text-gray-500 font-medium">{label}</h4>
    <p className="text-dark font-medium">{value}</p>
  </div>
);

interface StatCardProps {
  value: string;
  label: string;
  bgColor: string;
  textColor: string;
}

const StatCard = ({ value, label, bgColor, textColor }: StatCardProps) => (
  <div className={`text-center p-4 ${bgColor} rounded-lg`}>
    <div className={`text-3xl font-bold ${textColor}`}>{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export default AboutSection;
