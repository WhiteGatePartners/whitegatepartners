import { defineType, defineArrayMember, defineField } from 'sanity'

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'External link',
            fields: [
              { name: 'href', type: 'url', title: 'URL' },
              {
                name: 'blank',
                type: 'boolean',
                title: 'Open in new tab',
                initialValue: true,
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
    }),
    defineArrayMember({
      type: 'object',
      name: 'ctaBlock',
      title: 'Call to action',
      description:
        'A highlighted prompt with a button. Drop it anywhere in the article — commonly mid-way or just before the closing paragraph.',
      fields: [
        defineField({
          name: 'text',
          type: 'text',
          rows: 2,
          title: 'Prompt',
          description: 'The line above the button.',
          initialValue: 'Thinking through a hire like this? Let’s talk it over.',
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'label',
          type: 'string',
          title: 'Button label',
          initialValue: 'Get in touch',
          validation: (r) => r.required(),
        }),
        defineField({
          name: 'href',
          type: 'string',
          title: 'Button link',
          description:
            'Leave as /contact to point at the Get in touch page, or paste a full URL.',
          initialValue: '/contact',
          validation: (r) => r.required(),
        }),
      ],
      preview: {
        select: { title: 'label', subtitle: 'text' },
        prepare: ({ title, subtitle }) => ({
          title: `CTA — ${title ?? ''}`,
          subtitle,
        }),
      },
    }),
  ],
})
