import { MdOutlineViewCarousel } from "react-icons/md";
export default{ 
    title: 'Carousal',
    name: 'carousal',
    type: 'object',
    icon: MdOutlineViewCarousel,
    fields: [
        {
            title: 'Variant',
            name: 'variant',
            type: 'string'
        },
        {
            title: 'Items',
            name: 'items',
            type: 'array',
            of: [{ type: 'carousalItems' }]
        }
    ]
}