export default{ 
    title: 'Items',
    name: 'items',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Quick Links',
            name: 'quickLinks',
            type: 'array',
            of: [{ type: 'quickLinks' }]
        }
    ]
}