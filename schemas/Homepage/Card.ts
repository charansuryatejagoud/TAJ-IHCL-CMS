import {IoApps, IoCard as Icon, IoSettings} from "react-icons/io5";
export default { 
    title: 'Card',
    name: 'card',
    type: 'object',
    icon: Icon,
    fields: [
        {
            title: 'Variant',
            name: 'variant',
            type: 'string', 
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
        },
        {
            title: 'Large Image',
            name: 'largeImage',
            type: 'image',
        },
        {
            title: 'Sub Title',
            name: 'subTitle',
            type: 'string',
             
        },
        {
            title: 'Sub Content',
            name : 'subContent',
            type: 'string',
       
        },
        {
            title: 'Title',
            name : 'title',
            type: 'string',
        },
        {
            name:"description",
            title:"Description",
            type:"blockContent"
        },
        {
            title: 'Action',
            name: 'action',
            type: 'array',
            of: [{ type: 'action'}]
        },
        // {
        //     title: 'Primary Action',
        //     name: 'primaryAction',
        //     type: 'array',
        //     of: [{ type: 'primary' }, {type: 'instagramButton' }, {type: 'videoButton' }]
        // }
    ]
}