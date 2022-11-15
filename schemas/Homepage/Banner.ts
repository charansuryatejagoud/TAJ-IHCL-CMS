export default{ 
    title: 'Banner',
    name: 'banner',
    type: 'object',
    fields: [
        {
            title: 'Show Divider For Title',
            name: 'showDividerForTitle',
            type: 'boolean',
        },
        {
            title: 'Focus Title',
            name: 'focusTitle',
            type: 'string'
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
        {
            title: 'Booking Mask',
            name: 'bookingMask',
            type: 'array',
            of: [{ type: 'bookingMask' }]
        },
    ]
}