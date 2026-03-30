import React from 'react';
import { motion } from 'motion/react';

const guides = [
  {
    id: 'nestjs-guide',
    title: 'NestJS Guide',
    subtitle: 'Complete Terminology Reference',
    description: 'Decorators, modules, providers, guards, interceptors — every NestJS concept explained.',
    accent: '#e8424d',
    tag: 'Backend',
    icon: '⬡',
    href: '/knowledgehub/nestjs-guide.html',
    status: 'live',
  },
  {
    id: 'system-design',
    title: 'System Design Playbook',
    subtitle: 'Architecture Patterns & Strategies',
    description: 'Scalability, load balancing, caching, databases, and distributed systems from first principles.',
    accent: '#00d4aa',
    tag: 'Architecture',
    icon: '◈',
    href: '/knowledgehub/system-design-playbook.html',
    status: 'live',
  },
  {
    id: 'react-guide',
    title: 'React Deep Dive',
    subtitle: 'Hooks, Patterns & Performance',
    description: 'Advanced React patterns, concurrent features, and optimization techniques for production apps.',
    accent: '#61dafb',
    tag: 'Frontend',
    icon: '⚛',
    href: '#',
    status: 'soon',
  },
  {
    id: 'typescript-guide',
    title: 'TypeScript Mastery',
    subtitle: 'Types, Generics & Utilities',
    description: 'From basic types to advanced generics, utility types, and declaration patterns.',
    accent: '#f59e0b',
    tag: 'Language',
    icon: 'TS',
    href: '#',
    status: 'soon',
  },
  {
    id: 'css-guide',
    title: 'CSS Architecture',
    subtitle: 'Modern Layouts & Animations',
    description: 'CSS Grid, Flexbox, custom properties, and animation techniques for modern interfaces.',
    accent: '#a855f7',
    tag: 'Styling',
    icon: '#',
    href: '#',
    status: 'soon',
  },
  {
    id: 'git-guide',
    title: 'Git & DevOps',
    subtitle: 'Workflows, CI/CD & Branching',
    description: 'Git internals, branching strategies, GitHub Actions, and deployment pipelines.',
    accent: '#f97316',
    tag: 'DevOps',
    icon: '⎇',
    href: '#',
    status: 'soon',
  },
];

export default function KnowledgeHub() {
  return (
    <div
      style={{
        background: '#050a0e',
        minHeight: '100vh',
        fontFamily: "'Syne', sans-serif",
        color: '#c8d8e4',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Syne:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Grid background */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(0,212,170,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px' }}>

        {/* Back link */}
        <div style={{ paddingTop: 32 }}>
          <a
            href="/"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              color: '#5a7a8a',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.color = '#00d4aa';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.color = '#5a7a8a';
            }}
          >
            ← kshitipatel.com
          </a>
        </div>

        {/* Header */}
        <header style={{ padding: '60px 0 50px', borderBottom: '1px solid #1a2d3a', marginBottom: 60 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  color: '#00d4aa',
                  background: 'rgba(0,212,170,0.08)',
                  border: '1px solid rgba(0,212,170,0.2)',
                  padding: '4px 12px',
                  borderRadius: 4,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                kshitipatel.com/knowledgehub
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(36px, 6vw, 64px)',
                fontWeight: 800,
                color: '#eef4f8',
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              Knowledge
              <span style={{ color: '#00d4aa' }}> Hub</span>
            </h1>

            <p style={{ fontSize: 18, color: '#5a7a8a', maxWidth: 560, lineHeight: 1.7 }}>
              Curated technical guides, reference sheets, and deep-dives into the technologies I work with every day.
            </p>
          </motion.div>
        </header>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'flex',
            gap: 32,
            marginBottom: 56,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
          }}
        >
          {[
            { label: 'Total Guides', value: guides.length },
            { label: 'Live', value: guides.filter(g => g.status === 'live').length },
            { label: 'Coming Soon', value: guides.filter(g => g.status === 'soon').length },
          ].map(stat => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ color: '#00d4aa', fontSize: 22, fontWeight: 700 }}>{stat.value}</span>
              <span style={{ color: '#5a7a8a', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 24,
          }}
        >
          {guides.map((guide, i) => (
            <GuideCard key={guide.id} guide={guide} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function GuideCard({ guide, index }: { guide: (typeof guides)[0]; index: number }) {
  const isLive = guide.status === 'live';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={isLive ? { y: -4 } : {}}
    >
      
        <a
          href={isLive ? guide.href : undefined}
          style={{
            display: 'block',
            background: '#0c1419',
            border: `1px solid #1a2d3a`,
            borderRadius: 12,
            padding: 28,
            textDecoration: 'none',
            color: 'inherit',
            cursor: isLive ? 'pointer' : 'default',
            opacity: isLive ? 1 : 0.6,
            transition: 'border-color 0.3s, box-shadow 0.3s',
            position: 'relative',
            overflow: 'hidden',
          }}
        onMouseEnter={e => {
          if (!isLive) return;
          (e.currentTarget as HTMLAnchorElement).style.borderColor = guide.accent + '55';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 32px ${guide.accent}18`;
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLAnchorElement).style.borderColor = '#1a2d3a';
          (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: 2,
            background: isLive ? guide.accent : '#1a2d3a',
            opacity: isLive ? 0.8 : 0.4,
          }}
        />

        {/* Icon + tag row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div
            style={{
              width: 48, height: 48,
              background: guide.accent + '18',
              border: `1px solid ${guide.accent}30`,
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: guide.icon.length > 1 ? 14 : 22,
              fontWeight: 700,
              color: guide.accent,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {guide.icon}
          </div>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: guide.accent,
                background: guide.accent + '15',
                border: `1px solid ${guide.accent}30`,
                padding: '3px 10px',
                borderRadius: 4,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {guide.tag}
            </span>
            {!isLive && (
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: '#5a7a8a',
                  background: 'rgba(90,122,138,0.1)',
                  border: '1px solid rgba(90,122,138,0.2)',
                  padding: '3px 8px',
                  borderRadius: 4,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Soon
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 22,
            fontWeight: 700,
            color: '#eef4f8',
            marginBottom: 6,
            lineHeight: 1.2,
          }}
        >
          {guide.title}
        </h3>

        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: guide.accent,
            marginBottom: 14,
            letterSpacing: '0.05em',
          }}
        >
          {guide.subtitle}
        </p>

        <p style={{ fontSize: 14, color: '#5a7a8a', lineHeight: 1.7, marginBottom: 24 }}>
          {guide.description}
        </p>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            color: isLive ? guide.accent : '#5a7a8a',
            fontWeight: 600,
          }}
        >
          {isLive ? (
            <>
              <span>Open Guide</span>
              <span style={{ fontSize: 16 }}>→</span>
            </>
          ) : (
            <span>Work in progress</span>
          )}
        </div>
      </a>
    </motion.div>
  );
}