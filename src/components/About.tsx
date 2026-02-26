import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Award, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { AskMeAbout } from './AskMeAbout';

export const About: React.FC = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'Education',
      items: [
        'B.Tech in Information Technology, Charotar University of Science and Technology (2016-2020)',
      ]
    },
    {
      icon: BookOpen,
      title: 'Experience',
      items: [
        '6+ years of experience in building scalable web applications',
      ]
    },
    {
      icon: Award,
      title: 'Projects',
      items: [
        '20+ completed projects for diverse clients',
      ]
    }
  ];

  // const links = [
  //   { label: 'Download CV', icon: ExternalLink, href: './pdf/kshitipatel.pdf' },
  // ];

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-primary mb-4">About</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="p-8 backdrop-blur-sm bg-card/80">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I'm a software engineer based in Hamburg, Germany, who's obsessed with building web experiences that don't just work, but feel effortless.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            Over the past 6 years, I've evolved from junior developer to someone who architects enterprise-scale solutions serving 176+ organizations globally. I've improved application performance by 60%, pushed test coverage to 90%+, and optimized Core Web Vitals until they're consistently green. But here's what really drives me: the challenge of making complexity feel effortless. Whether it's Redux state management for real-time inventory systems or implementing server-side rendering for e-commerce platforms, I thrive on technical challenges that directly impact user experience.  
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I work best with autonomy and ownership – give me a problem, and I'll take it from conception to deployment. Currently, I'm an independent consultant building high-performance solutions for e-commerce clients, staying obsessed with accessibility standards, modern architecture patterns, and the endless pursuit of faster, better, cleaner code. Always open to interesting projects and conversations about frontend engineering.
            </p>
          </Card>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-shadow bg-card/80 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <cred.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-primary">{cred.title}</h3>
                </div>
                <ul className="space-y-2">
                  {cred.items.map((item, i) => (
                    <li key={i} className="text-foreground/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-2 px-6 py-3 bg-secondary/20 hover:bg-secondary/30 text-primary rounded-lg transition-all transform hover:scale-105"
            >
              {link.label}
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div> */}

        {/* Ask Me About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <AskMeAbout />
        </motion.div>

        {/* Seeking Faculty Positions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-6 py-3 bg-accent/10 border-2 border-accent/30 rounded-lg">
            <p className="text-foreground/90">
              <span className="text-accent">Currently seeking Frontend Developer positions</span> in 
              dynamic teams where I can contribute my expertise in React and TypeScript to build exceptional web applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
