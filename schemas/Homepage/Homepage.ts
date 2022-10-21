import { BsFillFileEarmarkPptFill} from "react-icons/bs";
export default{
    title: 'Page',
    name: 'page',
    type: 'document',
    icon:BsFillFileEarmarkPptFill,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Path',
            name: 'path',
            type: 'url'
        },
        {
            title: 'Header',
            name: 'header',
            type: 'array',
            of: [{ type: 'header' }]
        },
        {
            title: 'Items',
            name: 'items',
            type: 'array',
            of: [ 
                { type: 'card' },
                { type: 'chatBot' },
                { type: 'bookingMask' }
           ]
        },
        {
            title: 'Footer',
            name: 'footer',
            type: 'array',
            of: [{ type: 'footer' }]
        }
    ]
}