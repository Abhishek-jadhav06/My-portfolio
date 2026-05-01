export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center', padding: '1.5rem',
      color: '#666', fontSize: '0.78rem',
      borderTop: '1px solid #252525', background: '#0a0a0a',
    }}>
      Made with ❤️ by{' '}
      <span style={{ color: '#a855f7' }}>Abhishek Vasant Jadhav</span>
      {' '}· Pune, India © {new Date().getFullYear()}
    </footer>
  );
}
