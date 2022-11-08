export default{
    name:'defaultFooter',
    title:'Default Footer',
    type:'object',
    initialValue:{
        variant:'default'
    },
    fields:[
        {
            name:'variant',
            title:'Variant',
            type:'string',
            options:{
                list:[
                    {
                        title:'variant-1',value:'variant-1'
                    },
                    {
                        title:'variant-2',value:'variant-2'
                    },
                    {
                        title:'default',value:'default'
                    }
                ]
            }
        }
    ]
}