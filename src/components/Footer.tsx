import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-primary/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl mb-4">Kshiti Patel</h3>
            <p className="text-foreground/70 mb-4">
              Frontend Developer specializing in React & TypeScript. Passionate about building high-performance, scalable web applications.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:kshiti.de@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kshitipatel1999/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/kshiti-codes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Opportunities */}
          <div>
          <Card className="p-8 bg-card/80 backdrop-blur-sm" style={{ margin: -16 }}>
              <h3 className="text-2xl text-primary mb-4">Seeking Opportunities</h3>
              <p className="text-foreground/80 mb-6">
                I am actively seeking freelance and full-time frontend development opportunities. 
                I would be delighted to discuss potential projects and share my technical expertise in React and TypeScript.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Vue.js</Badge>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-foreground/60">
            © {new Date().getFullYear()} Kshiti Patel All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
