export default{
    name:'media',
    title:'Media',
    type:'object',
    initialValue:{
        mediaType:'image'
    },
    fields:[
        // {
        //     title: 'Show Divider For Title',
        //     name: 'showDividerForTitle',
        //     type: 'boolean',
        // },
        // {
        //     name: 'video',
        //     title: 'Video',
        //     type: 'boolean',

        // },
        // {
        //     name: 'allLink',
        //     title: 'See all',
        //     type: 'videoButton',
        //     hidden: ({ parent }) => !(parent === null || parent === void 0 ? void 0 : parent.video),

        // },
        // {
        //     name: 'image',
        //     title: 'Image',
        //     type: 'boolean',

        // },
        {
            name: 'alternateAllLink',
            title: 'Alternate See all',
            type: 'downloadButtons',
            hidden: ({ parent }) => !(parent === null || parent === void 0 ? void 0 : parent.image),


        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
        },
        {
            title: "Variant",
            name: "variant",
            type: "string",
        },
        {
            title: 'Large Image',
            name: 'largeImage',
            type: 'image',
        },
        {
            name: 'videoUrl',
            title: 'Video Url',
            type: 'file',

            options: {

                accept: 'video/mp4'

            }
        },
        {
            title: 'Focus Title',
            name: 'focusTitle',
            type: 'string',
        },
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Sub Title",
            name: "subTitle",
            type: "string",
        },
        {
            title: "Sub Content",
            name: "subContent",
            type: "blockContent",
        },
        {
            name: 'titlePadding',
            title: 'Title Padding',
            type: 'string'
        },
        {
            name: 'contentPadding',
            title: 'Content Padding',
            type: 'string'
        },
        {
            name: 'action',
            title: 'Action',
            type: 'array',
            of: [
              {
                type: 'action'
              }
            ]
        },
    ]
}