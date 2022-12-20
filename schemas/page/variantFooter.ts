export default{
    title: 'Default Footer',
    name: 'defaultFooter',
    type: 'object',
    initialValue:{
        variant:'default'
    },
    fields:[
        {
            title: 'Variant',
            name: 'variant',
            type: 'string',
            options:{
                list:[{ title: 'default', value: 'default' }]
            }
        }
    ]
}