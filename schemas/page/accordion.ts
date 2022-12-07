import { IoApps, IoSettings, IoDocumentText } from 'react-icons/io5';
import { MdOutlineAccountTree } from 'react-icons/md';
export  default {
        type: 'object',
        name: 'accordion',
        title: 'Accordion',
        icon: MdOutlineAccountTree,
        groups: [
            { name: 'main', title: 'Main', icon: IoApps },
            { name: 'configuration', title: 'Configuration', icon: IoSettings },
        ],
        fields: [
            {
                name: 'variant',
                title: 'Variant',
                type: 'string'
            },
            {
                name: 'focusTitle',
                title: 'Focus Title',
                type: 'string',
            },
            {
                name: 'title',
                title: 'Title',
                type: 'string',
            },
            {
                name: 'accordionItems',
                title: 'Accordion Items',
                type: 'array',
                of: [{ type:"items" }],
                // group: 'main',
            },
        ],
}
