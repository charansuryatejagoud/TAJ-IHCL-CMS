import { BsArrowBarRight } from "react-icons/bs";
export default{ 
    title: 'Tab',
    name: 'tab',
    type: 'object',
    icon: BsArrowBarRight,
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