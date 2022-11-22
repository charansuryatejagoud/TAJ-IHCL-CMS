export default{
    name:'mediaType',
    title:'Media Type',
    type:'object',
    fields:[
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
            title: "Image",
            name: "image",
            type: "image",
          },
          {
            title: "Large Image",
            name: "largeImage",
            type: "image",
          },
          {
            name:'videoUrl',
            title:'Video Url',
            type:'string'
          }

    ]
}