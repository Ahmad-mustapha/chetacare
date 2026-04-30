import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://chetacare.com';

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/partner', priority: '0.7', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
  { path: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { path: '/terms', priority: '0.5', changefreq: 'yearly' },
];

// We would ideally import blogPosts here, but since it's TS and this is a JS script, 
// I'll parse it or just manually keep it in sync for now, OR better, 
// I'll write a script that can handle TS if I have ts-node.
// For now, I'll just manually add the 5 existing blog posts to be safe, 
// but I'll make it easy to update.

const blogPostIds = [1, 2, 3, 4, 5];
blogPostIds.forEach(id => {
  pages.push({ path: `/blog/${id}`, priority: '0.7', changefreq: 'monthly' });
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');
