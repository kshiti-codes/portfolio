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

export const ResearchTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('stanford');
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const timelineData: TimelineItem[] = [
    {
      id: 'stanford',
      period: '2022 - Present',
      title: 'Postdoctoral Research Fellow',
      institution: 'Stanford University',
      description: 'Investigating prefrontal cortex dynamics during working memory and cognitive control tasks using computational modeling and large-scale neural recordings.',
      achievements: [
        'Developed a novel recurrent neural network model of working memory maintenance',
        'Published 5 papers in high-impact journals (Nature Neuroscience, Neuron)',
        'Secured $150K research grant from NIH',
        'Mentored 3 graduate students and 2 undergraduate researchers'
      ],
      themes: ['working memory', 'prefrontal cortex', 'neural dynamics']
    },
    {
      id: 'mit-phd',
      period: '2017 - 2022',
      title: 'PhD in Neuroscience',
      institution: 'Massachusetts Institute of Technology',
      description: 'Dissertation: "Computational Models of Hippocampal-Cortical Interactions During Memory Consolidation". Developed theoretical frameworks combining Hopfield networks and reinforcement learning.',
      achievements: [
        'Published 7 peer-reviewed papers as first author',
        'Received Best Student Paper Award at Computational Neuroscience Conference',
        'NSF Graduate Research Fellowship recipient',
        'Developed open-source Python toolkit for memory consolidation modeling'
      ],
      themes: ['memory consolidation', 'hippocampus', 'systems consolidation']
    },
    {
      id: 'stanford-undergrad',
      period: '2013 - 2017',
      title: 'BSc Computer Science & Biology',
      institution: 'Stanford University',
      description: 'Double major with honors. Senior thesis on computational approaches to understanding synaptic plasticity mechanisms.',
      achievements: [
        'Graduated Summa Cum Laude',
        'Firestone Medal for Excellence in Undergraduate Research',
        'Published undergraduate research in Journal of Neuroscience',
        'Founded Stanford Computational Neuroscience Club'
      ],
      themes: ['synaptic plasticity', 'computational modeling']
    }
  ];

  const allThemes = Array.from(new Set(timelineData.flatMap(item => item.themes)));

  const filteredData = activeFilter === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.themes.includes(activeFilter));

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
          <h2 className="text-4xl sm:text-5xl text-primary mb-4">Research Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From foundational training to cutting-edge research in computational neuroscience
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
            {filteredData.map((item, index) => (
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
        </div>
      </div>
    </section>
  );
};
