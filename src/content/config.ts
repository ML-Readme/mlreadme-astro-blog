import { defineCollection, z } from 'astro:content';
import { Image, imageConfig } from "astro:assets";

const blogCollection = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		keywords: z.string(),
		tags: z.array(z.string()),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image()
	}),
});

export const collections = { "blog": blogCollection };
