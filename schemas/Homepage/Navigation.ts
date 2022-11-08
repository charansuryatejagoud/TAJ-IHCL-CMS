export default {
    title: 'Action',
    name: 'action',
    type: 'object',
    fields: [
       
        {
            name:'primaryAction',
            title:'Primary Action',
            type:'array',
            of:[
                {
                    type:'primary'
                }
            ]
        },
        {
            title: 'Secondary Action',
            name: 'secondaryAction',
            type: 'array',
            of: [{ type: 'primary' },
                
            ]
        }
    ]
}
