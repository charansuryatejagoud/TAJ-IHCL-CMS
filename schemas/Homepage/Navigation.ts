export default {
    title: 'Action',
    name: 'action',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Check Box',
            name: 'checkBox',
            type: 'string',
            options: {
                list: [
                    { title: 'Internal',value: 'internal' },
                    { title: 'External',value: 'external' }
                ],
                layout:'radio',
                isHighlighted:true
            }
        },
        {
            title: 'Url',
            name: 'url',
            type: 'url'
        },
        {
            title: 'Primary Action',
            name: 'primaryAction',
            type: 'array',
            of: [{ type: 'primary' },
                 { type: 'instagramButton' },
                 { type: 'videoButton' }
            ]
        }
    ]
}