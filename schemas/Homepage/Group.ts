import {IoApps, IoLayers as Icon, IoSettings} from "react-icons/io5";
export default{
    title: 'Group',
    name: 'group',
    type: 'object',
    initialValue: {hasAllLink: false },
    icon: Icon,
    groups: [
        { name: 'main', title: 'Main', icon: IoApps },
        { name: 'configuration', title: 'Configuration', icon: IoSettings },
    ],
    fields: [
        {
            title: 'Focus Title',
            name: 'focusTitle',
            type: 'string',
            group: 'main'
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            group: 'main'
        },
        {
            title: 'Variant',
            name: 'variant',
            type: 'string',
            group: 'main'
        },
        {
            title: 'Large Variant',
            name: 'largeVariant',
            type: 'string',
            group: 'main'
        },
        {
            title: 'Sub Title',
            name: 'subTitle',
            type: 'string',
            group: 'main'
        },
        {
            title: 'Text',
            name: 'text',
            type: 'text',
            group: 'main'
        },
        {
            title: 'Padding',
            name: 'padding',
            type: 'number'
        },
        {
            title: 'Action',
            name: 'action',
            type: 'array',
            of: [{ type: 'action' }]
        },
        {
            title: 'Items',
            name: 'items',
            type: 'array',
            of: [{ type: 'card' }
               ],
               group: 'main'
        }
    ]
}