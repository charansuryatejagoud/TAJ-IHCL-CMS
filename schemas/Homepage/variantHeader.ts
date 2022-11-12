export default{
    title: 'Default Header',
    name: 'defaultHeader',
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