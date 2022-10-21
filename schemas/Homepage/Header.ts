export default { 
    title: 'Header',
    name: 'header',
    type: 'object',
    fields: [
        {
            title: 'Detail List',
            name: 'detailList',
            type: 'array',
            of: [ { type: 'fields', }]
        },
        {
            title: 'Logo',
            name: 'logo',
            type: 'image'
        },
        {
            title: 'Login List',
            name: 'loginList',
            type: 'array',
        of:[
            {
                type: 'header1',
            }
        ]
        },
        {
            title: 'Primary Action',
            name: 'primaryAction',
            type: 'array',
            of: [{ type: 'action' }]
        },
    ]
}