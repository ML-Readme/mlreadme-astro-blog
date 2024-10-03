import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro'
import react from '@astrojs/react'

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mlread.me',
  output: "hybrid",
  server: { port: 4321, host: true },
  redirects: {

  },
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind({
      nesting: true,
    }),
    sanity({
      projectId: 'ph4slmv9',
      dataset: 'development',
      useCdn: false,
      apiVersion: "2024-10-01",
      studioBasePath: '/admin',
    }),
    react(),
  ]
});