# 🚀 DEPLOYMENT GUIDE

## Step-by-Step Setup & Deployment

### Prerequisites

- Node.js 18+ installed ([download here](https://nodejs.org/))
- A code editor (Cursor, VS Code, or any editor)
- GitHub account (free)

---

## Part 1: Local Setup (5 minutes)

### 1. Extract the Files

You have a folder called `portfolio-site/`. This is your complete website.

### 2. Install Dependencies

Open terminal in the `portfolio-site` folder and run:

```bash
npm install
```

This downloads all required packages (~2-3 minutes).

### 3. Start Development Server

```bash
npm run dev
```

Your site will open at `http://localhost:5173`. 

**You can now edit `src/content.ts` and see changes instantly!**

---

## Part 2: Customize Your Content (10 minutes)

### Open `src/content.ts` and update:

1. **Basic Info** (lines 8-21)
   - Your name, email, phone
   - Update social links when you have them

2. **Hero Content** (lines 23-56)
   - Your headline/tagline
   - Bio paragraph
   - Stats (7M+, 10+, 30+)

3. **Projects** (lines 72-onwards)
   - Each project has: title, summary, tech stack, impact
   - Featured projects show on homepage
   - Add/remove projects as needed

4. **Publications** (search for `selectedPublications`)
   - Add your latest articles
   - Format: title, journal, volume, year

5. **Books** (search for `export const books`)
   - Your published books
   - Add cover images later

6. **Teaching** (search for `teachingHighlights`)
   - Update course list
   - Add new courses

### Save after each change - the site updates live!

---

## Part 3: Add Your CV PDF

1. Create a folder: `portfolio-site/public/cv/`
2. Place your CV PDF there: `Patricia_Valladares_CV_2025.pdf`
3. The download link will work automatically

---

## Part 4: Deploy to Netlify (10 minutes, FREE)

### Why Netlify?
- Free hosting
- Automatic updates when you push to GitHub
- Custom domain support
- HTTPS included

### Step 1: Push to GitHub

```bash
# In your portfolio-site folder:
git init
git add .
git commit -m "Initial portfolio site"

# Create a new repo on GitHub called "portfolio-website"
# Then run:
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and authorize
4. Select your `portfolio-website` repository
5. Build settings (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Done!** Your site will be live in ~2 minutes at `random-name.netlify.app`

### Step 3: Custom Domain (Optional)

If you own `patriciavalladares.com`:

1. In Netlify: Domain settings → Add custom domain
2. Follow instructions to update DNS (usually adding A record)
3. Wait 24-48 hours for DNS propagation

---

## Part 5: Update Your Site (Ongoing)

### Workflow:

1. Edit `src/content.ts` locally
2. Test with `npm run dev`
3. When happy:
   ```bash
   git add src/content.ts
   git commit -m "Update publications"
   git push
   ```
4. Netlify auto-deploys in ~2 minutes

**You never need to manually rebuild or re-upload!**

---

## Alternative Deployment: Vercel

Very similar to Netlify:

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Auto-detects settings
4. Deploy!

---

## Alternative Deployment: GitHub Pages

More technical, but free:

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist",
   "homepage": "https://YOUR_USERNAME.github.io/portfolio-website"
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

Site will be at `YOUR_USERNAME.github.io/portfolio-website`

---

## Using Cursor to Update

### Setup Cursor

1. Download [Cursor](https://cursor.sh) (free)
2. Open `portfolio-site` folder in Cursor
3. Enable AI features (Cmd+K or Ctrl+K)

### Example Updates with Cursor

**Add a new publication:**
```
Cmd+K → "Add this publication to my research page:
Title: 'New Article Title'
Journal: Journal Name
Year: 2025
Topic: Migration & Diaspora"
```

Cursor edits `content.ts` for you!

**Update bio:**
```
Cmd+K → "Update my bio to mention I just won the XYZ Award"
```

**Add project:**
```
Cmd+K → "Add a new project:
Name: Project Name
Description: [paste description]
Tech: Python, React
Status: Active"
```

---

## File Structure Reference

```
portfolio-site/
├── src/
│   ├── content.ts          ← YOU EDIT THIS 99% OF THE TIME
│   ├── index.css           ← Design/colors (rarely edit)
│   ├── components/         ← Layout (rarely edit)
│   └── pages/              ← Page structure (rarely edit)
├── public/
│   └── cv/                 ← PUT YOUR CV PDF HERE
├── package.json
└── README.md
```

**Rule of thumb**: Edit `content.ts` for content, leave components alone unless changing design.

---

## Customization Beyond Content

### Change Colors

Edit `src/index.css` (lines 8-16):

```css
:root {
  --color-primary: #1a1a2e;      /* Change to your preferred dark color */
  --color-secondary: #8b4513;     /* Change to your preferred accent */
  --color-accent: #d4af37;        /* Change to your preferred highlight */
}
```

### Change Fonts

Edit `src/index.css` (line 6):

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

:root {
  --font-display: 'Your Font', serif;
  --font-body: 'Your Body Font', sans-serif;
}
```

Browse fonts at [Google Fonts](https://fonts.google.com)

---

## Adding Images

### Project Screenshots

1. Place images in `public/images/`
   - Example: `public/images/archivo-venezuela-hero.png`

2. Reference in `content.ts`:
   ```typescript
   image: "/images/archivo-venezuela-hero.png"
   ```

### Book Covers

1. Place in `public/images/books/`
2. Update in `books` array:
   ```typescript
   coverImage: "/images/books/your-book-cover.jpg"
   ```

---

## Troubleshooting Common Issues

### "Module not found" error
```bash
npm install
```

### Site won't start
```bash
# Delete node_modules and reinstall:
rm -rf node_modules
npm install
npm run dev
```

### Changes not appearing
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Clear browser cache
- Restart dev server

### TypeScript errors
- Check for typos in `content.ts`
- Make sure all object properties match the expected structure
- Run `npm run build` to see detailed errors

### Build fails on Netlify
- Check build logs in Netlify dashboard
- Usually due to TypeScript errors or missing dependencies
- Test locally with `npm run build` first

---

## Maintenance Schedule

### Weekly
- Update with new publications/projects as they happen
- Check site loads correctly

### Monthly
- Update dependencies: `npm update`
- Check for security alerts on GitHub
- Review analytics (if set up)

### As Needed
- Add new pages when career develops
- Refresh design every 1-2 years
- Update CV PDF

---

## Security Best Practices

1. **Never commit sensitive data** to GitHub
   - No passwords, API keys, etc.
   - Use `.env` files for secrets (already in .gitignore)

2. **Keep dependencies updated**
   ```bash
   npm audit
   npm audit fix
   ```

3. **Use HTTPS** (automatic with Netlify/Vercel)

---

## Performance Optimization

The site is already optimized, but you can:

1. **Compress images** before uploading
   - Use [TinyPNG](https://tinypng.com)
   - Keep under 200KB each

2. **Lazy load images** (if you add many)
   - Use `loading="lazy"` attribute

3. **Monitor with Lighthouse**
   - Chrome DevTools → Lighthouse tab
   - Aim for 90+ scores

---

## Getting Help

1. **Read the comments** in `content.ts` - very detailed
2. **Ask Cursor/ChatGPT**: "Explain this code: [paste code]"
3. **Check the console**: Errors show in browser console (F12)
4. **Netlify logs**: Show build errors in detail

---

## Next Steps

1. ✅ Set up locally (`npm install`, `npm run dev`)
2. ✅ Customize `content.ts` with your info
3. ✅ Add your CV PDF to `public/cv/`
4. ✅ Push to GitHub
5. ✅ Deploy to Netlify
6. ✅ (Optional) Add custom domain
7. ✅ Share your new site! 🎉

---

**Remember**: This site is designed for easy updates. 99% of changes happen in `content.ts` - no need to be a React expert!
