import { motion } from 'framer-motion';
import { Globe, BookOpen, Cpu, Flag } from 'lucide-react';
import { researchIntro, researchVision, researchAreas, books, peerReviewedArticles, bookChapters, otherPublications, inProgressPublications } from '../content';

const iconMap: Record<string, any> = {
  Globe,
  BookOpen,
  Cpu,
  Flag
};

export default function ResearchPage() {
  const publicationsByTopic = peerReviewedArticles.reduce((acc, pub) => {
    if (!acc[pub.topic]) acc[pub.topic] = [];
    acc[pub.topic].push(pub);
    return acc;
  }, {} as Record<string, typeof peerReviewedArticles>);

  return (
    <div className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Research, Leadership & Public Scholarship</h1>
          <div style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontFamily: 'var(--font-display)',
              textAlign: 'center',
              color: 'var(--color-secondary)',
              marginBottom: '2rem'
            }}>
              {researchIntro.headline}
            </h2>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              {researchVision.content}
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.8', fontStyle: 'italic' }}>
              {researchIntro.approach}
            </p>
          </div>
        </motion.div>

        {/* Digital Humanities Methodology - EXPANDED */}
        <motion.div
          className="featured-section"
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Digital Humanities Methodology</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            As a scholar-practitioner, I integrate critical humanities frameworks with digital methods to enhance 
            access, collaboration, and archival sustainability. My digital humanities methodology centers multilingual 
            metadata modeling, bilingual data design, community co-curation, and ethical data infrastructure. I develop 
            tools and platforms that enable humanities scholars and community archivists to document, preserve, and 
            mobilize cultural memory across diasporic contexts.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div>
              <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                Multilingual Metadata Architecture
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                Designing bilingual metadata schemas that maintain semantic integrity across Spanish and English, 
                enabling international discoverability while respecting linguistic and cultural specificity.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                Community Co-Curation Models
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                Partnering with diaspora communities to co-design archival frameworks, ensuring that preservation 
                practices honor community knowledge systems and cultural protocols.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                Ethical AI Integration
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                Developing responsible frameworks for AI-assisted metadata translation and enrichment, with attention 
                to cultural context, bias mitigation, and transparency in automated processes.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                Open-Source Tool Development
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                Building Python and JavaScript applications for archival workflows that prioritize accessibility, 
                sustainability, and adaptability for under-resourced institutions and grassroots projects.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Research Areas */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '2rem' }}>Research Areas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {researchAreas.map((area, idx) => {
              const IconComponent = iconMap[area.icon];
              return (
                <motion.div
                  key={area.title}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <IconComponent size={32} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
                  <h4 style={{ marginBottom: '0.75rem' }}>{area.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Books */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '2rem' }}>Books</h2>
          <div style={{ display: 'grid', gap: '2rem' }}>
            {books.map((book, idx) => (
              <motion.div
                key={book.title}
                className="featured-section"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  {/* Book cover */}
                  {book.coverImage ? (
                    <img 
                      src={book.coverImage} 
                      alt={`Cover of ${book.title}`}
                      style={{ 
                        width: '120px', 
                        height: 'auto',
                        maxHeight: '180px',
                        objectFit: 'contain',
                        borderRadius: '4px',
                        flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                      }} 
                    />
                  ) : (
                    <div style={{ 
                      width: '120px', 
                      height: '180px', 
                      background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
                      borderRadius: '4px',
                      flexShrink: 0
                    }} />
                  )}
                  
                  <div style={{ flex: 1, minWidth: '300px' }}>
                    <h3 style={{ marginBottom: '0.5rem' }}>{book.title}</h3>
                    <p style={{ 
                      fontStyle: 'italic', 
                      color: 'var(--color-text-light)', 
                      marginBottom: '1rem' 
                    }}>
                      {book.subtitle}
                    </p>
                    <p style={{ 
                      color: 'var(--color-secondary)', 
                      fontWeight: 600, 
                      marginBottom: '1rem' 
                    }}>
                      {book.publisher}, {book.year}
                    </p>
                    <p>{book.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Selected Publications by Topic */}
        <section>
          <h2 style={{ marginBottom: '2rem' }}>Selected Peer-Reviewed Articles</h2>
          
          {Object.entries(publicationsByTopic).map(([topic, pubs], topicIdx) => (
            <motion.div
              key={topic}
              style={{ marginBottom: '3rem' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: topicIdx * 0.1 }}
            >
              <h3 style={{ 
                color: 'var(--color-secondary)', 
                marginBottom: '1.5rem',
                paddingBottom: '0.5rem',
                borderBottom: '2px solid var(--color-accent)'
              }}>
                {topic}
              </h3>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {pubs.map((pub) => (
                  <div
                    key={pub.title}
                    style={{
                      padding: '1.5rem',
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px'
                    }}
                  >
                    <h4 style={{ marginBottom: '0.75rem', fontSize: '1.125rem' }}>
                      "{pub.title}"
                    </h4>
                    <p style={{ 
                      color: 'var(--color-text-light)', 
                      fontStyle: 'italic',
                      marginBottom: '0.5rem'
                    }}>
                      {pub.journal}{pub.volume && `, ${pub.volume}`}
                      {pub.note && ` (${pub.note})`}
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                      {pub.year}
                      {pub.pages && `, pp. ${pub.pages}`}
                      {pub.status && ` (${pub.status})`}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* Book Chapters - if available */}
        {bookChapters.length > 0 && (
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '2rem' }}>Book Chapters</h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {bookChapters.map((chapter, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.5rem',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px'
                  }}
                >
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>"{chapter.title}"</strong>
                  </p>
                  <p style={{ fontStyle: 'italic', color: 'var(--color-text-light)', fontSize: '0.95rem' }}>
                    in <em>{chapter.bookTitle}</em>, ed. {chapter.editor} ({chapter.publisher}, {chapter.year}), pp. {chapter.pages}
                    {('status' in chapter && (chapter as any).status) ? ` (${(chapter as any).status})` : ''}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other Publications - if available */}
        {otherPublications.length > 0 && otherPublications[0].title !== "Digital Archiving and Diaspora Memory: Ethical Frameworks" && (
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '2rem' }}>Digital Scholarship & Essays</h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {otherPublications.map((pub, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.5rem',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px'
                  }}
                >
                  <p style={{ marginBottom: '0.5rem' }}>
                    <strong>{pub.title}</strong>
                  </p>
                  <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                    <em>{pub.venue}</em>, {pub.year}{pub.status && ` (${pub.status})`}
                  </p>
                  <p style={{ fontSize: '0.9rem' }}>{pub.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Work in Progress & Forthcoming */}
        <motion.div
          className="featured-section"
          style={{ marginTop: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="featured-badge">Work in Progress & Forthcoming</span>
          
          {inProgressPublications.map((pub, idx) => (
            <div key={idx} style={{ marginBottom: idx < inProgressPublications.length - 1 ? '3rem' : 0 }}>
              {pub.type === "Book Manuscript" ? (
                <>
                  <h3>{pub.title.split(':')[0]}</h3>
                  <p style={{ 
                    fontStyle: 'italic', 
                    color: 'var(--color-text-light)', 
                    marginBottom: '1rem',
                    fontSize: '1.125rem'
                  }}>
                    {pub.title.split(':')[1]}
                  </p>
                  <p style={{ marginBottom: '1rem', color: 'var(--color-secondary)', fontWeight: 600 }}>
                    ({pub.expectedSubmission})
                  </p>
                  <p style={{ marginBottom: '1.5rem' }}>
                    {pub.description}
                  </p>
                  
                  {pub.chapters && (
                    <>
                      <h4 style={{ color: 'var(--color-secondary)', marginTop: '2rem', marginBottom: '1rem' }}>
                        Chapters include:
                      </h4>
                      <ul className="content-list">
                        {pub.chapters.map((chapter, i) => (
                          <li key={i}>{chapter}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </>
              ) : (
                <>
                  <div style={{ marginTop: idx > 0 ? '2rem' : 0, paddingTop: idx > 0 ? '2rem' : 0, borderTop: idx > 0 ? '1px solid var(--color-border)' : 'none' }}>
                    <h4 style={{ marginBottom: '0.5rem' }}>
                      {pub.type}: "{pub.title}"
                    </h4>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--color-secondary)', fontSize: '0.95rem' }}>
                      Expected submission: {pub.expectedSubmission}
                    </p>
                    <p>{pub.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </motion.div>

        {/* Research Vision & Impact - NEW SECTION */}
        <motion.div
          style={{
            background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%)',
            border: '2px solid var(--color-accent)',
            borderRadius: '12px',
            padding: '3rem',
            marginTop: '4rem'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="featured-badge">Research Leadership</span>
          <h2 style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>{researchVision.title}</h2>
          <p style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            {researchVision.leadershipImpact}
          </p>
        </motion.div>

        {/* Publication Metrics */}
        <div style={{ 
          marginTop: '4rem', 
          textAlign: 'center',
          padding: '2rem',
          background: 'var(--color-surface)',
          borderRadius: '8px',
          border: '1px solid var(--color-border)'
        }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Publication Metrics</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem' 
          }}>
            <div>
              <div className="stat-number" style={{ fontSize: '2.5rem' }}>18+</div>
              <p style={{ color: 'var(--color-text-light)' }}>Peer-reviewed articles</p>
            </div>
            <div>
              <div className="stat-number" style={{ fontSize: '2.5rem' }}>3</div>
              <p style={{ color: 'var(--color-text-light)' }}>Books published</p>
            </div>
            <div>
              <div className="stat-number" style={{ fontSize: '2.5rem' }}>2</div>
              <p style={{ color: 'var(--color-text-light)' }}>Book chapters</p>
            </div>
            <div>
              <div className="stat-number" style={{ fontSize: '2.5rem' }}>4</div>
              <p style={{ color: 'var(--color-text-light)' }}>Languages published</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
