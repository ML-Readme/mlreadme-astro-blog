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
  output: "server",
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
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      nesting: true,
    }),
    sanity({
      projectId: "fblwvub6",
      dataset: "production",
      token: import.meta.env.SANITY_API_WRITE_TOKEN,
      useCdn: true,
      apiVersion: "2024-10-01",
      studioBasePath: '/admin',
    }),
    react(),
  ]
});