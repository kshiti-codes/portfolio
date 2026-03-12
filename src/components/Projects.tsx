import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Download, Search, ChevronDown } from 'lucide-react';
import { Input } from './ui/input';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
  content?: string;
}

export const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(3); // Show first row (3 items)

  const projects: Project[] = [
    {
      id: 0,
      title: 'Delay Action — AI Flight Delay Copilot',
      description: 'Delay Action is a real-time flight disruption tool I built with React, TypeScript, and Vite, hooked up to the Lufthansa Open API to pull live flight schedules from hubs like Frankfurt and Munich. Operations teams can pick a weather scenario (anything from a thunderstorm to freezing rain) and get an AI-generated response plan on the spot, covering cost savings, prioritized actions, and passenger care broken down by VIP, connecting, and standard travelers. The idea is simple: act before the chaos hits. Proactive handling can cut operational costs by up to 65% compared to reacting after the fact. Built and submitted at the Hamburg Hackathon: Innovate the Skies & Beyond.',
      image: './images/projects/delayaction.gif',
      category: 'AI & Machine Learning',
      technologies: ['React', 'TypeScript', 'Vite', 'Lufthansa Open API', 'Gemini API'],
      link: 'https://delay-action.vercel.app/',
      github: 'https://github.com/kshiti-codes/DelayAction',
      featured: true
    },
    {
      id: 1,
      title: 'The Master Magical Key - Digital Book',
      description: 'Architected full-scale digital book marketplace processing 1500+ transactions with 98% success rate, featuring subscription management, interactive reading interface, and comprehensive admin analytics. Managed 1000+ users, 50+ coaches, and 300+ booking sessions with integrated PayPal payments and email campaigns.',
      image: './images/projects/mmk.gif',
      category: 'E-commerce',
      technologies: ['React', 'TailwindCSS', 'MySQL', 'PayPal API', 'Laravel & PHP'],
      link: 'https://mastermagicalkey.com/',
      featured: true
    },
    {
      id: 2,
      title: 'Real-time Analytics Dashboard',
      description: 'A single-screen React dashboard built with RTK Query and Emotion-js featuring interactive charts (pie, bar, line), real-time search, and glass morphism UI design. Demonstrates advanced frontend skills including performance optimization with useMemo, conditional API queries, debounced search functionality, and responsive CSS Grid layouts for optimal user experience.',
      image: './images/projects/dashboard.gif',
      category: 'Web Application',
      technologies: ['React Hooks', 'RTK Query', ' Emotion-js', 'Recharts', 'TailwindCSS'],
      link: 'https://realtimeanalyticsdashboard.netlify.app/',
      featured: false
    },
    {
      id: 3,
      title: 'Shopping Cart Simulator',
      description: 'A React application demonstrating advanced state management with useReducer, useMemo optimization, and custom hooks. Features dynamic inventory management, real-time calculations, category filtering, and responsive design—showcasing modern React patterns and scalable component architecture for real-world applications.',
      image: './images/projects/shoppingcart.gif',
      category: 'Web Application',
      technologies: ['React state management', 'hooks', 'React patterns', 'responsive design'],
      link: 'https://shoppingcartsimulator.netlify.app/',
      featured: false
    },
    {
      id: 4,
      title: 'IBM Engineering Lifecycle Management',
      description: 'Built enterprise-scale reporting UI using React, TypeScript, and Graphite framework with 85% test coverage and 30% performance improvement on large datasets. Collaborated with cross-functional teams to deliver WCAG 2.1 AA compliant components serving thousands of engineering professionals globally.',
      image: './images/projects/ibm.gif',
      category: 'Enterprise & Business Solutions',
      technologies: ['React', 'TypeScript', 'Graphite Framework', 'Jest', 'REST APIs'],
      link: 'https://www.ibm.com/docs/en/engineering-lifecycle-management-suite/lifecycle-management/7.0.3?topic=service-jazz-reporting-components',
      featured: true
    },
    {
      id: 5,
      title: 'Moody\'s Analytics - CreditLens™ Platform',
      description: 'Developed high-performance financial platform interfaces using React, TypeScript, and GraphQL with 90% test coverage and 40% defect reduction. Implemented advanced code splitting and lazy loading techniques while mentoring junior developers and maintaining enterprise-grade code quality standards.',
      image: './images/projects/creditlense.gif',
      category: 'FinTech',
      technologies: ['React', 'GraphQL', 'JavaScript', 'TypeScript', 'Redux'],
      link: 'https://www.moodyscre.com/products/creditlens-cre/',
      featured: true
    },
    {
      id: 6,
      title: 'React Code Playground - (Built with Next.js)',
      description: 'An interactive online code editor and playground specifically designed for React developers. It allows users to write, test, and share React code snippets in real-time, providing instant feedback and rendering. Features include syntax highlighting, auto-completion, and the ability to import popular libraries. Ideal for learning, prototyping, and sharing React components and applications quickly and efficiently.',
      image: './images/projects/react-playground.gif',
      category: 'Interactive Tools',
      technologies: ['Next.js', 'React', 'TypeScript', 'Monaco Editor', 'Babel'],
      link: 'https://reactcodeplayground.netlify.app',
      github: 'https://github.com/kshiti-codes/CodePlayground',
      featured: false
    },
    {
      id: 7,
      title: 'Super Resolution using GAN',
      description: 'Engineered cutting-edge AI system combining Generative Adversarial Networks with Residual Dense Networks to enhance image resolution with superior visual quality. Achieved state-of-the-art results using advanced deep learning techniques, making it applicable to photography, medical imaging, and satellite imagery enhancement.',
      image: './images/projects/super-resolution-gan.gif',
      category: 'AI & Machine Learning',
      technologies: ['Python', 'TensorFlow/Keras', 'Generative Adversarial Networks', 'Neural Network Optimization'],
      link: '#',
      featured: false
    },
    {
      id: 8,
      title: 'Sign Language Recognition Survey',
      description: 'Developed and compared high-accuracy machine learning models (SVM: 99.79%, CNN: 99.83%) for American Sign Language recognition using 27,455+ training images. Created production-ready Jupyter notebooks with comprehensive documentation, advancing accessibility technology through cutting-edge computer vision.',
      image: './images/projects/sign-language-recognition.gif',
      category: 'AI & Machine Learning',
      technologies: ['Python', 'TensorFlow/Keras','scikit-learn', 'Computer Vision '],
      github: 'https://github.com/kshiti-codes/Sign-Language-Recognition-CNN',
      featured: false
    },
    {
      id: 9,
      title: 'Care for Each - Field Force Management Tool',
      description: 'Built enterprise-grade field force management system with real-time personnel tracking, automated reporting, and comprehensive analytics dashboard. Achieved 40% reduction in data loading time through advanced query optimization and caching strategies, managing 100+ field personnel efficiently.',
      image: './images/projects/fieldforce-professional.gif',
      category: 'Enterprise & Business Solutions',
      technologies: ['Laravel', 'MySQL', 'JavaScript', 'PHP'],
      link: 'https://github.com/kshiti-codes/CareForEach',
      featured: true
    },
    {
      id: 10,
      title: 'Spend Sage - Personal Finance App',
      description: 'Designed intuitive expense tracking application with interactive data visualizations using Chart.js, category filtering, and real-time financial insights. Built with React and Redux for seamless user experience, helping users make informed financial decisions through comprehensive budget management.',
      image: './images/projects/finance-professional.gif',
      category: 'Web Application',
      technologies: ['React', 'Chart.js', 'Redux', 'Typescript'],
      github: 'https://github.com/kshiti-codes/SpendSage',
      featured: false
    },
    {
      id: 11,
      title: 'BookLand - Second Hand Book Platform',
      description: 'Built a comprehensive e-commerce ecosystem with smart geolocation search, integrated wallet system, and AI-powered recommendations that promoted sustainability through book reuse. Delivered full-stack solution with secure payment processing, real-time notifications, and optimized MySQL queries for seamless user experience.',
      image: './images/projects/bookland.gif',
      category: 'E-commerce',
      technologies: ['Laravel & PHP', 'MySQL', 'JavaScript', 'Payment Gateway'],
      github: 'https://github.com/kshiti-codes/Book-Land',
      featured: false
    },
    {
      id: 12,
      title: 'The Last Step - University Portal',
      description: 'Developed a complete academic management system handling 1000+ students with role-based authentication, automated progress tracking, and real-time grading workflows. Created intuitive dashboards for both students and supervisors with comprehensive reporting and notification systems using CodeIgniter and Bootstrap.',
      image: './images/projects/laststep.gif',
      category: 'Web Application',
      technologies: ['CodeIgniter', 'MySQL', 'JavaScript'],
      featured: false
    }
  ];

  const allTechnologies = Array.from(new Set(projects.flatMap(p => p.technologies)));

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTech = selectedTech === 'all' || project.technologies.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredProjects.length));
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-primary mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="text-accent">Diverse projects</span> spanning e-commerce, AI/ML, enterprise solutions, and web applications
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl text-primary mb-6">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all bg-gradient-to-br from-card to-primary/5">
                <div className="aspect-video w-full overflow-hidden from-primary/10 to-secondary/10">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-accent text-accent-foreground">Featured</Badge>
                  <h4 className="mb-3 line-clamp-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/20 text-primary text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.link && (
                      <Button size="sm" variant="ghost" className="text-accent hover:text-accent/80" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.content && (
                      <Button size="sm" variant="ghost" className="text-foreground hover:text-foreground/80">
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Desktop: Button Layout */}
          <div className="hidden md:flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTech('all')}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedTech === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card hover:bg-card/80 text-foreground'
              }`}
            >
              All Technologies
            </button>
            {allTechnologies.map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedTech === tech
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card hover:bg-card/80 text-foreground'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Mobile: Dropdown */}
          <div className="md:hidden relative">
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Technologies</option>
              {allTechnologies.map(tech => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
        </motion.div>

        {/* Projects Grid - Show only visible projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all bg-card/80 backdrop-blur-sm h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">{project.category}</Badge>
                  </div>
                  <h4 className="mb-3">{project.title}</h4>
                  <p className="text-sm text-foreground/80 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="secondary" className="bg-secondary/20 text-primary text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 pt-4 border-t border-border">
                    {project.link && (
                      <Button size="sm" className="bg-accent hover:bg-accent/90 flex-1" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {project.github ? 'View' : 'Demo'}
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.content && (
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Button 
              onClick={loadMore}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
            >
              View More Projects
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};