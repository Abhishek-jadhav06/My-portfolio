import { useState } from 'react';
import { experience, education } from '../data/portfolioData.js';

export default function Experience() {
  const [tab, setTab] = useState('work');

  return (
    <section id="experience" style={{ padding: '5.5rem 6%', maxWidth: 1140, margin: '0 auto' }}>
      <p style={secTag}>My Journey</p>
      <h2 style={secTitle}>Experience</h2>

      {/* Tab switcher */}
      <div style={{ display: 'flex', gap: 4, background: '#191919', borderRadius: 8, padding: 4, width: 'fit-content', marginBottom: '2.2rem' }}>
        {[['work', 'Experience'], ['edu', 'Education']].map(([key, label]) => (
          <button key={key} onClick={() => setTab(key)} style={{
            padding: '0.45rem 1.4rem', borderRadius: 6, border: 'none', cursor: 'pointer',
            background: tab === key ? '#7c3aed' : 'transparent',
            color: tab === key ? '#fff' : '#999',
            fontFamily: 'Inter,sans-serif', fontSize: '0.83rem', fontWeight: 500,
            transition: 'all 0.2s',
          }}>{label}</button>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: 30 }}>
        {/* Vertical line */}
        <div style={{ position: 'absolute', left: 8, top: 4, bottom: 0, width: 1, background: '#333' }} />

        {tab === 'work'
          ? experience.map((item, i) => (
              <TimelineItem
                key={i}
                title={item.company}
                sub={item.role}
                period={item.period}
                current={item.current}
                dotColor={item.color}
                points={item.points}
                skills={item.skills}
              />
            ))
          : education.map((item, i) => (
              <TimelineItem
                key={i}
                title={item.school}
                sub={item.degree}
                period={item.period}
                current={item.current}
                dotColor={item.current ? '#22c55e' : '#7c3aed'}
                points={item.points}
                skills={[]}
              />
            ))}
      </div>
    </section>
  );
}

function TimelineItem({ title, sub, period, current, dotColor, points, skills }) {
  return (
    <div style={{ position: 'relative', marginBottom: '2.8rem' }}>
      {/* Dot */}
      <div style={{
        position: 'absolute', left: -30, top: 5,
        width: 16, height: 16, borderRadius: '50%',
        background: dotColor, border: '2.5px solid #0a0a0a',
        boxShadow: `0 0 0 3px ${dotColor}33`,
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 2 }}>
        <span style={{ fontSize: '1.05rem', fontWeight: 700 }}>{title}</span>
        {current && (
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)',
            borderRadius: 100, padding: '2px 10px',
            fontSize: '0.72rem', fontWeight: 600, color: '#22c55e',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: '#22c55e',
              display: 'inline-block', animation: 'pulse 2s infinite',
            }} />
            Current
          </span>
        )}
      </div>

      <div style={{ fontSize: '0.88rem', color: '#a855f7', fontWeight: 500, marginBottom: 4 }}>{sub}</div>
      <div style={{ fontSize: '0.77rem', color: '#666', marginBottom: '1rem' }}>{period}</div>

      {/* Points */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {points.map((pt, i) => (
          <li key={i} style={{ fontSize: '0.87rem', color: '#999', lineHeight: 1.75, paddingLeft: 16, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: '#a855f7', fontSize: '0.78rem', top: 1 }}>▸</span>
            {pt}
          </li>
        ))}
      </ul>

      {/* Skills */}
      {skills.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: '0.75rem' }}>
          {skills.map((sk) => (
            <span key={sk} style={{
              background: '#191919', border: '1px solid #252525',
              color: '#999', borderRadius: 5, padding: '2px 8px', fontSize: '0.71rem',
            }}>{sk}</span>
          ))}
        </div>
      )}
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
