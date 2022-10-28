// import { MdOutlineViewCarousel } from "react-icons/md";
export default{ 
    title: 'Carousel',
    name: 'carousel',
    type: 'object',
    // icon: Icon,
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
            of: [{ type: 'card' }]
        }
    ]
}