import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';
import { heroContent, featuredProject, currentInitiatives } from '../content';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero-title">{heroContent.headline}</h1>
              <p className="hero-subtitle">{heroContent.subheadline}</p>
              <p className="hero-bio">{heroContent.bio}</p>
              <p style={{ 
                fontSize: '1.05rem', 
                marginTop: '1rem', 
                color: 'var(--color-text-light)',
                maxWidth: '700px',
                lineHeight: '1.8'
              }}>
                I explore leadership roles where I can contribute to interdisciplinary collaboration and long-term cultural infrastructure. 
                My work supports institutions, communities, and scholars in documenting displacement, preserving memory, 
                and building digital archives that serve both research and community needs.
              </p>
            </motion.div>
            
            <div className="button-group">
              {heroContent.ctaButtons.map((btn, idx) => (
                <motion.a
                  key={btn.text}
                  href={btn.href}
                  className={`button ${btn.primary ? 'button-primary' : 'button-secondary'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                >
                  {btn.text}
                  <ArrowRight size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats-grid">
            {heroContent.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section">
        <div className="container">
          <motion.div
            className="featured-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="featured-badge">Featured Project</span>
            
            <h2>{featuredProject.title}</h2>
            <p className="hero-subtitle" style={{ marginBottom: '1.5rem' }}>
              {featuredProject.subtitle}
            </p>
            
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              {featuredProject.longDescription}
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }}>
                Current Status
              </h4>
              <ul className="content-list">
                {featuredProject.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="button-group">
              {featuredProject.links.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="button button-secondary"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.text}
                  {link.external ? <ExternalLink size={18} /> : <ArrowRight size={18} />}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Initiatives - NEW SECTION */}
      <section className="section" style={{ background: 'var(--color-surface)', paddingTop: 'var(--space-xl)', paddingBottom: 'var(--space-xl)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <TrendingUp size={28} color="var(--color-accent)" />
              <h2 style={{ margin: 0 }}>{currentInitiatives.headline}</h2>
            </div>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--color-text-light)', fontSize: '1.05rem' }}>
              Ongoing projects in curriculum development, international partnerships, and research infrastructure
            </p>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {currentInitiatives.initiatives.map((initiative, idx) => (
              <motion.div
                key={initiative.title}
                style={{
                  background: 'var(--color-background)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -4,
                  boxShadow: 'var(--shadow-md)',
                  transition: { duration: 0.2 }
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: 'var(--color-accent)'
                }} />
                
                <span style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(212, 175, 55, 0.15)',
                  color: 'var(--color-accent)',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {initiative.status}
                </span>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
                  {initiative.title}
                </h3>

                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.7', 
                  marginBottom: '1rem',
                  color: 'var(--color-text)'
                }}>
                  {initiative.description}
                </p>

                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--color-border)',
                  marginTop: '1rem'
                }}>
                  <strong style={{ 
                    fontSize: '0.9rem', 
                    color: 'var(--color-secondary)',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>
                    Impact:
                  </strong>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    lineHeight: '1.6',
                    color: 'var(--color-text-light)',
                    margin: 0
                  }}>
                    {initiative.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            style={{
              textAlign: 'center',
              marginTop: 'var(--space-lg)',
              padding: '2rem',
              background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%)',
              borderRadius: '8px',
              border: '1px solid var(--color-accent)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p style={{ 
              fontSize: '1.125rem', 
              lineHeight: '1.8',
              margin: 0,
              color: 'var(--color-text)'
            }}>
              I'm interested in partnerships and collaborations that support digital preservation, multilingual scholarship, 
              and community-centered archival work.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
