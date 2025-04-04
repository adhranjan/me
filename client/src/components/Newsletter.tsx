import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." })
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

const Newsletter = () => {
  const { toast } = useToast();
  
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: ""
    }
  });

  const subscribeMutation = useMutation({
    mutationFn: async (data: NewsletterFormValues) => {
      const response = await apiRequest("POST", "/api/subscribe", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You've been added to my newsletter.",
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

  const onSubmit = (data: NewsletterFormValues) => {
    subscribeMutation.mutate(data);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="text-3xl font-montserrat font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Stay Updated
        </motion.h2>
        <motion.p 
          className="max-w-xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Subscribe to my newsletter to receive updates on my latest adventures, photography tips, and travel stories.
        </motion.p>
        
        <motion.div 
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input 
                        placeholder="Your email address" 
                        className="px-4 py-3 rounded-lg text-dark outline-none focus:ring-2 focus:ring-yellow-400 h-12"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button
                type="submit"
                className="px-6 py-3 h-12 bg-yellow-500 text-white font-montserrat font-medium rounded-lg hover:bg-yellow-600 transition-colors"
                disabled={subscribeMutation.isPending}
              >
                {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
