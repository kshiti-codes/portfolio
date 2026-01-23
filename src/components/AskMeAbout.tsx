import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export const AskMeAbout: React.FC = () => {
  const topics = [
  {
    title: "AI-Powered Code Review Assistant",
    description: "Interactive web app using Claude API to analyze code quality, suggest improvements, and explain best practices in real-time"
  },
  {
    title: "Smart Content Generator Dashboard",
    description: "React application integrating multiple AI models for generating, editing, and optimizing written content with live previews"
  },
  {
    title: "Component Library & Design System",
    description: "Comprehensive UI component library built with React, TypeScript, and Storybook for scalable design consistency"
  },
  {
    title: "Performance Optimization Techniques",
    description: "Demonstrating code splitting, lazy loading, memoization, and other strategies to achieve sub-second load times"
  },
  {
    title: "Accessibility-First Development",
    description: "Building WCAG 2.1 AA compliant interfaces with screen reader support, keyboard navigation, and semantic HTML"
  },
  {
    title: "State Management Patterns",
    description: "Implementing complex application state using Redux, Context API, Zustand, and comparing trade-offs"
  },
  {
    title: "Responsive & Adaptive Design",
    description: "Mobile-first approaches, CSS Grid/Flexbox mastery, and progressive enhancement techniques"
  },
  {
    title: "Testing & Quality Assurance",
    description: "Unit testing with Jest, E2E testing with Playwright, and implementing CI/CD pipelines"
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
          Related Topics
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
