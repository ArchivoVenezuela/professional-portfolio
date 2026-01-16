import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigation, siteConfig } from '../content';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          {siteConfig.name}
        </Link>
        
        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navigation.map((item) => {
            // Check if it's an external link (CV PDF)
            if (item.href.startsWith('/cv/') || item.href.endsWith('.pdf')) {
              return (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              );
            }
            
            return (
              <li key={item.name}>
                <Link 
                  to={item.href} 
                  className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
