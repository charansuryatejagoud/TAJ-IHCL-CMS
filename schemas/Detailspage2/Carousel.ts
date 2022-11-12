import { MdOutlineViewCarousel } from "react-icons/md";
export default {
  title: 'Carousel',
  name: 'carousel',
  type: 'object',
  icon: MdOutlineViewCarousel,
  initialValue: {
    isHighLighted: 'false',
  },
  fields: [
    {
      title: 'Show Divider For Title',
      name: 'showDividerForTitle',
      type: 'boolean',
    },
    {
      title: 'Variant',
      name: 'variant',
      type: 'string',
    },
    {
      title: 'Focus Title',
      name: 'focusTitle',
      type: 'string',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Sub Title',
      name: 'subTitle',
      type: 'string',
    },
    {
      title: 'Action',
      name: 'action',
      type: 'array',
      of: [{ type: 'action' }],
    },
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [{ type: 'carouselItems' }],
    },
  ],
};
