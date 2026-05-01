export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 55% 55% at 75% 50%, rgba(124,58,237,0.13) 0%, transparent 70%),
          radial-gradient(ellipse 35% 40% at 15% 70%, rgba(168,85,247,0.07) 0%, transparent 60%)
        `,
      }} />

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
      }} />

      {/* Content */}
      <div className="hero-wrap" style={{
        position: 'relative', zIndex: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '3rem', width: '100%', maxWidth: 1140, margin: '0 auto',
        padding: '6rem 6% 4rem',
        animation: 'fadeUp 0.8s ease forwards',
      }}>

        {/* Left text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontSize: '2rem', display: 'inline-block', marginBottom: '0.25rem', animation: 'wave 2.5s ease-in-out infinite', transformOrigin: '70% 70%' }}>
            👋
          </span>
          <p style={{ fontSize: '1rem', color: '#999', marginBottom: '0.4rem' }}>Hey there!</p>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)', fontWeight: 900,
            letterSpacing: '-0.03em', lineHeight: 1.04, marginBottom: '0.6rem',
          }}>
            I&apos;m{' '}
            <span style={{
              background: 'linear-gradient(135deg,#a855f7,#7c3aed)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Abhishek<br />Jadhav
            </span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#999', marginBottom: '1.5rem' }}>
            I am into{' '}
            <strong style={{ color: '#a855f7', fontWeight: 600 }}>MERN Stack Development</strong>
            {' '}&amp; Embedded Systems
          </p>

          <p style={{ color: '#666', lineHeight: 1.85, maxWidth: 490, marginBottom: '2.2rem', fontSize: '0.93rem' }}>
            I focus on developing user-friendly web applications that meet real-world requirements,
            with attention to detail, scalability, and performance. Building things is kind of my thing! 🚀
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => go('contact')}>Contact Me 📬</button>
            <button className="btn-ghost" onClick={() => go('about')}>About Me →</button>
          </div>
        </div>

        {/* Avatar */}
        <div className="hero-avatar" style={{ flexShrink: 0, position: 'relative', width: 270, height: 270 }}>
          <div style={{
            position: 'absolute', inset: -10, borderRadius: '50%',
            border: '1.5px solid rgba(168,85,247,0.3)',
            animation: 'spin 12s linear infinite',
          }} />
          <div style={{ position: 'absolute', inset: -20, borderRadius: '50%', border: '1px solid rgba(168,85,247,0.1)' }} />
          <div style={{
            width: '100%', height: '100%', borderRadius: '50%',
            background: 'linear-gradient(145deg,#7c3aed,#a855f7,#6366f1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '5.5rem', boxShadow: '0 0 70px rgba(124,58,237,0.28)',
            position: 'relative', zIndex: 1,
          }}>
            👨‍💻
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        color: '#666', fontSize: '0.72rem', letterSpacing: '0.06em', textTransform: 'uppercase',
      }}>
        <div style={{ position: 'relative', width: 1, height: 30, background: '#333', overflow: 'hidden', borderRadius: 1 }}
          className="scroll-bar" />
        <span>scroll</span>
      </div>

      <style>{`
        .scroll-bar::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 10px;
          background: #a855f7; border-radius: 1px;
          animation: scrolldown 1.6s ease-in-out infinite;
        }
        @media(max-width:768px) { .hero-avatar { width: 180px !important; height: 180px !important; } }
        @media(max-width:600px) {
          .hero-wrap { flex-direction: column-reverse !important; }
          .hero-avatar { width: 150px !important; height: 150px !important; }
        }
      `}</style>
    </section>
  );
}
