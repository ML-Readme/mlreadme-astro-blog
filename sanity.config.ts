// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/schemas'

export default defineConfig({
    name: 'ml-readme',
    title: 'ML Readme',
    projectId: 'ph4slmv9',
    dataset: 'development',
    plugins: [structureTool(),
    ],
    schema: {
        types: schemaTypes,
    },
})