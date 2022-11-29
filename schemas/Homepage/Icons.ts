export default {
    title: 'Icon',
    name: 'icon',
    type: 'object',
    fields:[
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Icons',
            name: 'icons',
            type: 'array',
            of: [{ type: 'brands' }]
        }
    ]
}