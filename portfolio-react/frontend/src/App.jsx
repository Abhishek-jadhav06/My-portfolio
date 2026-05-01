import { useEffect } from 'react';
import Navbar     from './components/Navbar.jsx';
import Hero       from './components/Hero.jsx';
import About      from './components/About.jsx';
import Projects   from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact    from './components/Contact.jsx';
import Footer     from './components/Footer.jsx';

export default function App() {
  // Increment visitor count on mount
  useEffect(() => {
    fetch('/api/visitor/increment', { method: 'POST' }).catch(() => {});
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
