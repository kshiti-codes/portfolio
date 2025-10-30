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
        'PhD in Neuroscience, MIT',
        'BSc in Computer Science & Biology, Stanford University'
      ]
    },
    {
      icon: BookOpen,
      title: 'Current Position',
      items: [
        'Postdoctoral Research Fellow',
        'Stanford University, Computational Neuroscience Lab'
      ]
    },
    {
      icon: Award,
      title: 'Recognition',
      items: [
        '12 peer-reviewed publications (last 3 years)',
        'NSF Graduate Research Fellowship'
      ]
    }
  ];

  const links = [
    { label: 'Download CV', icon: ExternalLink, href: '#' },
    { label: 'ORCID Profile', icon: ExternalLink, href: '#' },
    { label: 'Google Scholar', icon: ExternalLink, href: '#' }
  ];

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
              I am a computational neuroscientist passionate about understanding the fundamental principles 
              of memory formation and consolidation. My research combines mathematical modeling, machine learning, 
              and experimental data analysis to uncover how neural circuits encode, store, and retrieve information.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              During my PhD at MIT, I developed novel computational frameworks for modeling hippocampal-cortical 
              interactions during memory consolidation. Currently, as a postdoc at Stanford, I'm investigating 
              how network dynamics in prefrontal cortex support working memory and cognitive flexibility.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              With <span className="text-accent">12 peer-reviewed publications</span> in the last three years 
              and extensive experience in both computational and experimental neuroscience, I am actively seeking 
              faculty positions where I can establish an independent research program at the intersection of 
              theory and experiment.
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
        <motion.div
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
        </motion.div>

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
              <span className="text-accent">Currently seeking faculty positions</span> in 
              Neuroscience, Computational Biology, or related fields
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
