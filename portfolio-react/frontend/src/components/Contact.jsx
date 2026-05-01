import { useState } from 'react';
import { personalInfo } from '../data/portfolioData.js';

const contactLinks = [
  { href: `mailto:${personalInfo.email}`, label: '📧 Email',     target: '_self' },
  { href: personalInfo.github,            label: '💻 GitHub',    target: '_blank' },
  { href: personalInfo.portfolio,         label: '🌐 Portfolio', target: '_blank' },
  { href: `tel:${personalInfo.phone}`,    label: '📞 Call',      target: '_self' },
];

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState('');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrMsg('Please fill all fields.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setErrMsg('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div id="contact" style={{ background: '#111111', padding: '5.5rem 0', textAlign: 'center' }}>
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 6%' }}>

        <p style={secTag}>Say Hello 👋</p>
        <div style={{ fontSize: '3.2rem', marginBottom: '0.75rem' }}>📬</div>
        <h2 style={{ fontSize: 'clamp(1.7rem,3vw,2.4rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
          Get in Touch
        </h2>
        <p style={{ color: '#666', marginBottom: '2rem', lineHeight: 1.85, fontSize: '0.93rem' }}>
          My inbox is always open! 💌 Whether you&apos;ve got an exciting opportunity or just want to
          say &quot;hello&quot; — I&apos;m all ears! 👂 Let&apos;s chat! 🎉
        </p>

        {/* Contact Form */}
        <div style={{
          background: '#141414', border: '1px solid #252525',
          borderRadius: 16, padding: '2rem', marginBottom: '2rem', textAlign: 'left',
        }}>
          <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <InputField name="name"  placeholder="Your Name"  value={form.name}  onChange={handleChange} />
            <InputField name="email" placeholder="Your Email" value={form.email} onChange={handleChange} type="email" />
          </div>

          <textarea
            name="message"
            placeholder="Your Message..."
            value={form.message}
            onChange={handleChange}
            rows={5}
            style={{ ...inputStyle, width: '100%', resize: 'vertical', marginBottom: '1rem' }}
          />

          {/* Status messages */}
          {status === 'success' && (
            <div style={alertStyle('#22c55e', 'rgba(34,197,94,0.1)', 'rgba(34,197,94,0.25)')}>
              ✅ Message sent! I&apos;ll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div style={alertStyle('#f87171', 'rgba(239,68,68,0.1)', 'rgba(239,68,68,0.25)')}>
              ❌ {errMsg}
            </div>
          )}

          <button
            className="btn-primary"
            onClick={handleSubmit}
            disabled={status === 'loading'}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message 🚀'}
          </button>
        </div>

        {/* Direct contact links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.9rem', flexWrap: 'wrap' }}>
          {contactLinks.map((l) => (
            <ContactLink key={l.label} href={l.href} label={l.label} target={l.target} />
          ))}
        </div>
      </div>

      <style>{`@media(max-width:500px){.form-row{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
}

function InputField({ name, placeholder, value, onChange, type = 'text' }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={inputStyle}
    />
  );
}

function ContactLink({ href, label, target }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={target}
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: '#141414',
        border: `1px solid ${hovered ? '#a855f7' : '#333'}`,
        borderRadius: 10, padding: '0.65rem 1.3rem',
        color: hovered ? '#a855f7' : '#f0f0f0',
        textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500,
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'all 0.2s',
      }}
    >
      {label}
    </a>
  );
}

const inputStyle = {
  background: '#191919', border: '1px solid #333', borderRadius: 8,
  padding: '0.75rem 1rem', color: '#f0f0f0', fontSize: '0.88rem',
  fontFamily: 'Inter,sans-serif', outline: 'none', width: '100%',
  transition: 'border-color 0.2s',
};

const alertStyle = (color, bg, border) => ({
  background: bg, border: `1px solid ${border}`, borderRadius: 8,
  padding: '0.75rem 1rem', color, fontSize: '0.88rem', marginBottom: '1rem',
});

const secTag = {
  fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase',
  letterSpacing: '0.14em', color: '#a855f7', marginBottom: '0.6rem', display: 'block',
};
