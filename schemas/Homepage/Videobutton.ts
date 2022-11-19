export default {
    title: 'Video Button',
    name: 'videoButton',
    type: 'object',
    initialValue: {
        
       list: 'image',
    
      },
    fields: [
        {
            name: 'list',
            title: 'List',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'video', value: 'video',
                    },
                    {
                        title: 'image', value: 'image'
                    }
                ]
            }
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'Url',
            name: 'url',
            type: 'string'
        },
        
    ]
}