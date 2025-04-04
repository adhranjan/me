import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { USER_INFO } from "@/lib/constants";

interface BootLoaderProps {
  onComplete: () => void;
}

const bootSequence = [
  "Initializing system...",
  "Checking hardware components...",
  "Loading kernel...",
  "Starting services...",
  "Configuring network interfaces...",
  "Scanning for applications...",
  "Preparing home screen...",
  `Welcome, ${USER_INFO.name}!`
];

export const BootLoader: React.FC<BootLoaderProps> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  
  useEffect(() => {
    // Display each line of boot sequence
    if (currentLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setText(bootSequence[currentLine]);
        setCurrentLine(currentLine + 1);
      }, 500);
      
      return () => clearTimeout(timer);
    } else if (!completed) {
      // Boot sequence complete
      const timer = setTimeout(() => {
        setCompleted(true);
        setTimeout(onComplete, 600);
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, [currentLine, completed, onComplete]);
  
  return (
    <AnimatePresence>
      {!completed ? (
        <motion.div
          className="absolute inset-0 bg-black flex flex-col items-center justify-center z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-primary max-w-xl w-full p-4">
            <div className="mb-8">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl font-bold text-center mb-2"
              >
                {USER_INFO.name} OS
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
                className="text-sm text-center text-primary/70"
              >
                v1.0.0
              </motion.div>
            </div>
            
            {/* Terminal output */}
            <motion.div 
              className="bg-black/70 border border-primary/30 rounded p-4 font-mono text-sm whitespace-pre-wrap"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                key={text}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-primary mb-1"
              >
                $ {text}
              </motion.div>
            </motion.div>
            
            {/* Loading bar */}
            <motion.div 
              className="h-1 bg-primary/20 rounded-full mt-8 overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${(currentLine / bootSequence.length) * 100}%` }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};