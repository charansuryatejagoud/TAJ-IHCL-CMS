export default{
    name:'media',
    title:'Media',
    type:'object',
    initialValue:{
        mediaType:'image'
    },
    fields:[
        {
            name: 'mediaType',
            title: 'Media Type',
            type: 'string',
            options: {
                list: [
                    { title: 'video', value: 'video' },
                    { title: 'image', value: 'image' }
                ]
            }
        },
        {
            title: "Variant",
            name: "variant",
            type: "string",
        },
        {
            name: 'alternateAllLink',
            title: 'Alternate See all',
            type: 'brands',
            hidden: ({ parent }) => !(parent === null || parent === void 0 ? void 0 : parent.image),
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
        },
        {
            title: 'Large Image',
            name: 'largeImage',
            type: 'image',
        },
        {
            name: 'video',
            title: 'Video',
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