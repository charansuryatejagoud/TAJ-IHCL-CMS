export default{ 
    title: 'Tabs',
    name: 'tabs',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Group',
            name: 'group',
            type: 'array',
            of: [{ type: 'group' }]
        }
    ]
}