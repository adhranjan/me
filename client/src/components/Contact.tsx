import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RectangleEllipsis, MapPin, Camera } from "lucide-react";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaPinterest, 
  FaYoutube 
} from "react-icons/fa";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: React.ComponentType<any> }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-blue-100 text-primary p-3 rounded-full transition-all duration-300 hover:bg-primary hover:text-white"
    whileHover={{ y: -3 }}
  >
    <Icon />
  </motion.a>
);

const ContactInfo = ({ icon: Icon, title, content }: { icon: React.ComponentType<any>; title: string; content: string }) => (
  <div className="flex items-start">
    <div className="bg-blue-100 rounded-full p-3 mr-4">
      <Icon className="text-primary" />
    </div>
    <div>
      <h4 className="font-montserrat font-semibold">{title}</h4>
      <p className="text-gray-600 mt-1">{content}</p>
    </div>
  </div>
);

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-montserrat font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
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
            Have questions about my travels or interested in collaborating? Feel free to reach out!
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-montserrat font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <ContactInfo 
                icon={RectangleEllipsis} 
                title="Email" 
                content="hello@alexparker.com" 
              />
              <ContactInfo 
                icon={MapPin} 
                title="Location" 
                content="San Francisco, California" 
              />
              <ContactInfo 
                icon={Camera} 
                title="Photography Inquiries" 
                content="photos@alexparker.com" 
              />
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-montserrat font-bold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <SocialIcon href="https://instagram.com" icon={FaInstagram} />
                <SocialIcon href="https://facebook.com" icon={FaFacebookF} />
                <SocialIcon href="https://twitter.com" icon={FaTwitter} />
                <SocialIcon href="https://pinterest.com" icon={FaPinterest} />
                <SocialIcon href="https://youtube.com" icon={FaYoutube} />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-montserrat font-bold mb-6">Send Me a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
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
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Photography Inquiry" {...field} />
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
                            placeholder="Your message here..." 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full mt-2 font-montserrat"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
