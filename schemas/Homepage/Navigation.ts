export default {
    title: 'Action',
    name: 'action',
    type: 'object',
    fields: [
        {
            title: 'Primary Action',
            name: 'primaryAction',
            type: 'array',
            of:[{ type: 'primary' }]
        },
        {
            title: 'Secondary Action',
            name: 'secondaryAction',
            type: 'array',
            of: [{ type: 'primary' }]
        }
    ]
}
