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
                list:[
                    { title: 'variant-1', value: 'variant-1' },
                    { title: 'variant-2', value: 'variant-2' },
                    { title: 'default', value: 'default' }
                ]
            }
        }
    ]
}