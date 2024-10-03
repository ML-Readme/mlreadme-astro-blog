// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schema} from './src/schemas'

export default defineConfig({
    name: 'ml-readme',
    title: 'ML Readme',
    projectId: 'ph4slmv9',
    dataset: 'development',
    plugins: [structureTool(), //TODO Add portabletext, astro-sanity-picture plugin
    ],
    schema
})