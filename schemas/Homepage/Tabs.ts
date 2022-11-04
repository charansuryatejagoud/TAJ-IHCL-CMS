import { BsArrowReturnRight } from "react-icons/bs";
export default{
    name:"tabs",
    title:"Tabs",
    type:"object",
    icon:BsArrowReturnRight,
    initialValue:{
        variant:"defaultTab"
          },
    fields:[
        {
            name:'variant',
            title:'Variant',
            type:'string',
            options:{
                list:[
                    {
                        title:'Default Tab',value:'defaultTab'
                    },
                    {
                        title:'New Tab',value:'newTab'
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