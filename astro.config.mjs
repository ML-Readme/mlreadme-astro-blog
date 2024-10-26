import { defineConfig, envField } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'
import keystatic from '@keystatic/astro'
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';


// https://astro.build/config
export default defineConfig({
    site: 'https://mlread.me',
    adapter: vercel({
        edgeMiddleware: true
    }),
    root: './',
    output: 'server',
    server: { port: 3000, host: "127.0.0.1" },
    build: {},
    integrations: [mdx(), sitemap(), keystatic(),
    tailwind({
        applyBaseStyles: false
		}), react(), markdoc()],
    image: {
        domains: [
            "https://cdn.simpleicons.org"
        ] 
    },
    env: {
        schema: {
            PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: envField.string({ context: "client", access: "public", optional: false }), 
        }
      }
})