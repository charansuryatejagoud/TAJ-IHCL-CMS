import { ImTab } from "react-icons/im";
export default{ 
    title: 'Tab',
    name: 'tab',
    type: 'object',
    icon: ImTab,
    initialValue:{
        variant:"default"
          },
    fields: [
        {
            name:'variant',
            title:'Variant',
            type:'string',
            options:{
                list:[
                    {
                        title:'default ',value:'default'
                    },
                    {
                        title:'title-with-image',value:'titleWithImage'
                    }
                ]
            }
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            name:'path',
            title:'Path',
            type:'string'
       },
       {
            name:'image',
            title:'Image',
            type:'image'
       }
    ]
}
