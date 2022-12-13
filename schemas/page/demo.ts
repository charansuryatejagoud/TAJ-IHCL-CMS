export default {
    name: 'test',
    title: 'Test',
    type: 'document',
    fieldsets: [
        {name: 'social', title: 'Social media handles'}
      ],
    fields: [
        {
            name: 'video',
            title: 'Video',
            type: 'boolean',
        },
        {
            name: 'allLink',
            title: 'See all',
            type: 'brands',
            hidden: ({ parent }) => !(parent === null || parent === void 0 ? void 0 : parent.video),
        },
        {
            name: 'image',
            title: 'Image',
            type: 'boolean',
        },
        {
            name: 'alternateAllLink',
            title: 'Alternate See all',
            type: 'brands',
            hidden: ({ parent }) => !(parent === null || parent === void 0 ? void 0 : parent.image),
        },
        {
            name: 'fallback',
            title: 'Fallback format',
            type: 'file',
            options: {
                accept: 'video/mp4'
            }
        },
            {
              title: 'Name',
              name: 'name',
              type: 'string'
            },
            {
              title: 'Twitter',
              name: 'twitter',
              type: 'string',
              fieldset: 'social'
            },
            {
              title: 'Instagram',
              name: 'instagram',
              type: 'string',
              fieldset: 'social'
            },
        {
            title: 'Title',
            name: 'title',
            type: 'table'
        }
    ]
}