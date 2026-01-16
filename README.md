# Patricia Valladares-Ruiz Portfolio Website

Modern, elegant React + TypeScript portfolio site optimized for easy updates via Cursor and AI tools.

## 🎨 Design Features

- **Distinctive Typography**: Cormorant Garamond (display) + Work Sans (body)
- **Academic Color Palette**: Deep navy, saddle brown, and gold accents
- **Smooth Animations**: Framer Motion for elegant page transitions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Vite for instant hot reload

## 📁 Project Structure

```
portfolio-site/
├── src/
│   ├── content.ts          ← **EDIT THIS FILE TO UPDATE CONTENT**
│   ├── index.css           ← Design system and styles
│   ├── App.tsx             ← Main app with routing
│   ├── main.tsx            ← Entry point
│   ├── components/
│   │   ├── Navigation.tsx  ← Site navigation
│   │   └── Footer.tsx      ← Site footer
│   └── pages/
│       ├── HomePage.tsx    ← Landing page
│       ├── ProjectsPage.tsx ← Digital projects
│       ├── ResearchPage.tsx ← Publications & research
│       ├── TeachingPage.tsx ← Teaching & mentorship
│       ├── AboutPage.tsx    ← About section
│       └── ContactPage.tsx  ← Contact information
├── package.json
├── vite.config.ts
├── tsconfig.json
└── index.html
```

## 🚀 Quick Start

### Installation

```bash
cd portfolio-site
npm install
npm run dev
```

The site will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be in the `dist/` folder, ready to deploy.

## ✏️ How to Update Content (Important!)

**ALL your content lives in ONE FILE: `src/content.ts`**

### To Update Your Site:

1. Open `src/content.ts`
2. Find the section you want to update (everything is clearly labeled)
3. Edit the text/data
4. Save the file
5. The site updates instantly (if dev server is running)

### What You Can Update in content.ts:

#### Basic Info
```typescript
export const siteConfig = {
  name: "Patricia Valladares-Ruiz",
  email: "pat.valladares@uc.edu",
  phone: "(513) 432-6845",
  // ... update contact info here
}
```

#### Projects
```typescript
export const projects = [
  {
    id: "your-project",
    title: "Project Title",
    summary: "Brief description",
    tech: ["Python", "React"],
    // ... add new projects or edit existing ones
  }
]
```

#### Publications
```typescript
export const selectedPublications = [
  {
    title: "Article Title",
    journal: "Journal Name",
    year: "2025",
    // ... add new publications
  }
]
```

#### Courses
```typescript
export const teachingHighlights = [
  {
    title: "Course Name",
    code: "COURSE101",
    semester: "Fall 2026",
    // ... update courses
  }
]
```

**You typically DON'T need to edit React components** unless you're changing the layout/design.

## 🤖 Using with Cursor / AI Tools

This site is optimized for AI-assisted editing:

### With Cursor

1. Open the `portfolio-site` folder in Cursor
2. Use Cmd+K (or Ctrl+K) to chat with AI
3. Ask: "Update my projects section to add [new project details]"
4. Cursor will edit `content.ts` for you

### With ChatGPT / Claude

1. Copy content from `src/content.ts`
2. Ask: "Update this to add a new publication: [details]"
3. Copy the updated code back into `content.ts`

### Example Prompts

- "Add my new article about [topic] to the publications section"
- "Update my bio to mention [new achievement]"
- "Add a new digital project called [name] with these details: [details]"
- "Change my phone number to [new number]"

## 🎨 Design Customization

### To Change Colors

Edit `src/index.css` CSS variables:

```css
:root {
  --color-primary: #1a1a2e;      /* Main dark color */
  --color-secondary: #8b4513;     /* Accent color */
  --color-accent: #d4af37;        /* Highlight color */
}
```

### To Change Fonts

Edit the Google Fonts import in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');

:root {
  --font-display: 'Your Display Font', serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

## 📦 Deployment Options

### Option 1: Netlify (Recommended - Free)

1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Done! Auto-deploys on every push

### Option 2: Vercel (Free)

1. Push code to GitHub
2. Import project in Vercel
3. Framework preset: Vite
4. Done! Auto-deploys on every push

### Option 3: GitHub Pages (Free)

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 Adding New Pages

If you need a completely new page:

1. Create `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/newpage" element={<NewPage />} />
   ```
3. Add to navigation in `src/content.ts`:
   ```tsx
   { name: "New Page", href: "/newpage" }
   ```

## 🐛 Troubleshooting

**Site won't start?**
- Run `npm install` first
- Check you're in the `portfolio-site` folder

**Changes not showing?**
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Restart dev server: Ctrl+C then `npm run dev`

**Build fails?**
- Check for TypeScript errors: `npm run build`
- Make sure all imports in content.ts are correct

## 📧 Need Help?

The code is well-commented. If you're stuck:
1. Check the comments in `content.ts`
2. Ask Cursor/ChatGPT: "Explain this code: [paste code]"
3. The structure is simple: data in `content.ts`, display in components

## 🔄 Version Control Tips

Track your changes with git:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin [your-github-repo]
git push -u origin main
```

Update workflow:
```bash
# Make changes to content.ts
git add src/content.ts
git commit -m "Update publications"
git push
```

---

**Key Principle**: 99% of updates happen in `src/content.ts`. You rarely need to touch component files!
