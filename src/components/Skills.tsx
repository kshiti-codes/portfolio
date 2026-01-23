import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

interface Skill {
  name: string;
  category: string;
  proficiency: 'expert' | 'advanced' | 'intermediate';
}

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'Frontend', proficiency: 'expert' },
    { name: 'TypeScript', category: 'Frontend', proficiency: 'expert' },
    { name: 'JavaScript (ES6+)', category: 'Frontend', proficiency: 'expert' },
    { name: 'TailwindCSS', category: 'Frontend', proficiency: 'expert' },
    { name: 'Redux', category: 'Frontend', proficiency: 'expert' },
    { name: 'GraphQL', category: 'Frontend', proficiency: 'expert' },
    { name: 'RTK Query', category: 'Frontend', proficiency: 'advanced' },
    { name: 'Emotion-js', category: 'Frontend', proficiency: 'advanced' },
    { name: 'Chart.js', category: 'Frontend', proficiency: 'advanced' },
    { name: 'Recharts', category: 'Frontend', proficiency: 'advanced' },
    { name: 'D3.js', category: 'Frontend', proficiency: 'intermediate' },
    
    // Backend
    { name: 'Laravel', category: 'Backend', proficiency: 'expert' },
    { name: 'PHP', category: 'Backend', proficiency: 'expert' },
    { name: 'Node.js', category: 'Backend', proficiency: 'expert' },
    { name: 'Python', category: 'Backend', proficiency: 'advanced' },
    { name: 'REST APIs', category: 'Backend', proficiency: 'expert' },
    { name: 'CodeIgniter', category: 'Backend', proficiency: 'advanced' },
    
    // Database
    { name: 'MySQL', category: 'Database', proficiency: 'expert' },
    { name: 'Redis', category: 'Database', proficiency: 'advanced' },
    { name: 'MongoDB', category: 'Database', proficiency: 'intermediate' },
    
    // AI & Machine Learning
    { name: 'TensorFlow', category: 'AI & ML', proficiency: 'advanced' },
    { name: 'Keras', category: 'AI & ML', proficiency: 'advanced' },
    { name: 'PyTorch', category: 'AI & ML', proficiency: 'advanced' },
    { name: 'Scikit-learn', category: 'AI & ML', proficiency: 'advanced' },
    { name: 'Computer Vision', category: 'AI & ML', proficiency: 'advanced' },
    { name: 'GANs', category: 'AI & ML', proficiency: 'intermediate' },
    
    // Testing & Tools
    { name: 'Jest', category: 'Testing & Tools', proficiency: 'expert' },
    { name: 'PHPUnit', category: 'Testing & Tools', proficiency: 'expert' },
    { name: 'Git', category: 'Testing & Tools', proficiency: 'expert' },
    { name: 'Docker', category: 'Testing & Tools', proficiency: 'intermediate' },
    { name: 'Webpack', category: 'Testing & Tools', proficiency: 'advanced' },
    
    // Payment & APIs
    { name: 'PayPal API', category: 'APIs & Integration', proficiency: 'expert' },
    { name: 'Stripe', category: 'APIs & Integration', proficiency: 'advanced' },
    { name: 'RESTful APIs', category: 'APIs & Integration', proficiency: 'expert' },
    { name: 'Browser Extensions', category: 'APIs & Integration', proficiency: 'advanced' },
  ];

  const categories = Array.from(new Set(skills.map(s => s.category)));

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return 'bg-accent text-accent-foreground';
      case 'advanced':
        return 'bg-primary/20 text-primary';
      case 'intermediate':
        return 'bg-secondary/30 text-secondary-foreground';
      default:
        return 'bg-secondary/20 text-primary';
    }
  };

  const getSkillCount = (category: string) => {
    return skills.filter(s => s.category === category).length;
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-primary mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="text-accent">Comprehensive technical expertise</span> across frontend, backend, AI/ML, and modern development tools
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card hover:bg-card/80 text-foreground'
              }`}
            >
              All Skills
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card hover:bg-card/80 text-foreground'
                }`}
              >
                {category} ({getSkillCount(category)})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid by Category - Column Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.05 * categoryIndex }}
            >
              <Card className="p-6 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all h-full">
                <h3 className="text-xl text-primary mb-4 flex items-center gap-2">
                  {category}
                  <Badge variant="secondary" className="bg-secondary/20 text-primary">
                    {categorySkills.length}
                  </Badge>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                    >
                      <Badge 
                        className={`${getProficiencyColor(skill.proficiency)} px-3 py-1 text-xs font-medium cursor-default hover:scale-105 transition-transform`}
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full">
            <span className="text-sm text-muted-foreground">Proficiency:</span>
            <div className="flex items-center gap-2">
              <Badge className="bg-accent text-accent-foreground">Expert</Badge>
              <Badge className="bg-primary/20 text-primary">Advanced</Badge>
              <Badge className="bg-secondary/30 text-secondary-foreground">Intermediate</Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};