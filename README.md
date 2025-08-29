# LifeCoach Library

A comprehensive resource hub for life coaches with free templates, business guides, and proven methodologies.

## Features

- **Free Templates**: Intake forms, session plans, progress trackers
- **Business Guides**: Complete guides for starting and scaling a coaching practice
- **Proven Methods**: GROW, CLEAR, SMART frameworks and coaching models
- **SEO Optimized**: Built for search engine visibility and organic traffic
- **Mobile Responsive**: Optimized for all devices
- **Fast Performance**: Lighthouse score 90+ on mobile

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages (Static Export)
- **Content**: MDX for articles
- **SEO**: Built-in metadata and schema markup

## Quick Start

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
```

The project is configured for automatic deployment to GitHub Pages via GitHub Actions.

## Content Structure

- `/guides` - Business and practice guides
- `/workflows` - Client management workflows
- `/methods` - Coaching methodologies
- `/growth` - Marketing and growth strategies
- `/templates` - Downloadable templates and resources

## SEO Features

- Automatic sitemap generation
- Schema markup (Article, FAQ, Organization)
- Open Graph and Twitter meta tags
- Optimized images and performance
- Mobile-first responsive design

## SEO Best Practices for GitHub Pages Deployment

### 🚀 **SEO-Safe Deployment**

Your SEO issues were likely caused by URL mismatches between your canonical URLs and the actual deployment URLs. Here's what's been fixed:

#### **Environment-Aware Configuration**
- ✅ **Dynamic URL Detection**: Site URLs now adapt to different environments
- ✅ **Canonical URL Consistency**: All canonical URLs match the deployment environment
- ✅ **Sitemap & Robots.txt**: Automatically generated with correct URLs

#### **Deployment Commands**

**Use this SEO-safe deployment command:**
```bash
npm run deploy:seo-safe
```

**Instead of the old command:**
```bash
npm run deploy  # This can cause SEO issues
```

#### **Environment Variables**

Create a `.env.local` file for local development:
```bash
cp .env.example .env.local
```

For production deployment, ensure `NEXT_PUBLIC_SITE_URL` is set to:
```
https://adityabandi.github.io/LifeCoach-library
```

### 🔍 **SEO Health Checklist**

Before deploying, verify these SEO elements:

- [ ] **Canonical URLs**: All pages have correct canonical URLs
- [ ] **Sitemap**: Accessible at `/sitemap.xml`
- [ ] **Robots.txt**: Accessible at `/robots.txt`
- [ ] **Meta Tags**: Title, description, and Open Graph tags present
- [ ] **Structured Data**: Schema.org markup for articles
- [ ] **Internal Links**: All internal links use relative paths or correct base URLs

### 🛠️ **Troubleshooting SEO Issues**

#### **If SEO Still Drops After Deployment:**

1. **Check URL Consistency**:
   ```bash
   # Verify your site is accessible
   curl -I https://adityabandi.github.io/LifeCoach-library/
   ```

2. **Validate Sitemap**:
   ```bash
   # Check sitemap is accessible
   curl -I https://adityabandi.github.io/LifeCoach-library/sitemap.xml
   ```

3. **Clear Cache**:
   - GitHub Pages may cache old versions
   - Wait 10-15 minutes after deployment
   - Check GitHub Pages deployment status

4. **Verify Environment Variables**:
   ```bash
   # During build, ensure NEXT_PUBLIC_SITE_URL is set
   NEXT_PUBLIC_SITE_URL=https://adityabandi.github.io/LifeCoach-library npm run build
   ```

#### **Common SEO Issues & Solutions:**

| Issue | Symptom | Solution |
|-------|---------|----------|
| **URL Mismatch** | Canonical URLs don't match actual URLs | Use environment-aware configuration |
| **Missing Sitemap** | Search engines can't find pages | Ensure sitemap.xml is generated |
| **Broken Internal Links** | Links point to wrong paths | Use relative URLs or proper basePath |
| **Caching Problems** | Old content still showing | Wait for cache to clear, force refresh |
| **Meta Tag Issues** | Wrong titles/descriptions in search | Verify generateSEO function usage |

### 📈 **Monitoring SEO Performance**

After deployment, monitor these metrics:

1. **Search Console**: Check for crawl errors and indexing status
2. **Page Speed**: Ensure fast loading times
3. **Mobile Usability**: Verify mobile-friendly design
4. **Core Web Vitals**: Monitor loading performance

### 🔧 **Advanced SEO Configuration**

For even better SEO, consider adding:

- **Google Analytics**: Track user behavior
- **Search Console**: Monitor search performance  
- **Rich Snippets**: Enhanced search results
- **Social Media Cards**: Better social sharing

The new configuration ensures your SEO won't crash on future deployments! 🎯

## License

MIT License - Free for personal and commercial use.