import { ImTab } from "react-icons/im";
export default{ 
    title: 'Tab',
    name: 'tab',
    type: 'object',
    icon: ImTab,
   
    fields: [
      
        {
            title: 'Title',
            name: 'title',
            type: 'string',
           
        },
       {
        name:'path',
        title:'Path',
        type:'string'
       }
    ]
}