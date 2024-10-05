import { defineField, defineType } from "sanity";

export const postType = defineType({
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string",
			validation: (Rule) => Rule.max(120).min(20),
		}),
		defineField({
			name: "description",
			type: "string",
			validation: (Rule) => Rule.max(120).min(20),
		}),
		defineField({
			name: "tags",
			type: "array",
			of: [{ type: "reference", to: { type: "tag" } }],
			validation: (Rule) => Rule.unique().required(),
			options: {
				layout: "tags",
				sortable: true,
				insertMenu: {
					filter: true,
				},
			},
		}),
		defineField({
			name: "keywords",
			type: "array",
			of: [{ type: "string" }],
			validation: (Rule) => Rule.unique().required(),
		}),
		defineField({
			name: "slug",
			type: "slug",
			validation: (Rule) => Rule.required(),
			options: {
				source: "title",
				maxLength: 100,
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, "-").slice(0, 100),
			},
		}),
    defineField({
      name: "publishedAt",
      type: "datetime",
	  validation: (Rule) => Rule.required(),
	  options: {
		dateFormat: 'YYYY-MM-DD'
	  }
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
		defineField({
			name: "image",
			type: "image",
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					validation: (Rule) => Rule.required(),
					title: "Alternative Text",
				},
				{
					name: "caption",
					type: "string",
					validation: (Rule) => Rule.required(),
					title: "Image caption.",
				},
			],
		}),
	],
});
