import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Download, ExternalLink, ChevronDown, Quote, Search } from 'lucide-react';
import { Input } from './ui/input';

interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  citations: number;
  featured: boolean;
  abstract: string;
  tags: string[];
  pdfUrl: string;
}

export const Publications: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'year' | 'citations'>('year');

  const publications: Publication[] = [
    {
      id: '1',
      title: 'Recurrent Network Dynamics Enable Flexible Working Memory Representations in Prefrontal Cortex',
      authors: 'Chen, M., Johnson, R., & Smith, K.',
      journal: 'Nature Neuroscience',
      year: 2024,
      citations: 47,
      featured: true,
      abstract: 'We developed a biologically-constrained recurrent neural network model that reproduces key features of working memory maintenance in prefrontal cortex. Our model predicts that flexible coding emerges from structured synaptic connectivity patterns shaped by developmental plasticity.',
      tags: ['working memory', 'prefrontal cortex', 'RNNs', 'neural dynamics'],
      pdfUrl: '#'
    },
    {
      id: '2',
      title: 'Systems Consolidation Through Coordinated Hippocampal-Cortical Replay',
      authors: 'Chen, M., Williams, T., Anderson, P., & Lee, S.',
      journal: 'Neuron',
      year: 2024,
      citations: 63,
      featured: true,
      abstract: 'Using simultaneous recordings from hippocampus and cortex, combined with computational modeling, we show that temporally coordinated replay events drive gradual transfer of memory representations from hippocampus to neocortex.',
      tags: ['memory consolidation', 'hippocampus', 'replay', 'systems neuroscience'],
      pdfUrl: '#'
    },
    {
      id: '3',
      title: 'Attractor Dynamics and Drift in Neural Representations During Extended Working Memory',
      authors: 'Chen, M. & Martinez, J.',
      journal: 'eLife',
      year: 2023,
      citations: 39,
      featured: true,
      abstract: 'We demonstrate that working memory representations in prefrontal cortex exhibit slow drift along attractor manifolds, explaining behavioral variability in delayed response tasks without requiring noise-driven diffusion.',
      tags: ['working memory', 'attractor networks', 'computational modeling'],
      pdfUrl: '#'
    },
    {
      id: '4',
      title: 'Computational Principles of Memory Reactivation During Sleep',
      authors: 'Chen, M., Brown, A., & Davis, L.',
      journal: 'Current Biology',
      year: 2023,
      citations: 51,
      featured: false,
      abstract: 'We propose a computational framework explaining how hippocampal sharp-wave ripples selectively reactivate behaviorally relevant memories during sleep, balancing consolidation of important information with catastrophic forgetting prevention.',
      tags: ['memory consolidation', 'sleep', 'sharp-wave ripples'],
      pdfUrl: '#'
    },
    {
      id: '5',
      title: 'Emergence of Grid-Like Representations Through Deep Reinforcement Learning',
      authors: 'Chen, M., Thompson, R., Garcia, M., & White, K.',
      journal: 'Nature Communications',
      year: 2023,
      citations: 89,
      featured: false,
      abstract: 'Using deep reinforcement learning agents trained on spatial navigation tasks, we show that grid-like representations emerge naturally as an efficient coding scheme, without requiring explicit spatial input or biological constraints.',
      tags: ['spatial navigation', 'grid cells', 'deep learning', 'reinforcement learning'],
      pdfUrl: '#'
    },
    {
      id: '6',
      title: 'Synaptic Mechanisms of Heterosynaptic Plasticity in Hippocampal Circuits',
      authors: 'Chen, M., Rodriguez, S., & Kumar, A.',
      journal: 'Journal of Neuroscience',
      year: 2022,
      citations: 72,
      featured: false,
      abstract: 'We developed a computational model of heterosynaptic plasticity that explains how local synaptic modifications can coordinate changes across multiple synapses to support associative memory formation in hippocampal CA3.',
      tags: ['synaptic plasticity', 'hippocampus', 'associative memory'],
      pdfUrl: '#'
    },
    {
      id: '7',
      title: 'Temporal Credit Assignment in Hierarchical Motor Learning',
      authors: 'Chen, M. & Peterson, D.',
      journal: 'PLOS Computational Biology',
      year: 2022,
      citations: 44,
      featured: false,
      abstract: 'We present a hierarchical reinforcement learning model that solves the temporal credit assignment problem in motor learning by using eligibility traces across multiple timescales, matching behavioral and neural data from motor cortex.',
      tags: ['motor learning', 'reinforcement learning', 'hierarchical control'],
      pdfUrl: '#'
    },
    {
      id: '8',
      title: 'Neural Network Models of Decision-Making Under Uncertainty',
      authors: 'Chen, M., Foster, L., & Zhang, Y.',
      journal: 'Trends in Cognitive Sciences',
      year: 2022,
      citations: 126,
      featured: false,
      abstract: 'A comprehensive review of how recurrent neural network models can account for behavioral and neural data in perceptual decision-making tasks, with emphasis on uncertainty representation and confidence judgments.',
      tags: ['decision making', 'uncertainty', 'review'],
      pdfUrl: '#'
    }
  ];

  const allTags = Array.from(new Set(publications.flatMap(p => p.tags)));

  let filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'all' || pub.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  filteredPublications.sort((a, b) => {
    if (sortBy === 'year') return b.year - a.year;
    return b.citations - a.citations;
  });

  const featuredPublications = publications.filter(p => p.featured);

  return (
    <section id="publications" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-primary mb-4">Publications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="text-accent">12 peer-reviewed publications</span> in the last 3 years
          </p>
        </motion.div>

        {/* Featured Publications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl text-primary mb-6">Featured Publications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPublications.map((pub, index) => (
              <Card key={pub.id} className="p-6 hover:shadow-xl transition-all bg-gradient-to-br from-card to-primary/5">
                <Badge className="mb-3 bg-accent text-accent-foreground">Featured</Badge>
                <h4 className="mb-3 line-clamp-2">{pub.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                <p className="text-sm text-primary mb-4">{pub.journal} ({pub.year})</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground/70">{pub.citations} citations</span>
                  <Button size="sm" variant="ghost" className="text-accent hover:text-accent/80">
                    <Download className="w-4 h-4" />
                  </Button>
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
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={sortBy === 'year' ? 'default' : 'outline'}
                onClick={() => setSortBy('year')}
              >
                Sort by Year
              </Button>
              <Button
                variant={sortBy === 'citations' ? 'default' : 'outline'}
                onClick={() => setSortBy('citations')}
              >
                Sort by Citations
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedTag === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card hover:bg-card/80 text-foreground'
              }`}
            >
              All Topics
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedTag === tag
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card hover:bg-card/80 text-foreground'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
            >
              <Card className="p-6 hover:shadow-lg transition-all bg-card/80 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="mb-2">{pub.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                    <p className="text-sm text-primary mb-3">
                      {pub.journal} ({pub.year}) • {pub.citations} citations
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {pub.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-secondary/20 text-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex md:flex-col gap-2">
                    <Button size="sm" className="bg-accent hover:bg-accent/90">
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                    <Button size="sm" variant="outline">
                      <Quote className="w-4 h-4 mr-2" />
                      Cite
                    </Button>
                  </div>
                </div>

                {expandedId === pub.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-border"
                  >
                    <h5 className="mb-2">Abstract</h5>
                    <p className="text-foreground/80">{pub.abstract}</p>
                  </motion.div>
                )}

                <button
                  onClick={() => setExpandedId(expandedId === pub.id ? null : pub.id)}
                  className="mt-4 flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                >
                  {expandedId === pub.id ? 'Hide' : 'Show'} Abstract
                  <ChevronDown className={`w-4 h-4 transition-transform ${expandedId === pub.id ? 'rotate-180' : ''}`} />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
