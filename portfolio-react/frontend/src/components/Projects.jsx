import { useState } from 'react';
import { projects } from '../data/portfolioData.js';

const filters = [
  { key: 'all',  label: 'All' },
  { key: 'mern', label: 'MERN Stack' },
  { key: 'iot',  label: 'IoT / Embedded' },
  { key: 'web',  label: 'Web' },
];

export default function Projects() {
  const [active, setActive] = useState('all');

  const visible = active === 'all' ? projects : projects.filter((p) => p.cat === active);

  return (
    <div id="projects" style={{ background: '#111111', padding: '5.5rem 0' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 6%' }}>

        <p style={secTag}>What I&apos;ve Built</p>
        <h2 style={secTitle}>Projects</h2>

        {/* Filter row */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: '2rem' }}>
          {filters.map((f) => (
            <button key={f.key} onClick={() => setActive(f.key)} style={{
              padding: '0.38rem 1rem', borderRadius: 100,
              border: `1px solid ${active === f.key ? '#7c3aed' : '#333'}`,
              background: active === f.key ? '#7c3aed' : 'transparent',
              color: active === f.key ? '#fff' : '#999',
              fontFamily: 'Inter,sans-serif', fontSize: '0.8rem',
              fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s',
            }}>{f.label}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.5rem' }}>
          {visible.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project: p }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#141414',
        border: `1px solid ${hovered ? 'rgba(168,85,247,0.4)' : '#252525'}`,
        borderRadius: 16, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'border-color 0.25s, transform 0.25s',
      }}
    >
      {/* Thumbnail */}
      <div style={{
        height: 175, display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '4rem',
        background: p.theme,
      }}>
        {p.emoji}
      </div>

      {/* Body */}
      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{p.title}</h3>
        <p style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.72, flex: 1 }}>{p.desc}</p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: '0.7rem' }}>
          {p.tags.map((t) => (
            <span key={t} style={{
              background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.22)',
              color: '#a855f7', borderRadius: 5, padding: '2px 8px', fontSize: '0.71rem', fontWeight: 500,
            }}>{t}</span>
          ))}
        </div>

        {/* GitHub link */}
        <div style={{ marginTop: '0.9rem' }}>
          <a href={p.github} target="_blank" rel="noreferrer" style={{
            fontSize: '0.8rem', color: '#999', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 4,
            fontWeight: 500, transition: 'color 0.2s',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#a855f7')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#999')}
          >
            ⬡ GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

const secTag = {
  fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase',
  letterSpacing: '0.14em', color: '#a855f7', marginBottom: '0.4rem', display: 'block',
};
const secTitle = {
  fontSize: 'clamp(1.7rem,3vw,2.5rem)', fontWeight: 800,
  letterSpacing: '-0.025em', marginBottom: '2.5rem',
};
