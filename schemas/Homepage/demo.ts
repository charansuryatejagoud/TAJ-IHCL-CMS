export default {
    name: 'test',
    title: 'Test',
    type: 'document',
    fields: [
        {
            name: 'video',
            title: 'Video',
            type: 'boolean',

        },
        {
            name: 'allLink',
            title: 'See all',
            type: 'videoButton',
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
            type: 'downloadButtons',
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

    ]
}