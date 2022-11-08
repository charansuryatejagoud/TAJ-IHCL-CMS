import { BsArrowReturnRight } from "react-icons/bs";
export default{
    name:"tabs",
    title:"Tabs",
    type:"object",
    icon:BsArrowReturnRight,
    initialValue:{
        variant:"default"
          },
    fields:[
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
             name:'tabs',
             title:'Tabs',
             type:'array',
             of:[
                {
                    type:'tab'
                }
             ]
            }



       
    ]
}