// keystatic.config.ts
import Bookmark from '@components/Bookmark.astro';
import { config, fields, collection } from '@keystatic/core';

const REPO_OWNER = 'jgeofil';
const REPO_NAME = 'mlreadme-astro-blog';


export default config({
    storage: {
        kind: 'local',//'github',
        //repo: `${REPO_OWNER}/${REPO_NAME}`
    },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'id',
      path: 'src/data/blog/*',
      format: { contentField: 'content' },
      schema: {
        id: fields.slug({ name: { label: 'ID' } }),
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description' }),
        pubDate: fields.date({ label: 'Publication Date' }),
        updatedDate: fields.date({ label: 'Updated Date' }),
        sections: fields.text({ label: 'Sections' }),
        tags: fields.array(fields.text({ label: 'Tags' })),
        cover: fields.object({
          alt: fields.text({ label: 'Alt' }),
          src: fields.text({ label: 'Src' })
        }),
        content: fields.mdx({ 
          label: 'Content'
        }),
      },
    }),
  },
});