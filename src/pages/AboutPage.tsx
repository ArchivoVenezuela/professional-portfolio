import { motion } from 'framer-motion';
import { aboutContent } from '../content';

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">About</h1>
          <p className="text-center" style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.25rem', fontFamily: 'var(--font-display)' }}>
            Transnational Scholar | Digital Infrastructure Builder | Academic Leader
          </p>
        </motion.div>

        {/* Professional Identity */}
        <motion.div
          className="featured-section"
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Professional Identity</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            {aboutContent.professionalIdentity}
          </p>
        </motion.div>

        {/* Leadership Vision - NEW SECTION */}
        <motion.div
          style={{
            background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%)',
            border: '2px solid var(--color-accent)',
            borderRadius: '12px',
            padding: '3rem',
            marginBottom: '4rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="featured-badge">Leadership Vision</span>
          <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            {aboutContent.leadershipVision.title}
          </h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            {aboutContent.leadershipVision.statement}
          </p>
          
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--color-secondary)' }}>
            Core Principles
          </h3>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {aboutContent.leadershipVision.principles.map((principle, idx) => (
              <div
                key={idx}
                style={{
                  paddingLeft: '2rem',
                  position: 'relative',
                  fontSize: '1.05rem',
                  lineHeight: '1.7'
                }}
              >
                <span style={{
                  position: 'absolute',
                  left: '0',
                  color: 'var(--color-accent)',
                  fontWeight: 'bold',
                  fontSize: '1.25rem'
                }}>→</span>
                <strong style={{ color: 'var(--color-secondary)' }}>
                  {principle.split(':')[0]}:
                </strong>
                {principle.split(':')[1]}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Experience - NEW SECTION */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '2rem' }}>Leadership Experience</h2>
          <div style={{ display: 'grid', gap: '2rem' }}>
            {aboutContent.leadershipExperience.map((exp, idx) => (
              <motion.div
                key={idx}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '2rem'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <h3 style={{ marginBottom: '0.5rem' }}>{exp.role}</h3>
                    <p style={{ 
                      color: 'var(--color-secondary)', 
                      fontWeight: 600,
                      fontSize: '1.05rem',
                      fontStyle: 'italic'
                    }}>
                      {exp.initiative}
                    </p>
                  </div>
                  <span style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(139, 69, 19, 0.1)',
                    color: 'var(--color-secondary)',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}>
                    {exp.period}
                  </span>
                </div>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Three Column Section */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Languages */}
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
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ marginBottom: '1.5rem' }}>Languages</h3>
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-secondary)' }}>Native</h4>
              <p>{aboutContent.languages.native.join(', ')}</p>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-secondary)' }}>Fluent</h4>
              <p>{aboutContent.languages.fluent.join(', ')}</p>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-secondary)' }}>Intermediate</h4>
              <p>{aboutContent.languages.intermediate.join(', ')}</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1rem', color: 'var(--color-secondary)' }}>Reading</h4>
              <p>{aboutContent.languages.reading.join(', ')}</p>
            </div>
          </motion.div>

          {/* Education */}
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
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={{ marginBottom: '1.5rem' }}>Education</h3>
            {aboutContent.education.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: idx < aboutContent.education.length - 1 ? '1.5rem' : 0 }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{edu.degree}</h4>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 600, fontSize: '0.95rem' }}>
                  {edu.institution}
                </p>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>{edu.year}</p>
              </div>
            ))}
          </motion.div>

          {/* Current Position */}
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
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ marginBottom: '1.5rem' }}>Current Position</h3>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Professor</h4>
            <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '1rem' }}>
              Department of Romance & Arabic Languages & Literatures
              <br />
              University of Cincinnati
            </p>
            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Academic Trajectory</h4>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.7', listStyle: 'none' }}>
                <li><strong>2020:</strong> Promoted to Full Professor</li>
                <li><strong>2015:</strong> Associate Professor with Tenure</li>
                <li><strong>2008:</strong> Appointed Assistant Professor</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div
          className="featured-section"
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Technical Skills</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div>
              <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                Programming & Development
              </h4>
              <p>{aboutContent.technicalSkills.programming.join(', ')}</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                Digital Humanities Platforms
              </h4>
              <p>{aboutContent.technicalSkills.platforms.join(', ')}</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                Metadata & Standards
              </h4>
              <p>{aboutContent.technicalSkills.metadata.join(', ')}</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                AI Integration
              </h4>
              <p>{aboutContent.technicalSkills.ai.join(', ')}</p>
            </div>
          </div>
        </motion.div>

        {/* Why Venezuelan Diaspora Matters */}
        <motion.div
          style={{
            background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%)',
            border: '2px solid var(--color-accent)',
            borderRadius: '12px',
            padding: '3rem',
            marginBottom: '4rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ marginBottom: '1.5rem' }}>Why Venezuelan Diaspora Matters</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Since 2015, over 7 million Venezuelans have fled authoritarianism, violence, and economic collapse—representing 
            the largest displacement in the Americas. This diaspora has produced novels, films, theater, music, and visual 
            art that document trauma, resistance, and resilience. Without systematic preservation efforts, these voices 
            risk being lost to history.
          </p>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            Archivo Venezuela emerged from my commitment to ensuring these stories are preserved, accessible, and studied. 
            As someone with deep roots in Venezuela and lived experience of migration, I understand both the scholarly 
            importance and human urgency of this work.
          </p>
        </motion.div>

        {/* Seeking Opportunities */}
        <motion.div
          className="featured-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="featured-badge">Seeking Leadership Opportunities</span>
          <div style={{ marginTop: '2rem' }}>
            <ul className="content-list" style={{ fontSize: '1.125rem', lineHeight: '2' }}>
              {aboutContent.seeking.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div style={{ 
            marginTop: '3rem', 
            paddingTop: '2rem', 
            borderTop: '1px solid var(--color-border)'
          }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Professional Approach</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              I believe in <strong>accessible scholarship</strong> that serves both academic and public audiences, 
              <strong> ethical digital humanities</strong> that centers equity and sustainability, 
              <strong> multilingual research</strong> that respects linguistic diversity, 
              <strong> mentorship</strong> that supports diverse career pathways, 
              <strong> collaborative</strong> interdisciplinary projects, and 
              <strong> innovation</strong> that solves real problems for researchers and communities.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
