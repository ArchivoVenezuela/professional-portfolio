import { Mail, Phone, Globe, ExternalLink } from 'lucide-react';
import { siteConfig, navigation } from '../content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>{siteConfig.name}</h4>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '1rem' }}>
            Professor of Latin American and Caribbean Cultural Studies
            <br />
            University of Cincinnati
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.href.startsWith('/cv/') || item.href.endsWith('.pdf') ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                ) : (
                  <a href={item.href}>{item.name}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <ul className="footer-links">
            <li>
              <a href={`mailto:${siteConfig.email}`}>
                <Mail size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}>
                <Phone size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={siteConfig.social.archivoVenezuela} target="_blank" rel="noopener noreferrer">
                <Globe size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                Archivo Venezuela
                <ExternalLink size={14} style={{ display: 'inline', marginLeft: '0.25rem' }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
