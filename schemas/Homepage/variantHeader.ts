export default{
    name:'defaultHeader',
    title:'Default Header',
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
                        title:'default',value:'default'
                    }
                ]
            }
        }
    ]
}