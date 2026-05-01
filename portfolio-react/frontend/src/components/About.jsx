import { useState } from 'react';
import { personalInfo, techStack } from '../data/portfolioData.js';

const tabs = Object.keys(techStack);

export default function About() {
  const [activeTab, setActiveTab] = useState('Frontend');

  return (
    <section id="about" style={{ padding: '5.5rem 6%', maxWidth: 1140, margin: '0 auto' }}>
      <p style={secTag}>Get to know me</p>
      <h2 style={secTitle}>About Me</h2>

      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '4rem', alignItems: 'start' }}>

        {/* Photo card */}
        <div className="about-photo" style={{
          width: '100%', aspectRatio: '1', borderRadius: 20,
          background: 'linear-gradient(145deg,#7c3aed,#a855f7,#6366f1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '6rem', boxShadow: '0 24px 60px rgba(124,58,237,0.22)',
          position: 'sticky', top: '5.5rem',
        }}>
          🧑‍💻
        </div>

        {/* Right */}
        <div>
          {/* Code tag */}
          <div style={{
            background: '#191919', border: '1px solid #252525', borderRadius: 10,
            padding: '0.9rem 1.2rem', marginBottom: '1.5rem',
            fontFamily: 'monospace', fontSize: '0.92rem', color: '#a855f7',
          }}>
            &lt; <span style={{ color: '#f472b6' }}>I build stuff</span> 🚀 /&gt;
          </div>

          <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 4 }}>Abhishek Jadhav</div>
          <div style={{ fontSize: '0.88rem', color: '#a855f7', fontWeight: 500, marginBottom: '1.2rem' }}>
            MERN Stack Developer
          </div>

          {personalInfo.bio.map((p, i) => (
            <p key={i} style={{ fontSize: '0.94rem', color: '#999', lineHeight: 1.85, marginBottom: '0.9rem' }}>{p}</p>
          ))}

          {/* Stats */}
          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', margin: '1.5rem 0 2rem' }}>
            {personalInfo.stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#a855f7', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#666', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <a href={`mailto:${personalInfo.email}`} className="btn-primary">📧 Email Me</a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>
          </div>

          {/* Tech stack */}
          <p style={{ ...secTag, marginBottom: '0.6rem' }}>Tech Stack</p>

          {/* Tab bar */}
          <div style={{ display: 'flex', gap: 4, background: '#191919', borderRadius: 8, padding: 4, width: 'fit-content', marginBottom: '1.4rem' }}>
            {tabs.map((t) => (
              <button key={t} onClick={() => setActiveTab(t)} style={{
                padding: '0.45rem 1.2rem', borderRadius: 6, border: 'none', cursor: 'pointer',
                background: activeTab === t ? '#7c3aed' : 'transparent',
                color: activeTab === t ? '#fff' : '#999',
                fontFamily: 'Inter,sans-serif', fontSize: '0.83rem', fontWeight: 500,
                transition: 'all 0.2s',
              }}>{t}</button>
            ))}
          </div>

          {/* Skill chips */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(88px,1fr))', gap: '0.9rem' }}>
            {techStack[activeTab].map((sk) => (
              <SkillChip key={sk.name} skill={sk} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:820px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-photo { width: 180px !important; margin: 0 auto; position: static !important; }
        }
      `}</style>
    </section>
  );
}

function SkillChip({ skill }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#191919',
        border: `1px solid ${hovered ? 'rgba(168,85,247,0.5)' : '#252525'}`,
        borderRadius: 12, padding: '0.9rem 0.5rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7,
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'border-color 0.2s, transform 0.2s', cursor: 'default',
      }}
    >
      <img src={skill.icon} alt={skill.name} style={{ width: 34, height: 34, objectFit: 'contain' }} />
      <span style={{ fontSize: '0.7rem', color: '#999', textAlign: 'center', fontWeight: 500 }}>{skill.name}</span>
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
