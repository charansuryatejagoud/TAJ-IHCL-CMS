import { MdOutlineViewCarousel } from "react-icons/md";
export default{ 
    title: 'Carousel',
    name: 'carousel',
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
            of: [{ type: 'carouselItems' }]
        }
    ]
}