import { motion } from "framer-motion";

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-400 hover:text-white transition-colors"
    >
      {label}
    </a>
  </li>
);

const FooterSection = ({ title, links }: { title: string; links: Array<{href: string, label: string}> }) => (
  <div>
    <h4 className="font-montserrat font-semibold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <FooterLink key={index} href={link.href} label={link.label} />
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" }
  ];
  
  const connectLinks = [
    { href: "https://instagram.com", label: "Instagram" },
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://twitter.com", label: "Twitter" },
    { href: "https://pinterest.com", label: "Pinterest" }
  ];
  
  const moreLinks = [
    { href: "#", label: "Travel Tips" },
    { href: "#", label: "Photography" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Use" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              <span className="text-white">Alex</span>
              <span className="text-primary">Parker</span>
            </h3>
            <p className="max-w-xs text-gray-400">
              Sharing my adventures and photography with the world, one destination at a time.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FooterSection title="Quick Links" links={quickLinks} />
            <FooterSection title="Connect" links={connectLinks} />
            <FooterSection title="More" links={moreLinks} />
          </motion.div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Alex Parker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
