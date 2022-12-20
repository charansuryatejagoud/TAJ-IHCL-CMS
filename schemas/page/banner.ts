export default{ 
    title: 'Banner',
    name: 'banner',
    type: 'object',
    initialValue:{
       mediaType:'image'
      },
    fields: [
        {
            title: 'Variant',
            name: 'variant',
            type: 'string'
        },
        {
            title: 'Large Variant',
            name: 'largeVariant',
            type: 'string'
        },
        {
            title: 'Focus Title',
            name: 'focusTitle',
            type: 'string'
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            name: 'media',
            title: 'Media',
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
            type: 'array',
            of:[{ type: 'image' }]
        },
        {
            title: 'Large Image',
            name: 'largeImage',
            type: 'array',
            of:[{ type:'image' }]
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
            title: 'Chat Bot',
            name: 'chatBot',
            type: 'array',
            of: [{ type: 'brands' }]
        },
        {
            title: ' Action',
            name: 'action',
            type: 'array',
            of: [{ type: 'action' }]
        },
        {
            title: 'Booking Mask',
            name: 'bookingMask',
            type: 'array',
            of: [{ type: 'bookingMask' }]
        },
    ]
}