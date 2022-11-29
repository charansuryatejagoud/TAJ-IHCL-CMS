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
            type: 'string'
        },
        {
            title: 'Chat Bot',
            name: 'chatBot',
            type: 'array',
            of: [{ type: 'chatBot' }]
        },
        {
            title: ' Action',
            name: 'action',
            type: 'array',
            of: [{ type: 'action' }]
        },
        // {
        //     title: 'Booking Mask',
        //     name: 'bookingMask',
        //     type: 'array',
        //     of: [{ type: 'bookingMask' }]
        // },
        {
            title: 'Booking Mask',
            name: 'bookingMask',
            type: 'array',
            of: [{ type: 'bookingMask' }]
        },
        {
            title:'Media Type',
            name:'mediaType',
            type:'videoButton',
           
            // options:{
            //   list:[
            //     {
            //       title:'video',value:'video'
            //     },
            //     {
            //       title:'image',value:'image'
            //     }
            //   ]
            // }
          }
    ]
}