import { ImTab } from "react-icons/im";
export default{ 
    title: 'Tab',
    name: 'tab',
    type: 'object',
    icon: ImTab,
    initialValue:{
        variant:'default'
          },
    fields: [
        {
            title:'Variant',
            name:'variant',
            type:'string',
            options:{
                list:[
                    { title: 'default ', value: 'default' },
                    { title: 'title-with-image', value: 'titleWithImage' }
                ]
            }
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Path',
            name: 'path',
            type: 'string'
       },
       {
            title: 'Image',
            name: 'image',
            type: 'image'
       }
    ]
}
