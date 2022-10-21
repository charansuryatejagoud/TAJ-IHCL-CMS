export default {
    title: 'Primary',
    name: 'primary',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Url',
            name: 'url',
            type: 'url'
        },
        {
            title: 'Secondary Action',
            name: 'secondaryAction',
            type: 'array',
            of: [{ type: 'secondary' }]
        }
    ]
}