// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import {schema} from './src/schemas'

export default defineConfig({
    name: 'ml-readme',
    title: 'ML Readme',
    projectId: "fblwvub6",
    dataset: "production",
    token: import.meta.env.SANITY_API_WRITE_TOKEN,
    plugins: [
        structureTool(), //TODO Add portabletext, astro-sanity-picture plugin
        visionTool()
    ],
    schema
})
