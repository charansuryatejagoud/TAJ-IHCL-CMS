import { IoApps, IoLayers as Icon, IoSettings } from "react-icons/io5";
export default {
  title: "Group",
  name: "group",
  type: "object",
  icon: Icon,
  initialValue: {
    titleAlignment: "regular",
  },
  fields: [
    {
      title: 'Show Divider For Title',
      name: 'showDividerForTitle',
      type: 'boolean',
    },
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
      title: 'Large Variant',
      name: 'largeVariant',
      type: 'string',
      group: 'main',
      options: {
        list: [
          { title: '4-row-grid', value: '4-row-grid' },
          { title: 'single-card-carousel-with-bg-image', value: 'single-card-carousel-with-bg-image' },
          { title: 'carousel-with-award-cards', value: 'carousel-with-award-cards' },
          { title: 'multi-cards-carousel-with-bg-image', value: 'multi-cards-carousel-with-bg-image' },
          { title: '3-column-grid-button-with-link', value: '3-column-grid-button-with-link' },
          { title: 'media-card', value: 'media-card' },
          { title: 'carousel-with-focused-title', value: 'carousel-with-focused-title' },
          { title: 'group-with-information', value: 'group-with-information' },
          { title: 'group-with-links', value: 'group-with-links' },
          { title: 'group-with-maps', value: 'group-with-maps' },
          { title: 'card-with-right-aligned-content', value: 'card-with-right-aligned-content' },
          { title: 'card-with-focused-title', value: 'card-with-focused-title' },
          { title: '2-column-carousel-with-button-and-link', value: '2-column-carousel-with-button-and-link' },
          { title: 'carousel-with-tabs', value: 'carousel-with-tabs' },
          { title: 'carousel-with-3-column-grid', value: 'carousel-with-3-column-grid' },
          { title: 'transparent-4-cards', value: 'transparent-4-cards' },
          { title: 'group-with-large-image', value: 'group-with-large-image' },
          { title: '4-column-rectangle-grid', value: '4-column-rectangle-grid' },
          { title: '2-row-grid', value: '2-row-grid' },
          { title: 'group-with-facilities', value: 'group-with-facilities' },
          { title: 'group-with-cards', value: 'group-with-cards' },
          { title: '3-cards-carousel', value: '3-cards-carousel' }
        ]
      },
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'card' },
           { type: 'tabs' }
       ]
    },
    {
      name: 'titleAlignment',
      title: 'Title Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'regular', value: 'regular' },
          { title: 'center', value: 'center' }
        ]
      }
    },
    {
      name: 'titlePadding',
      title: 'Title Padding',
      type: 'string'
    },
    {
      name: 'contentPadding',
      title: 'Content Padding',
      type: 'string'
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string'
    },
    {
      name: 'action',
      title: 'Action',
      type: 'array',
      of: [
        { type: 'action' }
      ]
    }
  ]
}
  //  ]
// }

