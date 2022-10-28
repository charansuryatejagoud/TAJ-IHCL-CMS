export default { 
    title: 'Carousel1',
    name: 'carousel1',
    type: 'object',
    fields: [
        {
            title: 'Variant',
            name: 'variant',
            type: 'string', 
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
            title: 'Sub Title',
            name: 'subTitle',
            type: 'string',
             
        },
        {
            title: 'Sub Content',
            name : 'subContent',
            type: 'string',
       
        },
        {
            title: 'Action',
            name: 'action',
            type: 'array',
            of: [{ type: 'action'}]
        },
    ]
}