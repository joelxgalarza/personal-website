# joelgalarza.com

Personal website for Joel Galarza. Built for ranking #1 on "Joel Galarza" search, AEO/SEO optimization, and signaling to other operators.

## Structure

- `public/` - Static site content
- `public/index.html` - Homepage
- `public/now.html` - Now page (freshness signal)
- `public/css/` - Stylesheets
- `public/assets/` - Images, fonts, documents
- `public/robots.txt` - SEO
- `public/sitemap.xml` - SEO

## Running locally

```bash
npm run dev
```

Serves site at http://localhost:3000

## Deployment

Currently deployed on Netlify. Push to main branch to trigger automatic deploy.

## Tech

- Plain HTML/CSS (static site)
- Netlify (hosting)
- Person schema (JSON-LD) for SEO
