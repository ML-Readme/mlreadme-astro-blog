import { defineField, defineType } from "sanity";

export const citationType = defineType({
  name: "citation",
  title: "Citation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "url",
      type: "url",
    }),
  ],
});