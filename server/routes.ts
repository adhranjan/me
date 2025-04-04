import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

const subscribeSchema = z.object({
  email: z.string().email(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      // In a real app, we would save this data to a database
      // and/or send an email notification
      console.log("Contact form submission:", data);
      
      res.status(200).json({ success: true, message: "Message received" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Failed to process contact form" 
      });
    }
  });

  // Newsletter subscription
  app.post("/api/subscribe", async (req, res) => {
    try {
      const data = subscribeSchema.parse(req.body);
      
      // In a real app, we would save this to a newsletter database
      console.log("Newsletter subscription:", data);
      
      res.status(200).json({ success: true, message: "Subscription successful" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Failed to process subscription" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
