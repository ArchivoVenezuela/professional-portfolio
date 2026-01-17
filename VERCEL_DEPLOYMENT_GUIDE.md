# Complete Vercel Deployment Guide

## 📋 Prerequisites

- ✅ GitHub repository: https://github.com/ArchivoVenezuela/professional-portfolio
- ✅ Code pushed to GitHub
- ✅ Vercel account (free tier works perfectly)

---

## 🚀 Step-by-Step Deployment Instructions

### Step 1: Sign Up / Sign In to Vercel

1. **Go to Vercel**: https://vercel.com
2. **Click "Sign Up"** (top right) or "Log In" if you already have an account
3. **Choose "Continue with GitHub"** (recommended for automatic deployments)
   - This connects your GitHub account to Vercel
   - Allows automatic deployments on every git push
4. **Authorize Vercel** when GitHub asks for permissions
   - Vercel needs access to your repositories to deploy them
   - You can limit access to specific repositories if preferred

### Step 2: Create New Project

1. **After signing in**, you'll see the Vercel dashboard
2. **Click "Add New Project"** button (usually a large button in the center)
   - Or click the "+" icon in the top right
   - Or go directly to: https://vercel.com/new

### Step 3: Import Your GitHub Repository

1. **On the "Create New Project" page**, you'll see two options:
   - **"Import Git Repository"** (choose this)
   - "Clone Template" (skip this)

2. **Click "Continue with GitHub"** button
   - This will show your GitHub repositories

3. **Search for your repository**:
   - Type: `professional-portfolio` in the search box
   - Or scroll to find: `ArchivoVenezuela/professional-portfolio`

4. **Click "Import"** next to your repository

### Step 4: Configure Project Settings

Vercel will auto-detect your project settings, but verify:

#### Framework Preset
- **Should show**: "Vite" or "Other"
- ✅ **Correct** - Vercel will detect Vite automatically

#### Root Directory
- **Leave as**: `./` (default)
- ✅ **Correct** - Your project is at the root

#### Build and Output Settings
- **Build Command**: `npm run build`
  - ✅ **Auto-detected** - This is correct
- **Output Directory**: `dist`
  - ✅ **Auto-detected** - This is correct
- **Install Command**: `npm install`
  - ✅ **Auto-detected** - This is correct

#### Environment Variables
- **Leave empty** for now (unless you have API keys or secrets)
- You can add these later in Project Settings

#### Project Name
- **Default**: `professional-portfolio`
- You can change this if you want a different URL

### Step 5: Deploy

1. **Review all settings** (they should all be correct)
2. **Click the "Deploy" button** (large button at the bottom)
3. **Wait for deployment** (~2-3 minutes)
   - You'll see a progress screen
   - Vercel will:
     - Install dependencies (`npm install`)
     - Build your project (`npm run build`)
     - Deploy to a live URL

### Step 6: Deployment Complete! 🎉

1. **You'll see a success screen** with:
   - ✅ "Congratulations! Your project has been deployed"
   - Your live URL: `https://professional-portfolio-[random-hash].vercel.app`

2. **Click "Visit"** to see your live site!

3. **Bookmark your deployment URL** - this is your live site!

---

## 🔄 Automatic Deployments

**Good news!** Vercel automatically deploys on every git push:

- ✅ Every time you push to `master` branch → Production deployment
- ✅ Every time you create a Pull Request → Preview deployment
- ✅ No manual deployment needed!

### How it works:
1. You make changes locally
2. Commit: `git commit -m "Update content"`
3. Push: `git push origin master`
4. Vercel automatically detects the push
5. Builds and deploys automatically (~2 minutes)
6. Your site updates live!

---

## 🎨 Custom Domain (Optional)

### Add Your Own Domain

1. **Go to your project** in Vercel dashboard
2. **Click "Settings"** tab
3. **Click "Domains"** in the left sidebar
4. **Enter your domain** (e.g., `patriciavalladares.com`)
5. **Follow DNS instructions**:
   - Vercel will show you DNS records to add
   - Add them to your domain registrar (GoDaddy, Namecheap, etc.)
   - Wait for DNS propagation (5 minutes to 48 hours)

### Domain Options:
- **Root domain**: `patriciavalladares.com`
- **Subdomain**: `www.patriciavalladares.com`
- **Both**: Vercel can handle both automatically

---

## ⚙️ Project Settings & Configuration

### Access Project Settings:
1. Go to Vercel Dashboard
2. Click on your project name
3. Click "Settings" tab

### Important Settings:

#### General
- **Project Name**: Change if needed
- **Framework**: Vite (auto-detected)
- **Node.js Version**: Auto-selected (usually latest LTS)

#### Build & Development Settings
- **Build Command**: `npm run build` ✅
- **Output Directory**: `dist` ✅
- **Install Command**: `npm install` ✅
- **Development Command**: `npm run dev` (for previews)

#### Environment Variables
- Add any secrets or API keys here
- Available in both build and runtime
- Examples:
  - `API_KEY=your-key-here`
  - `DATABASE_URL=your-db-url`

#### Git
- **Production Branch**: `master` (default)
- **Auto-deploy**: Enabled by default
- **Deploy Hooks**: For external triggers

---

## 🔍 Troubleshooting

### Build Fails

**Error**: "Build failed" or "Command failed"

**Solutions**:
1. **Check build logs** in Vercel dashboard
2. **Common issues**:
   - Missing dependencies → Check `package.json`
   - TypeScript errors → Run `npm run build` locally first
   - Missing files → Check `.gitignore` isn't excluding needed files
3. **Fix locally**, then push again:
   ```bash
   npm run build  # Test build locally
   git add .
   git commit -m "Fix build errors"
   git push origin master
   ```

### Site Shows 404 Errors

**Error**: Pages return 404

**Solution**: 
- ✅ Already fixed! The `vercel.json` includes SPA routing:
  ```json
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  ```
- This ensures all routes work correctly

### Images Not Loading

**Error**: Images show broken links

**Solutions**:
1. **Check image paths** in `content.ts`:
   - Should start with `/images/...` (not `./images/...`)
   - Example: `/images/books/cover.jpg` ✅
2. **Verify images are in `public/` folder**:
   - `public/images/books/cover.jpg` ✅
3. **Rebuild and redeploy**:
   ```bash
   git add public/images/
   git commit -m "Add images"
   git push origin master
   ```

### Admin Panel Not Working

**Note**: Admin panel saves to browser localStorage
- ✅ Works in production
- Changes are temporary (browser-specific)
- To make permanent: Export JSON and update `content.ts`

---

## 📊 Monitoring & Analytics

### View Deployments:
1. Go to project dashboard
2. Click "Deployments" tab
3. See all deployments with:
   - Status (Ready, Building, Error)
   - Commit message
   - Build time
   - Live URL

### View Logs:
1. Click on any deployment
2. See build logs and runtime logs
3. Debug any issues

### Analytics (Optional):
- Vercel Analytics: Built-in performance monitoring
- Enable in Project Settings → Analytics
- Free tier includes basic analytics

---

## 🔐 Security & Best Practices

### Environment Variables:
- ✅ Never commit secrets to GitHub
- ✅ Use Vercel Environment Variables for:
  - API keys
  - Database URLs
  - Private tokens

### Admin Panel:
- ⚠️ **Note**: Admin panel at `/admin` is publicly accessible
- **For production**, consider:
  - Adding authentication
  - Or removing the admin route
  - Or password-protecting it

### Performance:
- ✅ Vercel automatically:
  - Optimizes images
  - Enables CDN caching
  - Provides SSL certificates
  - Optimizes JavaScript bundles

---

## 📝 Post-Deployment Checklist

After successful deployment:

- [ ] Visit your live site URL
- [ ] Test all pages (Home, Projects, Research, Teaching, About, Contact)
- [ ] Test navigation links
- [ ] Verify images load correctly
- [ ] Test on mobile device
- [ ] Check admin panel at `/admin` (if needed)
- [ ] Set up custom domain (optional)
- [ ] Bookmark your deployment URL
- [ ] Share your site! 🎉

---

## 🆘 Need Help?

### Vercel Support:
- **Documentation**: https://vercel.com/docs
- **Community**: https://github.com/vercel/vercel/discussions
- **Status**: https://vercel-status.com

### Common Commands:

**Check deployment status**:
```bash
# View in Vercel dashboard, or use CLI:
npm i -g vercel
vercel ls
```

**Redeploy manually**:
- Go to Vercel dashboard
- Click "Redeploy" on latest deployment
- Or push a new commit

**View logs**:
- Vercel dashboard → Your project → Deployments → Click deployment → Logs

---

## 🎯 Quick Reference

**Your Repository**: https://github.com/ArchivoVenezuela/professional-portfolio

**Vercel Dashboard**: https://vercel.com/dashboard

**Deploy New Project**: https://vercel.com/new

**Project Settings**: Vercel Dashboard → Your Project → Settings

---

## ✅ Summary

1. ✅ Sign up/login to Vercel with GitHub
2. ✅ Click "Add New Project"
3. ✅ Import `ArchivoVenezuela/professional-portfolio`
4. ✅ Verify settings (auto-detected)
5. ✅ Click "Deploy"
6. ✅ Wait ~2 minutes
7. ✅ Visit your live site!

**That's it!** Your portfolio is now live and will auto-update on every git push.

---

**Last Updated**: January 2025
**Repository**: https://github.com/ArchivoVenezuela/professional-portfolio
