// ./src/sanity/schemaTypes/blockContent.ts
import { defineType, defineArrayMember } from "sanity";
import { UserIcon, AsteriskIcon, SchemaIcon, TagIcon, HighlightIcon, ChevronRightIcon, NumberIcon } from '@sanity/icons'

export const blockContentType = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" }
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
        { title: "Dash", value: "dash", icon: ChevronRightIcon },
        { title: "Notes", value: "notes", icon: NumberIcon }
      ],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline"},
          { title: "Strike", value: "strike-through" },
          { title: "Highlight", value: "highlight", icon: HighlightIcon }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
          {
            title: "Footnote",
            name: "footnote",
            type: "object",
            icon: AsteriskIcon,
            fields: [
              {
                name: 'block_ref',
                title: 'Footnote reference',
                type: 'reference',
                to: { type: 'block' }
              },
              {
                name: 'text',
                title: 'Footnote text',
                type: 'string'
              }
            ]
          },
          {
            title: "Tag link",
            name: "tag_link",
            type: "object",
            icon: TagIcon,
            fields: [
              {
                name: 'tag_ref',
                title: 'Tag reference',
                type: 'reference',
                to: { type: 'tag' }
              }
            ]
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
        {
          name: "caption",
          type: "string",
          title: "Image caption",
        }
      ],
    }),
    defineArrayMember({
      type: "object",
      name: "citation",
      title: "Citation",
      fields: [
        {
          name: "ref",
          type: "reference",
          to: [{ type: "citation" }],
        },
      ]
    })
  ],
});