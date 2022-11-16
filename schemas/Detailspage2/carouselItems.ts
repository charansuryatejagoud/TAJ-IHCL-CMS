export default { 
    title: 'Carousel Items ',
    name: 'carouselItems',
    type: 'object',
    fields: [
        {
            title: 'Variant',
            name: 'variant',
            type: 'string', 
        },
        {
            title: 'Logo',
            name: 'logo',
            type: 'image'
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
            title: 'Bg Image',
            name: 'bgImage',
            type: 'image',
        },
        {
            title: 'Large Bg Image',
            name: 'largeBgImage',
            type: 'image',
        },
        { 
            title: 'Title',
            name: 'title',
            type: 'string',     
        },
        {
            title: 'Sub Title',
            name : 'subTitle',
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