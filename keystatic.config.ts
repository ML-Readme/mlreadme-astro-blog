// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

const REPO_OWNER = 'jgeofil';
const REPO_NAME = 'mlreadme-astro-blog';


export default config({
    storage: {
        kind: 'github',
        repo: `${REPO_OWNER}/${REPO_NAME}`
    },
  collections: {
    posts: collection({
      label: 'Short',
      slugField: 'title',
      path: 'src/data/shorts/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),
  },
});