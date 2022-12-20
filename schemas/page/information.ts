export default {
    title: 'Information',
    name: 'information',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Variant',
            name: 'variant',
            type: 'string', 
        },
        {
            title: 'Sub Title',
            name: 'subTitle',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
}