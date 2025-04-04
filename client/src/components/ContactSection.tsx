import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { USER_INFO } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Have a question or just want to say hello? Fill out the form below and I'll get back to you soon.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact form */}
            <motion.div 
              className="md:w-2/3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="What is this about?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            rows={5} 
                            className="resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>
            
            {/* Contact info */}
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="shadow-lg h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6 flex-grow">
                    <ContactInfoItem 
                      icon={<Mail className="text-primary" />} 
                      title="Email" 
                      detail={
                        <a href={`mailto:${USER_INFO.email}`} className="text-primary hover:underline">
                          {USER_INFO.email}
                        </a>
                      } 
                    />
                    
                    <ContactInfoItem 
                      icon={<MapPin className="text-primary" />} 
                      title="Location" 
                      detail={<p className="text-gray-600">{USER_INFO.location}</p>} 
                    />
                    
                    <ContactInfoItem 
                      icon={<Globe className="text-primary" />} 
                      title="Social Media" 
                      detail={
                        <div className="flex space-x-3 mt-2">
                          <SocialIcon href={USER_INFO.social.facebook} icon={<Facebook />} hoverColor="hover:text-[#1877F2]" />
                          <SocialIcon href={USER_INFO.social.twitter} icon={<Twitter />} hoverColor="hover:text-[#1DA1F2]" />
                          <SocialIcon href={USER_INFO.social.instagram} icon={<Instagram />} hoverColor="hover:text-[#E4405F]" />
                          <SocialIcon href={USER_INFO.social.linkedin} icon={<Linkedin />} hoverColor="hover:text-[#0A66C2]" />
                        </div>
                      } 
                    />
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-medium text-gray-700 mb-3">Response Time</h4>
                    <p className="text-gray-600">I typically respond within 24-48 hours.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  detail: React.ReactNode;
}

const ContactInfoItem = ({ icon, title, detail }: ContactInfoItemProps) => (
  <div className="flex items-start">
    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-gray-700">{title}</h4>
      {detail}
    </div>
  </div>
);

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const SocialIcon = ({ href, icon, hoverColor }: SocialIconProps) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-gray-600 ${hoverColor} transition-all`}
  >
    {icon}
  </a>
);

export default ContactSection;
