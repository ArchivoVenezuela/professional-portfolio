import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Edit, Eye, Download } from 'lucide-react';
import { 
  siteConfig, 
  heroContent, 
  featuredProject,
  aboutContent 
} from '../content';

export default function AdminPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState({
    hero: heroContent,
    featured: featuredProject,
    site: siteConfig,
    about: aboutContent
  });
  const [activeTab, setActiveTab] = useState('hero');

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-content');
    if (saved) {
      try {
        setContent(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load saved content', e);
      }
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('portfolio-content', JSON.stringify(content));
    alert('Content saved! (Note: This saves to browser storage. To make permanent, copy the exported JSON to content.ts)');
  };

  const handleExport = () => {
    const json = JSON.stringify(content, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content-export.json';
    a.click();
    URL.revokeObjectURL(url);
    alert('JSON exported! To update content.ts, run: node scripts/update-content.js content-export.json');
  };

  const handleUpdateContentTs = async () => {
    try {
      // Create a formatted TypeScript update
      const updates = generateContentTsUpdates(content);
      
      // Copy to clipboard
      await navigator.clipboard.writeText(updates);
      alert('Content updates copied to clipboard! Paste them into content.ts or use the exported JSON with the update script.');
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('Failed to copy. Please use Export JSON instead.');
    }
  };

  const generateContentTsUpdates = (data: any) => {
    let output = '// Updated content from Admin Panel\n\n';
    
    if (data.hero) {
      output += `export const heroContent = ${formatAsTS(data.hero)};\n\n`;
    }
    
    if (data.featured) {
      output += `export const featuredProject = ${formatAsTS(data.featured)};\n\n`;
    }
    
    if (data.site) {
      output += `export const siteConfig = ${formatAsTS(data.site)};\n\n`;
    }
    
    if (data.about) {
      output += `export const aboutContent = ${formatAsTS(data.about)};\n\n`;
    }
    
    return output;
  };

  const formatAsTS = (obj: any, indent = 0): string => {
    const spaces = '  '.repeat(indent);
    const nextSpaces = '  '.repeat(indent + 1);
    
    if (Array.isArray(obj)) {
      if (obj.length === 0) return '[]';
      const items = obj.map(item => `${nextSpaces}${formatAsTS(item, indent + 1)}`).join(',\n');
      return `[\n${items}\n${spaces}]`;
    }
    
    if (obj === null) return 'null';
    if (typeof obj !== 'object') {
      if (typeof obj === 'string') {
        // Escape quotes and handle multiline
        const escaped = obj.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
        return `"${escaped}"`;
      }
      return String(obj);
    }
    
    const entries = Object.entries(obj);
    if (entries.length === 0) return '{}';
    
    const props = entries.map(([key, value]) => {
      const formattedKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
      return `${formattedKey}: ${formatAsTS(value, indent + 1)}`;
    }).join(',\n');
    
    return `{\n${nextSpaces}${props.split('\n').join(`\n${nextSpaces}`)}\n${spaces}}`;
  };

  const updateField = (section: string, field: string, value: any) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };


  return (
    <div className="section" style={{ minHeight: '100vh', background: 'var(--color-background)' }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            padding: '2rem',
            background: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            border: '2px solid var(--color-accent)'
          }}
        >
          <div>
            <h1 style={{ marginBottom: '0.5rem' }}>Content Editor</h1>
            <p style={{ color: 'var(--color-text-light)', margin: 0 }}>
              Edit your portfolio content visually. Changes save to browser storage.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="button button-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              {isEditing ? <Eye size={18} /> : <Edit size={18} />}
              {isEditing ? 'Preview' : 'Edit'}
            </button>
            <button
              onClick={handleSave}
              className="button button-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Save size={18} />
              Save
            </button>
            <button
              onClick={handleExport}
              className="button button-secondary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Download size={18} />
              Export JSON
            </button>
            <button
              onClick={handleUpdateContentTs}
              className="button button-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-accent)', color: 'var(--color-primary)' }}
            >
              <Save size={18} />
              Copy TS Code
            </button>
          </div>
        </motion.div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          borderBottom: '2px solid var(--color-border)',
          paddingBottom: '1rem'
        }}>
          {[
            { id: 'hero', label: 'Hero Section' },
            { id: 'featured', label: 'Featured Project' },
            { id: 'site', label: 'Site Config' },
            { id: 'about', label: 'About' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.75rem 1.5rem',
                background: activeTab === tab.id ? 'var(--color-secondary)' : 'transparent',
                color: activeTab === tab.id ? 'white' : 'var(--color-text)',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                fontWeight: 500,
                transition: 'all var(--transition-base)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Editor */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'var(--color-surface)',
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)'
          }}
        >
          {activeTab === 'hero' && (
            <HeroEditor 
              content={content.hero} 
              updateField={(field, value) => updateField('hero', field, value)}
              isEditing={isEditing}
            />
          )}
          
          {activeTab === 'featured' && (
            <FeaturedEditor 
              content={content.featured} 
              updateField={(field, value) => updateField('featured', field, value)}
              isEditing={isEditing}
            />
          )}
          
          {activeTab === 'site' && (
            <SiteConfigEditor 
              content={content.site} 
              updateField={(field, value) => updateField('site', field, value)}
              isEditing={isEditing}
            />
          )}
          
          {activeTab === 'about' && (
            <AboutEditor 
              content={content.about} 
              updateField={(field, value) => updateField('about', field, value)}
              isEditing={isEditing}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}

// Hero Editor Component
function HeroEditor({ content, updateField, isEditing }: { content: any; updateField: (field: string, value: any) => void; isEditing: boolean }) {
  if (!isEditing) {
    return (
      <div>
        <h2 style={{ marginBottom: '1rem' }}>Hero Section Preview</h2>
        <h1 className="hero-title">{content.headline}</h1>
        <p className="hero-subtitle">{content.subheadline}</p>
        <p className="hero-bio">{content.bio}</p>
        <div className="stats-grid" style={{ marginTop: '2rem' }}>
          {content.stats?.map((stat: any, idx: number) => (
            <div key={idx} className="stat-card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: '2rem' }}>Edit Hero Section</h2>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Headline
        </label>
        <textarea
          value={content.headline}
          onChange={(e) => updateField('headline', e.target.value)}
          style={{
            width: '100%',
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'var(--font-body)',
            fontSize: '1.125rem',
            minHeight: '80px'
          }}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Subheadline
        </label>
        <input
          type="text"
          value={content.subheadline}
          onChange={(e) => updateField('subheadline', e.target.value)}
          style={{
            width: '100%',
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'var(--font-body)'
          }}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Bio
        </label>
        <textarea
          value={content.bio}
          onChange={(e) => updateField('bio', e.target.value)}
          style={{
            width: '100%',
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            minHeight: '120px'
          }}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 600 }}>
          Stats
        </label>
        {content.stats?.map((stat: any, idx: number) => (
          <div key={idx} style={{
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '1rem'
          }}>
            <input
              type="text"
              value={stat.number}
              onChange={(e) => {
                const newStats = [...content.stats];
                newStats[idx].number = e.target.value;
                updateField('stats', newStats);
              }}
              placeholder="Number"
              style={{
                width: '100%',
                padding: '0.5rem',
                marginBottom: '0.5rem',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)'
              }}
            />
            <input
              type="text"
              value={stat.label}
              onChange={(e) => {
                const newStats = [...content.stats];
                newStats[idx].label = e.target.value;
                updateField('stats', newStats);
              }}
              placeholder="Label"
              style={{
                width: '100%',
                padding: '0.5rem',
                marginBottom: '0.5rem',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)'
              }}
            />
            <textarea
              value={stat.description}
              onChange={(e) => {
                const newStats = [...content.stats];
                newStats[idx].description = e.target.value;
                updateField('stats', newStats);
              }}
              placeholder="Description"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-sm)',
                minHeight: '60px'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Featured Project Editor
function FeaturedEditor({ content, updateField, isEditing }: { content: any; updateField: (field: string, value: any) => void; isEditing: boolean }) {
  if (!isEditing) {
    return (
      <div>
        <h2 style={{ marginBottom: '1rem' }}>Featured Project Preview</h2>
        <h3>{content.title}</h3>
        <p style={{ fontStyle: 'italic', color: 'var(--color-secondary)', marginBottom: '1rem' }}>
          {content.subtitle}
        </p>
        <p>{content.longDescription}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: '2rem' }}>Edit Featured Project</h2>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Title
        </label>
        <input
          type="text"
          value={content.title}
          onChange={(e) => updateField('title', e.target.value)}
          style={{
            width: '100%',
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)'
          }}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Subtitle
        </label>
        <input
          type="text"
          value={content.subtitle}
          onChange={(e) => updateField('subtitle', e.target.value)}
          style={{
            width: '100%',
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)'
          }}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Long Description
        </label>
        <textarea
          value={content.longDescription}
          onChange={(e) => updateField('longDescription', e.target.value)}
          style={{
            width: '100%',
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            minHeight: '150px'
          }}
        />
      </div>
    </div>
  );
}

// Site Config Editor
function SiteConfigEditor({ content, updateField, isEditing }: { content: any; updateField: (field: string, value: any) => void; isEditing: boolean }) {
  if (!isEditing) {
    return (
      <div>
        <h2 style={{ marginBottom: '1rem' }}>Site Configuration Preview</h2>
        <p><strong>Name:</strong> {content.name}</p>
        <p><strong>Email:</strong> {content.email}</p>
        <p><strong>Website:</strong> {content.website}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: '2rem' }}>Edit Site Configuration</h2>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Name
        </label>
        <input
          type="text"
          value={content.name}
          onChange={(e) => updateField('name', e.target.value)}
          style={{
            width: '100%',
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)'
          }}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Email
        </label>
        <input
          type="email"
          value={content.email}
          onChange={(e) => updateField('email', e.target.value)}
          style={{
            width: '100%',
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)'
          }}
        />
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Website
        </label>
        <input
          type="text"
          value={content.website}
          onChange={(e) => updateField('website', e.target.value)}
          style={{
            width: '100%',
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)'
          }}
        />
      </div>
    </div>
  );
}

// About Editor
function AboutEditor({ content, updateField, isEditing }: { content: any; updateField: (field: string, value: any) => void; isEditing: boolean }) {
  if (!isEditing) {
    return (
      <div>
        <h2 style={{ marginBottom: '1rem' }}>About Section Preview</h2>
        <p>{content.professionalIdentity}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: '2rem' }}>Edit About Section</h2>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Professional Identity
        </label>
        <textarea
          value={content.professionalIdentity}
          onChange={(e) => updateField('professionalIdentity', e.target.value)}
          style={{
            width: '100%',
            padding: '1rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            minHeight: '150px'
          }}
        />
      </div>
    </div>
  );
}
