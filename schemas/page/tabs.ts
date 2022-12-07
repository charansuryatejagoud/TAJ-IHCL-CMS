import { BsArrowReturnRight } from "react-icons/bs";
export default{
    title: 'Tabs',
    name: 'tabs',
    type: 'object',
    icon:BsArrowReturnRight,
    initialValue:{
        variant: 'default'
          },
    fields:[
        {
            title: 'Variant',
            name: 'variant',
            type: 'string',
            options:{
                list:[
                    { title: 'default ', value: 'default' },
                    { title: 'title-with-image', value: 'titleWithImage' }
                ]
            }
        },
        {
             title: 'Tabs',
             name: 'tabs',
             type: 'array',
             of:[{ type: 'tab' }]
        }
    ]
}