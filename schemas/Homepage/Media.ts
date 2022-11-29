export default{
    name:'media',
    title:'Media ',
    type:'object',
    initialValue:{
        mediaType:'image'
    },
    fields:[
        {
            title: 'Show Divider For Title',
            name: 'showDividerForTitle',
            type: 'boolean',
            
          },
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
            type: 'string'
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