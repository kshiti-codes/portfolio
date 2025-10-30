import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export const AskMeAbout: React.FC = () => {
  const topics = [
    {
      title: "Memory Consolidation Models",
      description: "How computational frameworks explain the transfer of memories from hippocampus to neocortex"
    },
    {
      title: "Open Science Practices",
      description: "The importance of sharing code, data, and making research reproducible"
    },
    {
      title: "Academia-Industry Collaboration",
      description: "Bridging the gap between theoretical neuroscience and practical applications"
    },
    {
      title: "Neural Network Dynamics",
      description: "Understanding how recurrent connectivity shapes information processing"
    },
    {
      title: "Transitioning to Faculty",
      description: "Navigating the postdoc-to-professor career path and building an independent lab"
    },
    {
      title: "Computational Tools",
      description: "Python, TensorFlow, and other essential tools for computational neuroscience"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % topics.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [topics.length]);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <h4 className="text-primary">Ask Me About</h4>
        <Badge className="bg-accent/20 text-accent border-accent/30">
          Rotating Topics
        </Badge>
      </div>
      
      <div className="relative h-32 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Card className="p-6 h-full bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <h5 className="mb-2 text-primary">{topics[currentIndex].title}</h5>
              <p className="text-sm text-foreground/80">{topics[currentIndex].description}</p>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {topics.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-accent w-8' 
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
            aria-label={`Go to topic ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
