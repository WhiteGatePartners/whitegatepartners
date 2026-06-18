import { defineField, defineType } from 'sanity'

export const jobListing = defineType({
  name: 'jobListing',
  title: 'Job Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'Full-time' },
          { title: 'Part-time', value: 'Part-time' },
          { title: 'Contract', value: 'Contract' },
        ],
      },
      initialValue: 'Full-time',
    }),
    defineField({
      name: 'level',
      title: 'Experience Level',
      type: 'string',
      placeholder: 'e.g. 2–5 years experience',
    }),
    defineField({
      name: 'active',
      title: 'Active (visible on website)',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'description',
      title: 'Role Description',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'team',
    },
  },
})
