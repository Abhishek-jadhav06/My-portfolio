import { useState, useEffect } from 'react';

const links = ['home', 'about', 'projects', 'experience', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const found = [...links].reverse().find((id) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top <= 120;
      });
      if (found) setActive(found);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 6%',
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'rgba(10,10,10,0.5)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? '#252525' : 'transparent'}`,
        transition: 'all 0.3s',
      }}>
        {/* Logo */}
        <button onClick={() => go('home')} style={s.logo}>
          abhishek<span style={{ color: '#a855f7' }}>.</span>
        </button>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="desk-nav">
          {links.map((id) => (
            <li key={id}>
              <button onClick={() => go(id)} style={{
                ...s.link,
                color: active === id ? '#a855f7' : '#999',
              }}>
                {id}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="ham"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f0f0f0', fontSize: '1.5rem', display: 'none' }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '3.8rem', left: 0, right: 0, zIndex: 199,
          background: '#111111', borderBottom: '1px solid #252525',
          padding: '1rem 6%', display: 'flex', flexDirection: 'column', gap: '1rem',
        }}>
          {links.map((id) => (
            <button key={id} onClick={() => go(id)} style={{
              ...s.link, fontSize: '1rem', textAlign: 'left',
              color: active === id ? '#a855f7' : '#999',
            }}>
              {id}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:768px) {
          .desk-nav { display: none !important; }
          .ham { display: block !important; }
        }
      `}</style>
    </>
  );
}

const s = {
  logo: {
    fontSize: '1.2rem', fontWeight: 800, color: '#f0f0f0',
    background: 'none', border: 'none', cursor: 'pointer',
    letterSpacing: '-0.02em', fontFamily: 'Inter,sans-serif',
  },
  link: {
    background: 'none', border: 'none', cursor: 'pointer',
    fontSize: '0.88rem', fontWeight: 500, fontFamily: 'Inter,sans-serif',
    textTransform: 'lowercase', transition: 'color 0.2s',
  },
};
