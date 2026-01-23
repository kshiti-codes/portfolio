import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { X, ExternalLink, Award } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
  skills: string[];
  description: string;
}

export const Certifications: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'June 2024',
      image: './images/certificates/aws-cert.png',
      credentialUrl: '#',
      skills: ['Cloud Architecture', 'AWS', 'DevOps'],
      description: 'Demonstrated expertise in designing distributed systems on AWS, including compute, networking, storage, and database AWS technologies.'
    },
    {
      id: 2,
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: 'March 2024',
      image: './images/certificates/react-cert.png',
      credentialUrl: '#',
      skills: ['React', 'Hooks', 'Redux', 'Next.js'],
      description: 'Comprehensive course covering React fundamentals, hooks, context, Redux, Next.js, and modern best practices for building production-ready applications.'
    },
    {
      id: 3,
      title: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      date: 'January 2024',
      image: './images/certificates/scrum-cert.png',
      credentialUrl: '#',
      skills: ['Agile', 'Scrum', 'Project Management'],
      description: 'Validated knowledge of Scrum framework, Scrum Master accountabilities, and how to apply Scrum in real-world scenarios.'
    },
    {
      id: 4,
      title: 'Advanced CSS and Sass',
      issuer: 'Udemy',
      date: 'November 2023',
      image: './images/certificates/css-cert.png',
      credentialUrl: '#',
      skills: ['CSS3', 'Sass', 'Responsive Design', 'Animations'],
      description: 'Master modern CSS including flexbox, grid, animations, and advanced Sass features for building beautiful, responsive websites.'
    },
    {
      id: 5,
      title: 'Machine Learning Specialization',
      issuer: 'Coursera - Stanford',
      date: 'September 2023',
      image: './images/certificates/ml-cert.png',
      credentialUrl: '#',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Neural Networks'],
      description: 'Comprehensive specialization covering supervised learning, unsupervised learning, neural networks, and practical applications of ML algorithms.'
    },
    {
      id: 6,
      title: 'GraphQL Fundamentals',
      issuer: 'Apollo GraphQL',
      date: 'July 2023',
      image: './images/certificates/graphql-cert.png',
      credentialUrl: '#',
      skills: ['GraphQL', 'Apollo', 'APIs'],
      description: 'In-depth understanding of GraphQL concepts, schema design, queries, mutations, and integrating GraphQL with modern applications.'
    }
  ];

  // Duplicate certificates for seamless infinite scroll
  const duplicatedCertificates = [...certificates, ...certificates, ...certificates];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per interval
    
    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Get the width of one set of certificates
        const singleSetWidth = scrollContainer.scrollWidth / 3;
        
        // Reset position when we've scrolled through one complete set
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = scrollPosition;
        }
      }
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-primary mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="text-accent">Professional certifications</span> and continuous learning achievements
          </p>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-hidden pb-4"
          >
            {duplicatedCertificates.map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="flex-shrink-0 w-80"
              >
                <Card
                  onClick={() => setSelectedCertificate(cert)}
                  className="overflow-hidden hover:shadow-xl transition-all cursor-pointer bg-gradient-to-br from-card to-primary/5 h-full"
                >
                  <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="180"%3E%3Crect fill="%23e5e7eb" width="320" height="180"/%3E%3Ctext fill="%236b7280" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ECertificate%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-2 mb-3">
                      <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <h4 className="line-clamp-2 flex-1">{cert.title}</h4>
                    </div>
                    <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 3).map(skill => (
                        <Badge key={skill} variant="secondary" className="bg-secondary/20 text-primary text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="text-center mt-4">
            <p className="text-sm text-muted-foreground">
              ← Hover to pause auto-scroll →
            </p>
          </div>
        </motion.div>

        {/* Certificate Modal - Compact Size */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="bg-card rounded-lg max-w-md w-full max-h-[85vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center justify-between z-10">
                  <h3 className="text-base font-semibold text-primary">Certificate Details</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCertificate(null)}
                    className="h-8 w-8 p-0 hover:bg-secondary/20"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  {/* Certificate Image */}
                  <div className="aspect-video w-full overflow-hidden rounded-md bg-gradient-to-br from-primary/10 to-secondary/10">
                    <img
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="640" height="360"%3E%3Crect fill="%23e5e7eb" width="640" height="360"/%3E%3Ctext fill="%236b7280" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ECertificate%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">{selectedCertificate.title}</h4>
                    <p className="text-sm text-foreground/80 mb-1">{selectedCertificate.issuer}</p>
                    <p className="text-xs text-muted-foreground">{selectedCertificate.date}</p>
                  </div>

                  {/* Description */}
                  <div>
                    <h5 className="text-sm font-semibold text-primary mb-1">Description</h5>
                    <p className="text-sm text-foreground/70 leading-relaxed">{selectedCertificate.description}</p>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 className="text-sm font-semibold text-primary mb-2">Skills Covered</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCertificate.skills.map(skill => (
                        <Badge key={skill} className="bg-accent text-accent-foreground text-xs px-2 py-0.5">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* View Credential Button */}
                  {selectedCertificate.credentialUrl && (
                    <Button 
                      className="bg-accent hover:bg-accent/90 w-full" 
                      size="sm" 
                      asChild
                    >
                      <a href={selectedCertificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5 mr-2" />
                        View Credential
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};