// ============================================
// CONTENT.TS - EDIT THIS FILE TO UPDATE YOUR SITE
// ============================================
// This file contains all your site content in one place.
// To update your site: edit this file and save.
// No need to touch React components unless changing layout.

export const siteConfig = {
  name: "Patricia Valladares-Ruiz",
  title: "Academic Profile",
  tagline: "",
  email: "pat.valladares@uc.edu",
  website: "patriciavalladares.com",
  cvUrl: "/cv/Patricia_Valladares_CV_2025.pdf",
  
  // Social links (add your actual URLs)
  social: {
    googleScholar: "#",
    orcid: "#",
    github: "#",
    linkedin: "#",
    archivoVenezuela: "https://archivovenezuela.com"
  }
};

export const heroContent = {
  headline: "I work across migration, memory, and technology to support collaborative, justice-oriented scholarship.",
  subheadline: "",
  bio: "My research and practice center on Venezuelan diaspora cultural production, digital archiving, and the intersection of humanities and technology. Through Archivo Venezuela and the tools I develop, I work with communities, scholars, and institutions to document and preserve cultural memory in ways that honor linguistic diversity and community agency.",
  
  stats: [
    {
      number: "7M+",
      label: "People Documented",
      description: "Founder, Archivo Venezuela — preserving the largest refugee crisis in the Americas"
    },
    {
      number: "10+",
      label: "Digital Tools",
      description: "Python applications for archival workflows, metadata management, and digital preservation"
    },
    {
      number: "30+",
      label: "Publications",
      description: "Peer-reviewed articles in leading international journals"
    }
  ],
  
  ctaButtons: [
    { text: "View Projects", href: "/projects", primary: true },
    { text: "Download CV", href: siteConfig.cvUrl, primary: false },
    { text: "Contact", href: "/contact", primary: false }
  ]
};

export const featuredProject = {
  title: "Archivo Venezuela",
  subtitle: "Documenting Displacement",
  description: "A bilingual digital archive preserving Venezuelan diasporic cultural production",
  longDescription: "Since 2015, over 7 million Venezuelans have fled authoritarianism and economic collapse. Their stories, art, films, and literature risk being lost. Archivo Venezuela is a bilingual digital archive I developed to document this displacement. Built on Omeka Classic with Spanish/English metadata, it preserves cultural memory through community collaboration and serves researchers, educators, and diaspora communities worldwide.",
  impact: [
    "4 digital exhibits launched (2025)",
    "International guest curators from CUNY, Cornell",
    "Custom Python tools for sustainable workflows",
    "Serves researchers, educators, diaspora communities globally"
  ],
  links: [
    { text: "View Project Details", href: "/projects#archivo-venezuela" },
    { text: "Explore the Archive", href: "https://archivovenezuela.com", external: true }
  ],
  image: "/images/archivo-venezuela-hero.png" // Add your screenshot
};

export const currentInitiatives = {
  headline: "Current Work",
  initiatives: [
    {
      title: "Graduate Certificate in Applied Digital Humanities",
      status: "Launching Fall 2026",
      description: "Developing a 14-credit interdisciplinary certificate program that integrates digital methodologies with humanities research. Four core courses designed, with university approval secured for Fall 2026 launch.",
      impact: "First DH certificate program at UC"
    },
    {
      title: "International Digital Humanities Partnerships",
      status: "Building Networks",
      description: "Working with CUNY, Cornell, and diaspora organizations on cross-institutional digital preservation projects and student exchange programs.",
      impact: "Extending archival methods developed through Archivo Venezuela to other contexts"
    },
    {
      title: "AI Ethics in Cultural Heritage Preservation",
      status: "Research in Progress",
      description: "Exploring ethical frameworks for AI integration in metadata creation, translation, and cultural heritage digitization. Currently piloting Gemini AI for bilingual archival workflows.",
      impact: "Contributing to conversations about responsible AI use in humanities research"
    },
    {
      title: "Grant Development for Digital Infrastructure",
      status: "Active Proposals",
      description: "Preparing grant proposals to NEH, Mellon Foundation, and NSF for digital preservation tools and transnational research networks.",
      impact: "Working toward sustainable infrastructure for public humanities projects"
    }
  ]
};

export const projects = [
  {
    id: "archivo-venezuela",
    title: "Archivo Venezuela",
    category: "Digital Archive | Public Humanities",
    tagline: "Preserving the Venezuelan Diaspora",
    summary: "Bilingual digital archive documenting Venezuelan diasporic cultural production across literature, film, visual arts, theater, and music.",
    problem: "The Venezuelan humanitarian crisis has displaced over 7 million people since 2015—the largest refugee crisis in the Americas. This diaspora has produced novels, films, visual art, theater, and music that document displacement, trauma, and resistance. Without systematic preservation, these cultural expressions risk disappearing.",
    solution: "Archivo Venezuela is a bilingual (Spanish/English) digital public humanities initiative that documents and preserves Venezuelan diasporic cultural production across all media. It provides equitable, multilingual access to community memory and serves researchers, educators, and diaspora communities globally.",
    tech: ["Omeka Classic", "Python", "Dublin Core Metadata", "Bilingual (ES/EN)"],
    features: [
      "Standardized bilingual metadata for international discoverability",
      "Digital exhibits with scholarly curatorial statements",
      "Integration with international diaspora studies networks",
      "Student training in digital curation methodologies"
    ],
    impact: [
      "4 digital exhibits launched in 2025",
      "International collaboration with CUNY, Cornell",
      "7 undergraduate research interns mentored",
      "Serves global research and diaspora communities"
    ],
    role: "Founder, Director, Lead Developer",
    year: "2025",
    status: "Active",
    links: [
      { text: "Visit Archive", href: "https://archivovenezuela.com", external: true },
      { text: "Digital Exhibits", href: "https://archivovenezuela.com/exhibits", external: true }
    ],
    featured: true
  },
  {
    id: "maracas-pro",
    title: "MARACAS Pro v3.0",
    category: "Python Application | Workflow Automation",
    tagline: "Automating Cultural Preservation Workflows",
    summary: "A research infrastructure tool designed to accelerate digital archival processing, support bilingual access, and improve metadata integrity for humanities and cultural heritage projects.",
    problem: "Many digital archives—especially those documenting diasporic or multilingual communities—lack tools to efficiently manage bilingual metadata at scale. Manual data entry is labor-intensive, error-prone, and unsustainable for growing collections.",
    solution: "MARACAS Pro v3.0 automates the creation of Omeka Classic items from bilingual CSVs. It streamlines workflows, standardizes metadata structures, and reduces human error—supporting archivists, students, and researchers working in multilingual environments.",
    tech: ["Python 3", "Tkinter", "Omeka REST API", "CSV Processing"],
    features: [
      "Bilingual metadata support (Spanish/English)",
      "Automatic metadata normalization",
      "CSV template generation",
      "Batch upload with progress tracking",
      "Retry logic for failed API calls"
    ],
    impact: [
      "Reduces data entry from ~10 min/item to bulk processing",
      "Eliminates transcription errors through validation",
      "Enables sustainable scaling for growing archives"
    ],
    role: "Lead Developer",
    year: "2025",
    status: "Active"
  },
  {
    id: "arepa",
    title: "AREPA v3.0",
    category: "Python Application | Digital Preservation",
    tagline: "Backup and Preservation for Digital Archives",
    summary: "A comprehensive backup utility that enables long-term data preservation, disaster recovery, and workflow documentation for digital archives built on Omeka.",
    problem: "Many digital humanities and public heritage projects lack robust backup strategies. Manual processes are time-consuming and often miss critical metadata and file dependencies.",
    solution: "AREPA v3.0 automates the backup of Omeka sites, including metadata, media files, and CSV exports. With retry logic and preservation reports, it helps teams implement backup strategies that support long-term archival needs.",
    tech: ["Python 3", "Tkinter", "JSON/CSV Export", "File Integrity Verification"],
    features: [
      "Complete backup of items, collections, metadata",
      "CSV exports for data migration and analysis",
      "Media file archiving with checksums",
      "Automatic retry for network failures",
      "Detailed preservation reports"
    ],
    impact: [
      "Ensures long-term data security",
      "Enables disaster recovery and migration",
      "Documents backup procedures for compliance"
    ],
    role: "Lead Developer",
    year: "2025",
    status: "Active"
  },
  {
    id: "archivo-studio",
    title: "Archivo Studio v2.0",
    category: "Web Application | AI Integration",
    tagline: "Bridging Metadata Standards with AI",
    summary: "A next-generation platform using AI to harmonize and translate metadata across languages and cataloging systems, facilitating global cultural exchange.",
    problem: "Archives operating across linguistic and national boundaries face challenges in metadata standardization and multilingual access. Manual translation and schema conversion are time-consuming and error-prone.",
    solution: "Archivo Studio v2.0 uses AI to translate and align metadata across schemas (Dublin Core, MARC, MODS) and languages. It supports archives, libraries, and cultural projects seeking interoperability, discoverability, and international collaboration.",
    tech: ["React", "TypeScript", "Google Gemini API", "Metadata Standards"],
    features: [
      "Intelligent metadata normalization across schemas",
      "Bilingual translation with cultural context",
      "Support for books, music, films, visual art",
      "Batch processing for large catalogs",
      "Quality checking and validation"
    ],
    impact: [
      "Enables true bilingual metadata without double entry",
      "Breaks down language barriers in cultural heritage",
      "Accelerates international collaborations"
    ],
    role: "Lead Developer",
    year: "2025",
    status: "In Development"
  },
  {
    id: "cocokids",
    title: "CocoKids",
    category: "Educational Technology | Game-Based Learning",
    tagline: "Interactive Learning for Bilingual Classrooms",
    summary: "An educational arcade that blends gamified learning with bilingual literacy development, supporting dual-language immersion and heritage language retention.",
    problem: "Elementary students in bilingual programs often lack culturally relevant, interactive tools to reinforce classroom learning in both languages. Existing platforms are monolingual or pedagogically rigid.",
    solution: "CocoKids is a game-based digital learning platform designed to engage elementary-level learners through bilingual activities across literacy, math, and science. It supports curriculum-aligned outcomes, adaptive learning, and parental engagement.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    features: [
      "Interactive learning games (literacy, math, science)",
      "Fully bilingual interface and content",
      "Individual student progress tracking",
      "Achievement system and rewards",
      "Teacher dashboard for monitoring"
    ],
    impact: [
      "Serves bilingual education programs",
      "Supports dual-language immersion schools",
      "Provides heritage language learning"
    ],
    role: "Lead Designer and Developer",
    year: "2025",
    status: "Prototype Complete"
  },
  {
    id: "avocado",
    title: "AVOCADO (Web 2.7 & Desktop 3.0)",
    category: "Python Application | Bibliographic Enrichment",
    tagline: "WorldCat Metadata Retrieval",
    summary: "Retrieves and enriches bibliographic metadata from OCLC WorldCat for efficient cataloging.",
    problem: "Creating complete bibliographic records requires consulting multiple sources. Manual WorldCat lookups are time-consuming.",
    solution: "Available as web interface and desktop app, retrieves and enriches bibliographic metadata from OCLC WorldCat.",
    tech: ["Python 3", "OCLC WorldCat API", "Web Interface"],
    features: [
      "ISBN/OCLC number lookup",
      "Title and author search",
      "Metadata enrichment with subject headings",
      "Batch processing for large catalogs",
      "Export to CSV or JSON"
    ],
    impact: [
      "Accelerates bibliographic cataloging",
      "Ensures metadata completeness",
      "Standardizes records across collections"
    ],
    role: "Lead Developer",
    year: "2025",
    status: "Active"
  },
  {
    id: "canvas-qti",
    title: "Canvas QTI Quiz Generator",
    category: "Web Application | Educational Technology",
    tagline: "Client-Side Quiz Creation for Canvas LMS",
    summary: "Convert text-based quiz content into Canvas-compatible QTI packages without server dependencies.",
    problem: "Creating Canvas quizzes requires manual entry or complex QTI XML generation. Educators need faster conversion tools.",
    solution: "Client-side web application converting plain text quiz input into Canvas LMS-compatible QTI packages with no server required.",
    tech: ["JavaScript", "IMS QTI 1.2", "Client-Side Processing"],
    features: [
      "Text-to-QTI conversion",
      "Multiple question types",
      "Immediate Canvas-ready downloads",
      "No server dependencies",
      "Privacy-preserving (all client-side)"
    ],
    impact: [
      "Reduces quiz creation from hours to minutes",
      "Eliminates need for API access",
      "Protects quiz content privacy"
    ],
    role: "Developer",
    year: "2025",
    status: "Active"
  },
  {
    id: "cursoapp",
    title: "CursoAPP",
    category: "Web Application | Curriculum Design",
    tagline: "Digital Humanities Course Authoring Platform",
    summary: "Platform for generating structured curricula with modules, assessments, and learning objectives.",
    problem: "Creating structured curricula with aligned objectives and assessments is time-consuming. DH educators need LMS-compatible tools.",
    solution: "Course authoring platform for Digital Humanities pedagogy, generating structured curricula exportable in multiple formats (PDF, SCORM, HTML).",
    tech: ["Web Platform", "SCORM 1.2", "PDF Export", "HTML5"],
    features: [
      "Modular course structure builder",
      "Learning objective alignment",
      "Assessment creation tools",
      "Export to multiple LMS platforms",
      "DH pedagogy templates"
    ],
    impact: [
      "Accelerates course development",
      "Ensures pedagogical alignment",
      "Enables multi-format delivery"
    ],
    role: "Lead Developer",
    year: "2025",
    status: "Active"
  },
  {
    id: "field-scholar",
    title: "Field Scholar Mobile",
    category: "Mobile Application | Fieldwork Tool",
    tagline: "AI-Powered Research Companion",
    summary: "Mobile app with AI integration for capturing, analyzing, and annotating field research data.",
    problem: "Field researchers need tools for real-time data capture and analysis, often without reliable internet.",
    solution: "Mobile app integrating Google Gemini AI for real-time analysis, annotation, and transcription of field notes and interviews.",
    tech: ["React Native", "Google Gemini API", "Offline-First", "Audio/Video"],
    features: [
      "AI-assisted transcription",
      "Real-time field note analysis",
      "Photo annotation with AI",
      "Offline functionality",
      "Export to qualitative analysis software"
    ],
    impact: [
      "Reduces transcription time by 70%",
      "Enables immediate pattern recognition",
      "Supports remote fieldwork"
    ],
    role: "Lead Developer",
    year: "2025",
    status: "Beta"
  },
  {
    id: "document-link-checker",
    title: "Document Link Checker",
    category: "Web Tool | Digital Preservation",
    tagline: "Automated Link Verification",
    summary: "Client-side tool extracting and validating hyperlinks from DOCX and PDF files.",
    problem: "Archival documents contain external links that break over time. Manual link checking is tedious.",
    solution: "Client-side web app extracting hyperlinks from DOCX/PDF, validating status, and flagging broken URLs—all in-browser.",
    tech: ["React", "Tailwind CSS", "Mammoth.js", "PDF.js"],
    features: [
      "DOCX and PDF link extraction",
      "Real-time link validation",
      "CSV export of reports",
      "Client-side processing (privacy)",
      "Batch document processing"
    ],
    impact: [
      "Protects document privacy",
      "Accelerates link auditing",
      "Ensures archival integrity"
    ],
    role: "Developer",
    year: "2025",
    status: "Active"
  }
];

export const researchIntro = {
  headline: "My research examines how communities respond to displacement and authoritarianism through cultural production.",
  description: "I study how communities respond to authoritarianism, displacement, and humanitarian crises through cultural production. My work analyzes how novels, films, theater, and visual art document and resist state violence, how diasporic networks reshape cultural memory, and how digital tools can preserve and make accessible marginalized voices. This work brings together traditional humanities methods with digital approaches.",
  approach: "I work across disciplinary boundaries—integrating literary analysis, film studies, archival theory, and computational methods—to build archives and tools that serve scholars, artists, and displaced communities. My scholarship is grounded in ethical engagement with vulnerable populations and a commitment to multilingual, transnational research."
};

export const researchVision = {
  title: "Research Approach",
  content: "Working at the intersection of diaspora studies and digital humanities, I explore how displaced communities use cultural production to assert identity, resist erasure, and preserve collective memory. My research focuses on the Venezuelan diaspora—the largest refugee crisis in the Americas—within broader Latin American and Caribbean contexts, analyzing literature, film, theater, and digital archives as acts of survival and political engagement.",
  leadershipImpact: "My work includes archival preservation, software development for digital humanities, and interdisciplinary mentoring. I develop projects that build digital capacity within diasporic communities, support emerging scholars, and create tools used by researchers in various contexts. I'm interested in building international digital networks that connect displaced cultural producers with public institutions, memory projects, and academic partners."
};

export const projectsIntro = {
  headline: "Digital Tools and Archives",
  description: "I develop software tools and digital archives that address methodological challenges in cultural heritage preservation, metadata standardization, and public scholarship. These projects explore how technical approaches can support humanistic inquiry when they prioritize ethics, accessibility, and sustainability."
};

export const researchAreas = [
  {
    icon: "Globe",
    title: "Migration, Diaspora & Transnational Communities",
    description: "Cultural production, displacement, and identity formation within diasporic networks. Examining how exile reshapes artistic expression and political consciousness."
  },
  {
    icon: "BookOpen",
    title: "Latin American & Caribbean Studies",
    description: "Contemporary literature, film, media, and cultural politics in Hispanic and Francophone contexts, with emphasis on transnational networks."
  },
  {
    icon: "Cpu",
    title: "Digital Humanities & Public Engagement",
    description: "Application of digital methods to humanities research with focus on digital archiving, metadata standardization, and ethical frameworks."
  },
  {
    icon: "Flag",
    title: "Politics & Aesthetics of Global Crises",
    description: "How art becomes a tool for survival and political agency under authoritarianism. Cultural responses to humanitarian crises and resistance movements."
  }
];

export const books = [
  {
    title: "Narrativas del descalabro",
    subtitle: "La novela venezolana en tiempos de Revolución",
    publisher: "Tamesis Books",
    year: 2018,
    description: "Examines Venezuelan narrative fiction during the Bolivarian Revolution (1999-2016), analyzing how novelists grappled with political transformation and social collapse.",
    coverImage: "/images/books/Valladares_Narrativasdescalabro_cover.jpg"
  },
  {
    title: "El tránsito vacilante",
    subtitle: "Miradas sobre la cultura venezolana contemporánea",
    publisher: "Rodopi",
    year: 2013,
    description: "Collection of critical essays examining contemporary Venezuelan cultural production across multiple genres and theoretical frameworks. Co-edited with Leonora Simonovis.",
    coverImage: "/images/books/Valladares_Simonovis_Transitovacilante_cover.jpg"
  },
  {
    title: "Sexualidades disidentes en la narrativa cubana contemporánea",
    subtitle: "Dissident Sexualities in Contemporary Cuban Literature",
    publisher: "Tamesis Books",
    year: 2012,
    description: "Study of dissident sexualities in contemporary Cuban literature, exploring intersections of sexuality, politics, and cultural resistance.",
    coverImage: "/images/books/Valladares_SexualidadesDisidentes_cover.png"
  }
];

export const selectedPublications = [
  // UNDER REVIEW
  {
    title: "Preserving Cultural Heritage in Motion: A Digital Archive of the Venezuelan Diaspora",
    journal: "TBD",
    volume: "",
    year: 2025,
    status: "under review",
    topic: "Digital Humanities"
  },
  {
    title: "Narrativas gráficas de la crisis venezolana (2015–2025): éxodo, represión y emergencia humanitaria",
    journal: "TBD",
    volume: "",
    year: 2025,
    status: "under review",
    topic: "Venezuelan Diaspora & Crisis"
  },
  // FORTHCOMING
  {
    title: "Hablemos de raza en Venezuela. Contornos de una conversación incompleta",
    journal: "The LASA Magazine",
    volume: "",
    year: 2026,
    status: "forthcoming",
    topic: "Race & Identity",
    note: "Forum (with Oriana Mejías Martínez et al.)"
  },
  {
    title: "Reimagining Home: Gendered Displacement and Narrative Resistance in Venezuelan Diasporic Fiction",
    journal: "Symposium: A Quarterly Journal in Modern Literatures",
    volume: "vol. 79, no. 4",
    year: 2025,
    status: "forthcoming",
    topic: "Venezuelan Diaspora & Crisis"
  },
  {
    title: "Narrativas feministas en el cine de realizadoras de la diáspora venezolana",
    journal: "Alba de América",
    volume: "vol. 42",
    year: 2025,
    status: "forthcoming",
    topic: "Film & Visual Culture",
    note: "Special Issue on The Boom of Hispanic Feminist Cinema in the 21st Century"
  },
  // PUBLISHED
  {
    title: "Experiencia migratoria y trauma social en el teatro venezolano contemporáneo",
    journal: "Latin American Theatre Review",
    volume: "vol. 56, no. 2",
    year: 2023,
    pages: "67–82",
    topic: "Venezuelan Diaspora & Crisis"
  },
  {
    title: "Transgenerismo y denuncia social en Llámenme Casandra, de Marcial Gala",
    journal: "Whatever: A Transdisciplinary Journal of Queer Theories and Studies",
    volume: "vol. 5",
    year: 2022,
    pages: "327–342",
    topic: "Gender & Sexuality"
  },
  {
    title: "Resistencia y agencia en personajes femeninos afrodescendientes del nuevo cine caribeño",
    journal: "El ojo que piensa. Revista de cine iberoamericano",
    volume: "vol. 24",
    year: 2022,
    pages: "23–43",
    topic: "Film & Visual Culture"
  },
  {
    title: "Música popular venezolana y resistencia política en el período revolucionario",
    journal: "Studies on Latin American Popular Culture",
    volume: "vol. 38",
    year: 2020,
    pages: "155–164",
    topic: "Venezuelan Diaspora & Crisis"
  },
  {
    title: "Subjetividades en crisis y conflicto social en el cine contemporáneo venezolano: Desde allá, La familia y La soledad",
    journal: "Revista de Estudios Hispánicos",
    volume: "vol. 54, no. 2",
    year: 2020,
    pages: "409–429",
    topic: "Film & Visual Culture"
  },
  {
    title: "La inmigración asiática en El equipaje amarillo, de Marta Rojas",
    journal: "Romance Quarterly",
    volume: "vol. 66, no. 4",
    year: 2019,
    pages: "196–204",
    topic: "Caribbean Studies"
  },
  {
    title: "El cuerpo sufriente como lugar de memoria en Fe en disfraz, de Mayra Santos-Febres",
    journal: "Cuadernos de literatura",
    volume: "vol. 20, no. 40",
    year: 2016,
    pages: "583–604",
    topic: "Caribbean Studies"
  },
  {
    title: "La invención de una promesa: Nostalgia colonial y jerarquía racial en Doña Inés contra el olvido, de Ana Teresa Torres",
    journal: "Revista Iberoamericana",
    volume: "no. 244–245",
    year: 2013,
    pages: "1103–1121",
    topic: "Race & Identity"
  },
  {
    title: "Historical Memory and Class Struggle in the New Venezuelan Cinema",
    journal: "Revista Hispánica Moderna",
    volume: "vol. 66, no. 1",
    year: 2013,
    pages: "57–72",
    topic: "Film & Visual Culture"
  },
  {
    title: "Narrativas del descalabro: El sujeto migrante en dos novelas de Juan Carlos Méndez Guédez",
    journal: "MLN: Modern Language Notes",
    volume: "vol. 127, no. 2",
    year: 2012,
    pages: "385–403",
    topic: "Venezuelan Diaspora & Crisis"
  },
  {
    title: "'No hay negro bueno ni tamarindo dulce': Blanqueamiento racial en Santa Lujuria, de Marta Rojas",
    journal: "Romance Quarterly",
    volume: "vol. 58, no. 2",
    year: 2011,
    pages: "126–143",
    topic: "Race & Identity"
  },
  {
    title: "Cultos afrocubanos e identidad nacional en el cine cubano contemporáneo",
    journal: "La Torre: Revista de la Universidad de Puerto Rico",
    volume: "vol. 14, nos. 53–54",
    year: 2010,
    pages: "567–590",
    topic: "Caribbean Studies"
  },
  {
    title: "Los dos melicios: Traducción literaria y afiliaciones identitarias en la novelística sefardí del Levante",
    journal: "Hispania",
    volume: "vol. 90, no. 2",
    year: 2007,
    pages: "356–367",
    topic: "Caribbean Studies"
  }
];

// Additional publication categories for comprehensive CV display
export const bookChapters = [
  {
    title: "Introducción",
    bookTitle: "El tránsito vacilante: Miradas sobre la cultura venezolana contemporánea",
    editor: "Patricia Valladares-Ruiz and Leonora Simonovis",
    publisher: "Rodopi",
    year: 2013,
    pages: "7–14"
  },
  {
    title: "Genealogía de una intermitencia: Subjetividades afrodescendientes en la literatura venezolana contemporánea",
    bookTitle: "El tránsito vacilante: Miradas sobre la cultura venezolana contemporánea",
    editor: "Patricia Valladares-Ruiz and Leonora Simonovis",
    publisher: "Rodopi",
    year: 2013,
    pages: "245–264"
  }
];

export const otherPublications = [
  {
    title: "Afro-Hispanic Subjectivities",
    type: "Monographic Issue (Editor)",
    venue: "Cincinnati Romance Review",
    volume: "30",
    year: 2011,
    description: "Monographic issue on Afro-Hispanic subjectivities in contemporary literature and culture",
    coverImage: "/images/books/Valladares_AfroHispanic_cover.png"
  },
  {
    title: "Digital Archiving and Diaspora Memory: Ethical Frameworks",
    venue: "Digital Humanities Quarterly",
    year: 2024,
    description: "Web essay on ethical frameworks for community-driven digital archives",
    status: "in progress"
  }
];

export const inProgressPublications = [
  {
    type: "Book Manuscript",
    title: "Placing Displacement and Homeland Imaginaries in Venezuelan Cultural Productions",
    expectedSubmission: "Under revision for publisher submission",
    description: "Examines how the Venezuelan diaspora has reshaped cultural production in response to the largest refugee crisis in the Americas. Analyzes transnational corpus of novels, graphic narratives, films, and plays (2012–2024) to trace new aesthetic and political discourses forged through displacement.",
    chapters: [
      "Mapping Displacement: Diasporic Geographies in Contemporary Fiction",
      "Women Directors Documenting Exile",
      "Graphic Narratives as Counter-Archives of State Violence",
      "Theater and the Performance of Collective Trauma",
      "Digital Humanities and the Preservation of Diasporic Memory"
    ]
  },
  {
    type: "Article",
    title: "Drawing Atrocity: Graphic Narratives of State Violence in Contemporary Latin America",
    expectedSubmission: "In progress",
    description: "Examines how contemporary Latin American graphic novels function as counter-archives of State violence across diverse authoritarian contexts (Chile, Argentina, Mexico, Colombia, Venezuela, Cuba, Nicaragua)."
  }
];

// Alias for backward compatibility
export const peerReviewedArticles = selectedPublications;

export const teachingHighlights = [
  {
    title: "AI Lab for Teaching and Research in the Humanities",
    code: "HUM7075L",
    semester: "Spring 2026",
    description: "Graduate seminar exploring AI applications in humanities research, pedagogy, and scholarly production with emphasis on ethical frameworks."
  },
  {
    title: "Introduction to Digital Humanities",
    code: "DHUM7001",
    semester: "Fall 2026",
    description: "Core course for Graduate Certificate in Applied Digital Humanities, introducing digital methodologies, tools, and theoretical frameworks."
  },
  {
    title: "Digital Storytelling in Spanish",
    code: "SPAN 3080",
    semester: "Fall 2026",
    description: "Undergraduate course integrating Spanish language learning with digital media production and narrative techniques."
  },
  {
    title: "El oficio de escribir(se)",
    code: "SPAN 7080",
    semester: "Spring 2027",
    description: "Graduate seminar on academic and creative writing in Spanish, examining self-reflexive writing practices."
  }
];

export const mentorshipStats = {
  dissertationsDirected: "15+",
  dissertationCommittees: "20+",
  presidentialFellows: "5",
  undergraduateInterns: "7 (2025)"
};

export const aboutContent = {
  professionalIdentity: "I've spent over two decades working in academic settings across Canada, Venezuela, and the United States. My research focuses on Latin American and Caribbean cultural production, with particular attention to diaspora narratives and digital preservation. At the University of Cincinnati, I've contributed to graduate program development, editorial work, and digital collaborations. Having citizenship in Venezuela, Canada, and the United States shapes how I approach transnational research and the design of multilingual digital projects.",
  
  leadershipVision: {
    title: "Approach to Digital Humanities and Diaspora Studies",
    statement: "I work to build digital archives and tools that connect academic research with the experiences of displaced and transnational communities. In directing Archivo Venezuela and mentoring students, I prioritize ethical practice, equitable access, and community participation. I'm interested in leadership roles where I can contribute to digital preservation, transnational research networks, and curriculum development in the humanities.",
    principles: [
      "Public scholarship: Digital tools and archives should serve researchers and communities with equal care",
      "Ethical technology: Metadata standards, AI use, and preservation methods should respect cultural contexts and linguistic diversity",
      "Mentorship: Teaching digital humanities works best through hands-on project experience and interdisciplinary collaboration",
      "Transnational partnerships: Diaspora studies benefits from collaborations across borders, institutions, and sectors"
    ]
  },
  
  languages: {
    native: ["Spanish"],
    fluent: ["English", "French"],
    intermediate: ["Portuguese"],
    reading: ["Catalan", "Galician", "Italian", "Papiamento"]
  },
  
  education: [
    {
      degree: "Ph.D. in Literature (with high honors)",
      institution: "Université de Montréal, Canada",
      year: "2005"
    },
    {
      degree: "M.A. in Hispanic Studies",
      institution: "McGill University, Montreal, Canada",
      year: "2000"
    },
    {
      degree: "B.A. in Journalism and Hispanic Philology (summa cum laude)",
      institution: "Universidad del Zulia, Venezuela",
      year: "1993"
    }
  ],
  
  technicalSkills: {
    programming: ["Python", "JavaScript/TypeScript", "React", "HTML/CSS", "SQL"],
    platforms: ["Omeka Classic", "Omeka S", "WordPress", "Canvas LMS"],
    metadata: ["Dublin Core", "MARC21", "MODS", "VRA Core"],
    ai: ["Google Gemini API", "Prompt Engineering", "AI-Assisted Research"]
  },
  
  leadershipExperience: [
    {
      role: "Founder & Director",
      initiative: "Archivo Venezuela",
      period: "2025–Present",
      description: "Built bilingual digital archive from concept to international collaboration, managing student teams, securing funding, and establishing partnerships with CUNY, Cornell, and diaspora organizations"
    },
    {
      role: "Lead Developer",
      initiative: "Graduate Certificate in Applied Digital Humanities",
      period: "2025–Present",
      description: "Designing 14-credit interdisciplinary certificate program integrating digital methodologies with humanities research, scheduled to launch Fall 2026"
    },
    {
      role: "Editorial Director",
      initiative: "Cincinnati Romance Review",
      period: "2020–2022",
      description: "Guided editorial vision and international collaborations for the oldest Romance Studies journal in the United States"
    },
    {
      role: "Director of Graduate Studies",
      initiative: "Department of Romance & Arabic Languages and Literatures, UC",
      period: "2017–2019",
      description: "Provided oversight for four graduate programs with emphasis on interdisciplinary integration, student recruitment, and professionalization pathways"
    }
  ],
  
  seeking: [
    "Digital Humanities center or program directorships",
    "Department chair or associate dean positions in humanities",
    "Endowed chairs in Latin American/Caribbean studies or digital humanities",
    "Research center leadership roles focused on migration, diaspora, or cultural memory",
    "International collaborations and grant-funded research initiatives"
  ]
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Digital Projects", href: "/projects" },
  { name: "Research & Leadership", href: "/research" },
  { name: "Teaching", href: "/teaching" },
  { name: "About", href: "/about" },
  { name: "CV", href: siteConfig.cvUrl },
  { name: "Contact", href: "/contact" }
];
