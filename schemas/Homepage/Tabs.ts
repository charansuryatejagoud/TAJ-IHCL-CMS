import { BsArrowReturnRight } from "react-icons/bs";
export default{
    name:"dialogue",
    title:"Dialogue",
    type:"document",
    icon:BsArrowReturnRight,
    fields:[{
             name:'tabs',
             title:'Tabs',
             type:'array',
             of:[
                {
                    type:'tab'
                }
             ]
            }



        // {
        //     name:"title",
        //     title:"Title",
        //     type:"string"
        // },
        // {
        //     name:"path",
        //     title:"Path",
        //     type:"string"
        // },
        // {
        //     title:"Header",
        //     name:"header",
        //     type:"array",
        //     of:[{
        //         type:"header"
        //     }]
        // },
        // {
        //     title:"Items",
        //     name:"items",
        //     type:"array",
        //     of:[
        //         {
        //             type:"tab"
        //         },
        //         {
        //             type:'group'
        //         },
        //         {
        //             type:'card'
        //         }
        //     ]
        // },
        // {
        //     name:"footer",
        //     title:"Footer",
        //     type:"array",
        //     of:[
        //         {
        //             type:"footer"
        //         }
        //     ]
        // }
    ]
}