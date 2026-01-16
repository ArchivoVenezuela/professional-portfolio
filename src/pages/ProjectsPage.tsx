import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projectsIntro, projects } from '../content';

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Digital Projects</h1>
          <div style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontFamily: 'var(--font-display)',
              textAlign: 'center',
              color: 'var(--color-secondary)',
              marginBottom: '2rem'
            }}>
              {projectsIntro.headline}
            </h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
              {projectsIntro.description}
            </p>
          </div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '2rem' }}>Featured</h2>
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="featured-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p className="hero-subtitle">{project.tagline}</p>
                
                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ color: 'var(--color-secondary)' }}>The Problem</h4>
                  <p>{project.problem}</p>
                  
                  <h4 style={{ color: 'var(--color-secondary)', marginTop: '1.5rem' }}>The Solution</h4>
                  <p>{project.solution}</p>
                  
                  <div style={{ marginTop: '1.5rem' }}>
                    <h4 style={{ color: 'var(--color-secondary)' }}>Technical Stack</h4>
                    <div className="tech-stack">
                      {project.tech.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  {project.features && (
                    <>
                      <h4 style={{ color: 'var(--color-secondary)', marginTop: '1.5rem' }}>Key Features</h4>
                      <ul className="content-list">
                        {project.features.map(feature => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {project.impact && (
                    <>
                      <h4 style={{ color: 'var(--color-secondary)', marginTop: '1.5rem' }}>Impact</h4>
                      <ul className="content-list">
                        {project.impact.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  <div style={{ 
                    marginTop: '2rem', 
                    paddingTop: '1.5rem', 
                    borderTop: '1px solid var(--color-border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div>
                      <strong>Role:</strong> {project.role} • <strong>Year:</strong> {project.year}
                    </div>
                    {project.links && (
                      <div className="button-group" style={{ margin: 0 }}>
                        {project.links.map(link => (
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
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Other Projects Grid */}
        <h2 style={{ marginBottom: '2rem' }}>All Tools & Applications</h2>
        <div className="projects-grid">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <div className="project-header">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
              </div>
              
              <div className="project-body">
                <p style={{ marginBottom: '1rem' }}>{project.summary}</p>
                
                <div className="tech-stack">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                  <strong>{project.role}</strong> • {project.year} • {project.status}
                </div>
              </div>
              
              {project.links && (
                <div className="project-footer">
                  {project.links.map(link => (
                    <a
                      key={link.text}
                      href={link.href}
                      className="button button-secondary"
                      style={{ fontSize: '0.9rem', padding: '0.625rem 1.25rem' }}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                    >
                      {link.text}
                      {link.external && <ExternalLink size={16} />}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Technical Skills Summary */}
        <motion.div
          className="featured-section"
          style={{ marginTop: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Technical Skills</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--color-secondary)' }}>Programming</h4>
              <p>Python, JavaScript/TypeScript, React, HTML/CSS, SQL, Git</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-secondary)' }}>Platforms</h4>
              <p>Omeka Classic, Omeka S, WordPress, Canvas LMS</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-secondary)' }}>Metadata</h4>
              <p>Dublin Core, MARC21, MODS, VRA Core</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-secondary)' }}>AI Integration</h4>
              <p>Google Gemini API, Prompt Engineering</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
