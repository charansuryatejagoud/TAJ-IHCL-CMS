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
            title: 'Group',
            name: 'group',
            type: 'array',
            of: [{ type: 'group' }]
        }
    ]
}