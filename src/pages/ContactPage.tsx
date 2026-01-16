import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';
import { siteConfig, aboutContent } from '../content';

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Contact</h1>
          <p className="text-center" style={{ maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.125rem' }}>
            I welcome inquiries about research collaborations, digital humanities projects, 
            speaking engagements, and employment opportunities.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          <motion.a
            href={`mailto:${siteConfig.email}`}
            className="stat-card"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <Mail size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Email</h3>
            <p style={{ color: 'var(--color-secondary)', wordBreak: 'break-word' }}>
              {siteConfig.email}
            </p>
          </motion.a>

          <motion.a
            href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
            className="stat-card"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Phone size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Phone</h3>
            <p style={{ color: 'var(--color-secondary)' }}>
              {siteConfig.phone}
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>
              Office hours: Mon & Wed, 2-4 PM EST
            </p>
          </motion.a>

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MapPin size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Office</h3>
            <p style={{ color: 'var(--color-text-light)' }}>
              Department of Romance & Arabic Languages & Literatures
              <br />
              University of Cincinnati
              <br />
              Cincinnati, OH 45221
            </p>
          </motion.div>
        </div>

        {/* Professional Links */}
        <motion.div
          className="featured-section"
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ marginBottom: '2rem' }}>Professional Links</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a
              href={siteConfig.social.archivoVenezuela}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'rgba(139, 69, 19, 0.05)',
                borderRadius: '8px',
                transition: 'all var(--transition-base)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(139, 69, 19, 0.1)';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(139, 69, 19, 0.05)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <Globe size={24} color="var(--color-secondary)" />
              <div style={{ flex: 1 }}>
                <strong style={{ color: 'var(--color-primary)' }}>Archivo Venezuela</strong>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                  Digital archive of Venezuelan diasporic cultural production
                </p>
              </div>
              <ExternalLink size={20} color="var(--color-text-light)" />
            </a>

            {/* Add more professional links as needed */}
            <div style={{
              padding: '1rem',
              background: 'rgba(139, 69, 19, 0.05)',
              borderRadius: '8px',
              color: 'var(--color-text-light)',
              fontSize: '0.95rem'
            }}>
              <p style={{ margin: 0 }}>
                Additional professional profiles (Google Scholar, ORCID, LinkedIn, GitHub) 
                can be added to the <code style={{ 
                  background: 'rgba(0,0,0,0.1)', 
                  padding: '0.125rem 0.375rem', 
                  borderRadius: '3px',
                  fontFamily: 'monospace'
                }}>content.ts</code> file.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Currently Seeking */}
        <motion.div
          className="featured-section"
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="featured-badge">Currently Seeking</span>
          <h2 style={{ marginTop: '1rem', marginBottom: '2rem' }}>Opportunities In</h2>
          <ul className="content-list" style={{ fontSize: '1.125rem' }}>
            {aboutContent.seeking.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Areas of Collaboration */}
        <motion.div
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '8px',
            padding: '2rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 style={{ marginBottom: '1.5rem' }}>Areas of Interest for Collaboration</h3>
          <ul className="content-list">
            <li>Digital archiving and cultural heritage preservation</li>
            <li>Venezuelan diaspora research</li>
            <li>Migration and displacement studies</li>
            <li>Latin American and Caribbean cultural production</li>
            <li>Software tool development for humanities research</li>
            <li>Digital pedagogy and AI literacy</li>
            <li>Bilingual metadata and multilingual digital projects</li>
          </ul>
          
          <div style={{ 
            marginTop: '2rem', 
            paddingTop: '2rem', 
            borderTop: '1px solid var(--color-border)'
          }}>
            <h4 style={{ marginBottom: '1rem' }}>Available For</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div>
                <strong>Speaking & Workshops</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>
                  Keynote addresses, guest lectures, technical training
                </p>
              </div>
              <div>
                <strong>Consulting</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>
                  Digital archiving projects, tool development
                </p>
              </div>
              <div>
                <strong>Collaboration</strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>
                  Research partnerships, grant proposals
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Response Note */}
        <p style={{ 
          textAlign: 'center', 
          marginTop: '3rem', 
          color: 'var(--color-text-light)',
          fontSize: '0.95rem'
        }}>
          I typically respond to inquiries within 2-3 business days.
        </p>
      </div>
    </div>
  );
}
