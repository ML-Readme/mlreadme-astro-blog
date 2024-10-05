import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

User-agent: *
Disallow: /assets/
Disallow: /info/

Sitemap: https://mlread.me/sitemap.xml 
Sitemap: ${sitemapURL.href}
`;
//TODO dynamic www removal

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  return new Response(getRobotsTxt(sitemapURL));
};