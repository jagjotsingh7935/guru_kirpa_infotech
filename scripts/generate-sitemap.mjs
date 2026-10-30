// Writes public/sitemap.xml and public/robots.txt before every build.
// Set SITE_URL (for example https://gkinfotech.io) once the custom domain is connected.
import { readFileSync, writeFileSync } from 'node:fs';

const site = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL : '') ||
  'https://gkinfotech.io'
).replace(/\/+$/, '');

const projects = readFileSync(new URL('../src/data/projects.ts', import.meta.url), 'utf8');
const ids = [...projects.matchAll(/^ {4}id: "([^"]+)"/gm)].map((match) => match[1]);

const pages = ['/', '/services', '/projects', '/about', '/testimonials', '/contact', ...ids.map((id) => '/projects/' + id)];
const today = new Date().toISOString().slice(0, 10);
const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  pages.map((path) => `  <url><loc>${site}${path}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
  '\n</urlset>\n';

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
writeFileSync(new URL('../public/robots.txt', import.meta.url), `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`);
console.log(`sitemap: ${pages.length} URLs for ${site}`);
