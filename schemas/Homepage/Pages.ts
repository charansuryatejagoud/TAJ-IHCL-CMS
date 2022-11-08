import { BsFillFileEarmarkPptFill} from "react-icons/bs";export default { 
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
            type: 'string'
        },
        {
            title: 'Header',
            name: 'header',
            type: 'defaultHeader',
            
        },
        {
            title: 'Items',
            name: 'items',
            type: 'array',
            of: [{ type: 'group' },
                 { type: 'card' },
                 { type: 'banner' },
                 { type: 'tabs' },
                 { type: 'carousal'}
           ]
        },
        {
            title: 'Footer',
            name: 'footer',
            type: 'defaultFooter',
           
        }
    ]
}

