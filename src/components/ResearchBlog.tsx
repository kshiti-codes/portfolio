import React from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  readTime: number;
  category: string;
  date: string;
  featured: boolean;
}

export const ResearchBlog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Making Computational Neuroscience Accessible: A Guide for Experimentalists',
      excerpt: 'Computational modeling can seem daunting, but it doesn\'t have to be. In this post, I break down the essential concepts and tools that every experimentalist should know to start incorporating computational approaches into their research.',
      readTime: 8,
      category: 'Tutorial',
      date: 'Oct 15, 2024',
      featured: true
    },
    {
      id: '2',
      title: 'The Memory Consolidation Debate: What We Know and What We Don\'t',
      excerpt: 'Memory consolidation has been studied for decades, yet fundamental questions remain unanswered. Here, I discuss recent findings that challenge traditional views and propose new directions for the field.',
      readTime: 12,
      category: 'Review',
      date: 'Sep 28, 2024',
      featured: true
    },
    {
      id: '3',
      title: 'From PhD to Postdoc: Lessons Learned and Advice for Graduate Students',
      excerpt: 'Transitioning from graduate student to postdoctoral researcher comes with unique challenges. I share my experiences and practical advice for navigating this critical career stage.',
      readTime: 6,
      category: 'Career',
      date: 'Sep 10, 2024',
      featured: false
    },
    {
      id: '4',
      title: 'Why Open Science Matters: My Journey to Sharing Code and Data',
      excerpt: 'Open science practices have transformed how I approach research. In this post, I discuss the benefits of sharing code and data, address common concerns, and provide practical tips for getting started.',
      readTime: 7,
      category: 'Opinion',
      date: 'Aug 22, 2024',
      featured: false
    },
    {
      id: '5',
      title: 'Recurrent Neural Networks for Neuroscientists: A Practical Introduction',
      excerpt: 'RNNs are powerful tools for modeling neural dynamics, but getting started can be challenging. This tutorial covers the basics with code examples and neuroscience applications.',
      readTime: 15,
      category: 'Tutorial',
      date: 'Aug 5, 2024',
      featured: false
    },
    {
      id: '6',
      title: 'The Intersection of AI and Neuroscience: Opportunities and Challenges',
      excerpt: 'As AI and neuroscience increasingly influence each other, new opportunities emerge for both fields. I explore recent developments and discuss where I see the field heading.',
      readTime: 10,
      category: 'Opinion',
      date: 'Jul 18, 2024',
      featured: true
    }
  ];

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <section id="blog" className="py-20 relative z-10 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl text-primary mb-4">Research Blog</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Making complex neuroscience concepts accessible to everyone
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl text-primary mb-6">Featured Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPosts.slice(0, 2).map((post, index) => (
              <Card
                key={post.id}
                className="p-6 hover:shadow-xl transition-all bg-card/90 backdrop-blur-sm cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge className="bg-accent text-accent-foreground">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime} min read
                  </div>
                </div>
                <h4 className="mb-3 group-hover:text-primary transition-colors">{post.title}</h4>
                <p className="text-foreground/80 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <Button variant="ghost" className="text-accent hover:text-accent/80 group-hover:translate-x-1 transition-transform">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl text-primary mb-6">Recent Posts</h3>
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.05 * index }}
              >
                <Card className="p-6 hover:shadow-lg transition-all bg-card/80 backdrop-blur-sm cursor-pointer group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="outline" className="border-primary text-primary">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime} min
                        </div>
                      </div>
                      <h4 className="mb-2 group-hover:text-primary transition-colors">{post.title}</h4>
                      <p className="text-foreground/80">{post.excerpt}</p>
                    </div>
                    <Button variant="ghost" className="text-accent hover:text-accent/80 group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
            <h3 className="text-2xl text-primary mb-3">Stay Updated</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              I regularly write about computational neuroscience, research methods, and career development. 
              Follow me on social media or check back for new posts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe to Updates
              </Button>
              <Button variant="outline">
                View All Posts
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
