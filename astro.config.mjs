import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercelServerless from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://mlread.me',
  output: "hybrid",
  server: {
    port: 3000,
    host: true,
  },
  adapter: vercelServerless({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
    edgeMiddleware: true,
  }),
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [mdx(), sitemap({
    serialize(item) {
      if (/info/.test(item.url)) {
        return undefined;
      }
      if (/posts/.test(item.url)) { //TODO add function to return image urls to item.image and item.video
        item.changefreq = 'daily';
        item.lastmod = new Date();
        item.priority = 1;
        return item;
      }
      item.changefreq = 'weekly';
      item.lastmod = new Date();
      item.priority = 0.9;
      return item;
      },
      i18n: {
        defaultLocale: 'en', // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: {
          en: 'en-US', // The `defaultLocale` value must present in `locales` keys
          es: 'en-UK',
          fr: 'en-CA',
        },
      }
    }), tailwind({
    applyBaseStyles: false,
  }), sanity({
    projectId: "fblwvub6",
    dataset: "production",
    token: import.meta.env.SANITY_API_WRITE_TOKEN,
    useCdn: false,
    apiVersion: "2024-10-01",
    studioBasePath: '/admin',
  }), 
  react()]
});