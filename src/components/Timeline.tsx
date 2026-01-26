import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TimelineItem {
  id: string;
  period: string;
  title: string;
  institution: string;
  description: string;
  achievements: string[];
  themes: string[];
}

export const Timeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('freelance-frontend');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState<boolean>(false);

  const timelineData: TimelineItem[] = [
    {
      id: 'freelance-frontend',
      period: 'Nov 2024 - Present',
      title: 'Frontend Engineer',
      institution: 'Freelance',
      description: 'Developing high-quality, scalable frontend features for e-commerce Web Shops, focusing on performance optimization and modern React architecture.',
      achievements: [
        'Develop scalable frontend features for e-commerce Web Shops using React and TypeScript',
        'Optimized Core Web Vitals and frontend architecture, improving performance by 60% through code splitting',
        'Integrate REST APIs with Redux, Zustand, React Query for complex state management',
        'Manage shopping carts and real-time inventory synchronization systems'
      ],
      themes: ['React', 'TypeScript', 'JavaScript', 'Redux', 'E-commerce']
    },
    {
      id: 'tcs-moodys',
      period: 'Apr 2021 - Aug 2024',
      title: 'Senior Frontend Developer',
      institution: 'Tata Consultancy Services Ltd. | Moody\'s Analytics',
      description: 'Developed React and TypeScript interfaces for CreditLens™ credit analytics platform serving 176+ financial institutions globally with focus on data visualization and enterprise-scale testing.',
      achievements: [
        'Built React and TypeScript interfaces for credit analytics platform serving 176+ financial institutions globally',
        'Implemented Redux state management for complex financial data flows improving processing efficiency 35%, platform reliability 98%',
        'Created interactive data visualization dashboards using React + D3.js for real-time credit risk assessment across 750+ deployment environments',
        'Built Storybook documentation for 15+ reusable components ensuring design system consistency',
        'Achieved 90%+ test coverage using Jest and React Testing Library reducing post-release defects 40%',
        'Conducted code reviews and pair programming with team of 4 developers improving code quality 35%',
        'Refactored legacy React class components to modern hooks-based architecture eliminating 25% codebase complexity',
        'Implemented automated versioning with Semantic Release for component library',
        'Established CI/CD pipelines for continuous deployment',
        'Developed responsive components with WCAG compliance for enterprise accessibility standards'
      ],
      themes: ['React', 'TypeScript', 'JavaScript', 'Redux', 'Financial Tech']
    },
    {
      id: 'tcs-ibm',
      period: 'Apr 2021 - Aug 2024',
      title: 'Senior Frontend Developer',
      institution: 'Tata Consultancy Services Ltd. | IBM',
      description: 'Architected React-based engineering dashboards for Engineering Lifecycle Management (ELM) serving 15+ business units with focus on microfrontend architecture and performance optimization.',
      achievements: [
        'Architected React-based engineering dashboards with React Server Components for optimized data fetching serving 15+ business units',
        'Implemented microfrontend architecture enabling independent deployment while improving initial page load performance 45%',
        'Built 15+ reusable TypeScript components for systems engineering workflows reducing development time 25%',
        'Created Storybook documentation improving developer onboarding 50%',
        'Integrated 8 REST APIs for real-time data visualization with 35% faster loading',
        'Conducted systematic code reviews per sprint focusing on React performance optimization and clean code practices enhancing application speed 30%',
        'Participated in daily agile ceremonies, planning sessions, and cross-functional collaboration with Product Managers and Designers'
      ],
      themes: ['React', 'TypeScript', 'JavaScript', 'Lifecycle Management']
    },
    {
      id: 'tatvasoft',
      period: 'Oct 2020 - Feb 2021',
      title: 'Frontend Developer',
      institution: 'Tatvasoft Ltd.',
      description: 'Developed high-quality e-commerce features with focus on performance, testing, and accessibility. Took ownership of large-scale projects from conception to deployment.',
      achievements: [
        'Built performant e-commerce features for Desktop, Mobile Web, and Tablet',
        'Implemented state management with Redux, Zustand, React Query across product catalog and checkout',
        'Achieved 90%+ test coverage with Jest, React Testing Library, and Cypress',
        'Optimized Core Web Vitals and frontend workflows using Webpack, Vite, and CI/CD',
        'Contributed to design system and component library development',
        'Ensured WCAG compliance and accessibility (a11y) standards',
        'Demonstrated high autonomy solving complex technical problems'
      ],
      themes: ['React', 'TypeScript', 'JavaScript', 'E-commerce']
    },
    {
      id: 'bisag',
      period: 'Dec 2019 - Apr 2020',
      title: 'Frontend Developer',
      institution: 'BISAG-N',
      description: 'Gained experience in government sector development with focus on geospatial web applications.',
      achievements: [
        'Architected Earth observation dashboards using Vue.js 3, MapLibre GL JS, TypeScript for satellite data visualization and real-time geospatial analysis',
        'Developed enterprise GIS web applications with REST APIs and dynamic mapping tools processing large-scale spatial datasets for government sectors',
        'Built remote sensing platforms for agriculture, disaster management, and infrastructure monitoring supporting Digital India mission',
        'Implemented CI/CD pipelines and performance optimization for geospatial applications, collaborating with MeitY in agile environment'
      ],
      themes: ['Vue.js', 'TypeScript', 'GIS', 'Geospatial']
    },
    {
      id: 'webearl',
      period: 'May 2019 - Nov 2019',
      title: 'Frontend Developer',
      institution: 'WebEarl Technology Pvt. Ltd.',
      description: 'Focused on frontend specialization and enhanced my skills in creating beautiful, responsive user interfaces.',
      achievements: [
        'Transitioned to React.js development, building my first component-based applications',
        'Developed responsive web applications using React hooks and functional components',
        'Implemented state management and API integration for dynamic user interfaces',
        'Enhanced UX/UI implementation skills with modern CSS-in-JS approaches'
      ],
      themes: ['React', 'JavaScript']
    },
    {
      id: 'psvm',
      period: 'May 2018 - Apr 2019',
      title: 'Frontend Developer - Mandatory Internship',
      institution: 'PSVM Innova Pvt. Ltd.',
      description: 'My first professional role where I learned the fundamentals of web development and gained valuable industry experience.',
      achievements: [
        'Built foundational web development skills using HTML5, CSS3, JavaScript, and Bootstrap',
        'Developed responsive user interfaces and learned component-based architecture principles',
        'Gained experience with version control (Git) and collaborative development workflows',
        'Created interactive web applications with DOM manipulation and JavaScript ES6 features',
        'Established understanding of web performance optimization and cross-browser compatibility'
      ],
      themes: ['JavaScript']
    },
  ];

  const allThemes = Array.from(new Set(timelineData.flatMap(item => item.themes)));

  const filteredData = activeFilter === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.themes.includes(activeFilter));

  const displayedData = showAll ? filteredData : filteredData.slice(0, 4);
  const hasMore = filteredData.length > 4;

  return (
    <section id="timeline" className="py-20 relative z-10 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-primary mb-4">Professional Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From freelance projects to enterprise solutions: My experience in building scalable, high-performance web applications across diverse industries
          </p>
        </motion.div>

        {/* Theme Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeFilter === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-card hover:bg-card/80 text-foreground'
            }`}
          >
            All
          </button>
          {allThemes.map(theme => (
            <button
              key={theme}
              onClick={() => setActiveFilter(theme)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeFilter === theme
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card hover:bg-card/80 text-foreground'
              }`}
            >
              {theme}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/50" />

          <div className="space-y-12">
            {displayedData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full ring-4 ring-background z-10" />

                {/* Content */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <Card className="p-6 hover:shadow-xl transition-all bg-card/90 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-sm text-accent mb-1">{item.period}</div>
                        <h3 className="text-primary mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.institution}</p>
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-4">{item.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.themes.map(theme => (
                        <Badge key={theme} variant="secondary" className="bg-secondary/20 text-primary">
                          {theme}
                        </Badge>
                      ))}
                    </div>

                    {/* Expandable achievements */}
                    <button
                      onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                    >
                      <span>Key Achievements</span>
                      {expandedId === item.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {expandedId === item.id && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 space-y-2 pl-4"
                      >
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="text-foreground/80 list-disc">
                            {achievement}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More/Less Button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex justify-center mt-12"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              >
                <span>{showAll ? 'View Less' : `View More (${filteredData.length - 4} more)`}</span>
                {showAll ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};