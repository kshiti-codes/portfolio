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
  const scrollPositionRef = useRef(0);

  const certificates: Certificate[] = [
  {
    id: 1,
    title: "UX Design Process: Empathize, Define, and Ideate",
    issuer: "Google",
    date: "2020-11",
    image: "./images/certificates/ux_design_process.png",
    credentialUrl: "your-credential-url",
    skills: ["User Research", "Empathy Mapping", "Problem Definition", "Ideation", "User-Centered Design"],
    description: "Beginning phases of UX design including user research, defining problems, and generating creative solutions."
  },
  {
    id: 2,
    title: "Build Wireframes and Low-Fidelity Prototypes",
    issuer: "Google",
    date: "2020-12",
    image: "./images/certificates/build_wireframe.png",
    credentialUrl: "your-credential-url",
    skills: ["Wireframing", "Prototyping", "Information Architecture", "User Flows", "Design Tools"],
    description: "Creating wireframes and low-fidelity prototypes to test and iterate on design concepts."
  },
  {
    id: 3,
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    date: "2022-11",
    image: "./images/certificates/foundation_of_ux.png",
    credentialUrl: "your-credential-url",
    skills: ["UX Principles", "Design Thinking", "Accessibility", "User Research", "Usability"],
    description: "Core principles and practices of user experience design including design thinking and accessibility."
  },
  {
    id: 4,
    title: "Frontend Developer (React) Certification",
    issuer: "Hackerrank", 
    date: "2024-07",
    image: "./images/certificates/frontend_developer_react_certificate.png", 
    credentialUrl: "your-credential-url",
    skills: ["React", "JavaScript", "TypeScript", "Component Architecture", "State Management", "Hooks"],
    description: "Comprehensive certification demonstrating proficiency in building modern web applications using React and its ecosystem."
  },
  {
    id: 5,
    title: "What Is Generative AI?",
    issuer: "Linkedin Learning",
    date: "2023-08",
    image: "./images/certificates/GenAI-1.png",
    credentialUrl: "your-credential-url",
    skills: ["Generative AI", "LLMs", "AI Fundamentals", "Machine Learning"],
    description: "Introduction to generative AI technologies, large language models, and their applications."
  },
  {
    id: 6,
    title: "Introduction to Prompt Engineering for Generative AI",
    issuer: "Linkedin Learning",
    date: "2023-08",
    image: "./images/certificates/GenAI-2.png",
    credentialUrl: "your-credential-url",
    skills: ["Prompt Engineering", "LLM Optimization", "AI Integration", "Prompt Design"],
    description: "Techniques for crafting effective prompts to optimize generative AI model outputs."
  },
  {
    id: 7,
    title: "Get Ready for Generative AI",
    issuer: "Linkedin Learning",
    date: "2023-08",
    image: "./images/certificates/GenAI-3.png",
    credentialUrl: "your-credential-url",
    skills: ["AI Strategy", "AI Ethics", "AI Tools", "Workflow Integration"],
    description: "Preparing for the integration of generative AI tools in professional workflows and understanding their implications."
  },
  {
    id: 8,
    title: "What is Data Science?",
    issuer: "IBM",
    date: "2019-10",
    image: "./images/certificates/what_is_ds.png",
    credentialUrl: "your-credential-url",
    skills: ["Data Science Fundamentals", "Analytics", "Problem Solving"],
    description: "Introduction to data science concepts, methodology, and real-world applications."
  },
  {
    id: 9,
    title: "Data Analysis with Python",
    issuer: "IBM",
    date: "2020-01",
    image: "./images/certificates/data_analysis.png",
    credentialUrl: "your-credential-url",
    skills: ["Python", "Pandas", "NumPy", "Data Analysis", "Data Manipulation"],
    description: "Practical skills in analyzing and manipulating data using Python libraries including Pandas and NumPy."
  },
  {
    id: 10,
    title: "Data Science Methodology",
    issuer: "IBM",
    date: "2019-11",
    image: "./images/certificates/ds_methodology.png",
    credentialUrl: "your-credential-url",
    skills: ["Problem Formulation", "Data Collection", "Model Development", "Evaluation"],
    description: "Understanding of structured approach to solving data science problems from problem definition to deployment."
  },
  {
    id: 11,
    title: "Python for Data Science and AI",
    issuer: "IBM",
    date: "2019-11",
    image: "./images/certificates/python_ds_ai.png",
    credentialUrl: "your-credential-url",
    skills: ["Python", "Data Structures", "APIs", "Web Scraping", "Machine Learning Basics"],
    description: "Foundation in Python programming for data science and artificial intelligence applications."
  },
  {
    id: 12,
    title: "Data Visualization with Python",
    issuer: "IBM",
    date: "2020-01",
    image: "./images/certificates/data_viz_python.png",
    credentialUrl: "your-credential-url",
    skills: ["Matplotlib", "Seaborn", "Plotly", "Data Storytelling", "Visualization Design"],
    description: "Creating impactful data visualizations using Python libraries to communicate insights effectively."
  },
  {
    id: 13,
    title: "Databases and SQL for Data Science",
    issuer: "IBM",
    date: "2020-01",
    image: "./images/certificates/db_and_sql_for_ds.png",
    credentialUrl: "your-credential-url",
    skills: ["SQL", "Database Design", "Queries", "Data Retrieval", "RDBMS"],
    description: "Proficiency in SQL and relational database concepts for data science applications."
  },
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
        scrollPositionRef.current += scrollSpeed;
        
        // Get the width of one set of certificates
        const singleSetWidth = scrollContainer.scrollWidth / 3;
        
        // Reset position when we've scrolled through one complete set
        if (scrollPosition >= singleSetWidth) {
          scrollPositionRef.current = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = scrollPositionRef.current;
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
                      className="object-cover"
                      style={{ width: "400px", height: "300px" }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="180"%3E%3Crect fill="%23e5e7eb" width="320" height="180"/%3E%3Ctext fill="%236b7280" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ECertificate%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-2 mb-3">
                      <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <h4 className="line-clamp-2 flex-1">{cert.title}</h4>
                    </div>
                    <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
                    <div className="flex flex-wrap gap-2 min-h-[2rem]">
                      {cert.skills.slice(0, 2).map(skill => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="bg-secondary/20 text-primary text-xs whitespace-nowrap max-w-full truncate"
                        >
                          {skill}
                        </Badge>
                      ))}
                      <Badge 
                        variant="secondary" 
                        className="bg-secondary/20 text-primary text-xs whitespace-nowrap max-w-full truncate"
                      >
                        + {cert.skills.length - 2} more
                      </Badge>
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-5 mx-2 mt-10 mb-10"
              onClick={() => setSelectedCertificate(null)}
              style={{ marginTop: '2rem'}}
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
                <div className="p-6 space-y-5">
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
                  <div className="">
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
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};