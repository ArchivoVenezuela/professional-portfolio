import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Globe } from 'lucide-react';
import { teachingHighlights, mentorshipStats } from '../content';

export default function TeachingPage() {
  return (
    <div className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">Teaching & Mentorship</h1>
          <p className="text-center" style={{ maxWidth: '900px', margin: '0 auto 4rem', fontSize: '1.125rem' }}>
            I have designed and taught over 40 undergraduate and graduate courses spanning Latin American 
            and Caribbean literature, film, cultural theory, diaspora studies, and digital humanities methodologies. 
            My courses are taught in Spanish, French, and English, reflecting my commitment to multilingual 
            pedagogy and international perspectives.
          </p>
        </motion.div>

        {/* Teaching Philosophy */}
        <motion.div
          className="featured-section"
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Teaching Philosophy</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            My teaching philosophy emphasizes critical thinking, cultural awareness, and digital literacy. 
            I draw on various pedagogical approaches including study abroad experiences, digital storytelling 
            projects, AI literacy work, and evidence-based online design. As a Quality Matters Certified 
            Course Designer and Adult Learning Institute Fellow, I work to create inclusive, engaging learning 
            environments that support students pursuing diverse career paths in academia, education, translation, 
            and cultural institutions.
          </p>

          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            In the digital humanities classroom, I emphasize ethical, applied, and multilingual approaches to cultural data. 
            Students gain hands-on experience with bilingual metadata structures, Omeka digital exhibits, and digital 
            storytelling as scholarly practice. My curriculum integrates critical AI literacy, programming for the humanities, 
            and collaborative tool evaluation—preparing students to ethically engage with new technologies while centering 
            marginalized voices and underrepresented narratives.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div>
              <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                Multilingual Competency
              </h4>
              <p style={{ fontSize: '0.95rem' }}>
                Teaching in Spanish, French, and English enables students to engage with primary sources 
                in original languages.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                Digital Literacy Integration
              </h4>
              <p style={{ fontSize: '0.95rem' }}>
                Contemporary humanities students need digital competencies. I integrate AI literacy and 
                metadata concepts into traditional courses.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                Evidence-Based Design
              </h4>
              <p style={{ fontSize: '0.95rem' }}>
                Quality Matters certified courses applying adult learning principles for accessibility 
                and meaningful assessment.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>
                Public Humanities
              </h4>
              <p style={{ fontSize: '0.95rem' }}>
                Students learn to make scholarship accessible through digital exhibits and community engagement.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mentorship Impact */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '2rem' }}>Mentorship Impact</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem' 
          }}>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GraduationCap size={40} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
              <div className="stat-number" style={{ fontSize: '2.5rem' }}>
                {mentorshipStats.dissertationsDirected}
              </div>
              <div className="stat-label">PhD Dissertations Directed</div>
            </motion.div>
            
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Users size={40} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
              <div className="stat-number" style={{ fontSize: '2.5rem' }}>
                {mentorshipStats.dissertationCommittees}
              </div>
              <div className="stat-label">Dissertation Committees</div>
            </motion.div>
            
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Award size={40} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
              <div className="stat-number" style={{ fontSize: '2.5rem' }}>
                {mentorshipStats.presidentialFellows}
              </div>
              <div className="stat-label">Presidential Fellows Mentored</div>
            </motion.div>
            
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Users size={40} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
              <div className="stat-number" style={{ fontSize: '2.5rem' }}>
                {mentorshipStats.undergraduateInterns}
              </div>
              <div className="stat-label">Undergraduate Research Interns</div>
            </motion.div>
          </div>
        </section>

        {/* Innovative Courses */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '2rem' }}>Upcoming Courses (2026-2027)</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {teachingHighlights.map((course, idx) => (
              <motion.div
                key={course.code}
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
                    <h3 style={{ marginBottom: '0.5rem' }}>{course.title}</h3>
                    <p style={{ 
                      color: 'var(--color-secondary)', 
                      fontWeight: 600,
                      fontSize: '0.95rem'
                    }}>
                      {course.code}
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
                    {course.semester}
                  </span>
                </div>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                  {course.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Study Abroad Leadership */}
        <motion.div
          className="featured-section"
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Globe size={40} color="var(--color-accent)" style={{ marginBottom: '1rem' }} />
          <h2>Study Abroad Leadership</h2>
          
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Spanish Immersion Program – Querétaro, Mexico</h3>
            <p style={{ 
              color: 'var(--color-secondary)', 
              fontWeight: 600, 
              marginBottom: '1rem' 
            }}>
              Director (2025-present); Co-director (2023-2024)
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Direct intensive summer language immersion program for undergraduate and graduate students. 
              Oversee curriculum design, faculty coordination, homestay placements, cultural excursions, 
              and on-site program management.
            </p>
            
            <h4 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Program Features:</h4>
            <ul className="content-list">
              <li>6 weeks of intensive Spanish instruction (6 credit hours)</li>
              <li>Homestays with Mexican families</li>
              <li>Cultural excursions and service learning</li>
              <li>Daily language practice in authentic contexts</li>
              <li>Individual progress assessments</li>
            </ul>
            
            <h4 style={{ color: 'var(--color-secondary)', marginTop: '1.5rem', marginBottom: '1rem' }}>
              Student Outcomes:
            </h4>
            <ul className="content-list">
              <li>Average improvement of 1.5 proficiency levels</li>
              <li>95% student satisfaction ratings</li>
              <li>Sustained enrollment growth since 2023</li>
            </ul>
          </div>

          <div style={{ 
            marginTop: '3rem', 
            paddingTop: '2rem', 
            borderTop: '1px solid var(--color-border)' 
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Other Study Abroad Programs</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4>Crime, Deviance, and Media in Latin America – Mérida, Mexico (2025)</h4>
              <p>
                Led interdisciplinary honors study tour examining representations of crime in Mexican film, 
                literature, and media. Students engaged with local journalists, filmmakers, and community organizations.
              </p>
            </div>
            
            <div>
              <h4>Cinema and Society in Revolutionary Cuba – Havana (2017)</h4>
              <p>
                Led film studies tour examining Cuban cinema from 1959 to present. Students attended screenings 
                at Cuban Film Institute (ICAIC), met with Cuban directors, and analyzed revolutionary cultural policy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Professional Development */}
        <div style={{ 
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '8px',
          padding: '2rem'
        }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Professional Development</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            <div>
              <h4 style={{ color: 'var(--color-secondary)' }}>Quality Matters Certified</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                Nationally recognized certification in online course design standards (2023)
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--color-secondary)' }}>Adult Learning Institute Fellow</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
                Advanced training in evidence-based pedagogy for adult learners (2022)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
