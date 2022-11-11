import { IoApps, IoCard as Icon, IoSettings } from "react-icons/io5";
export default {
  title: "Card",
  name: "card",
  type: "object",
  icon: Icon,
  initialValue: {
    isHighLighted: "false",
  },
  fields: [
    {
      title: "Show Divider For Title ",
      name: "showDividerForTitle",
      type: "boolean",
    },
    {
      title: "Variant",
      name: "variant",
      type: "string",
    },
    {
      title: 'Demo Variant',
      name: 'demoVariant',
      type: 'string',
      group: 'main',
      options:{
          list:[
              { title: 'simple-media', value: 'simple-media' },
              { title: 'card-with-carousel', value: 'card-with-carousel' },
              { title: 'award-card', value: 'award-card' },
              { title: 'carousel-with-bg-image', value: 'carousel-with-bg-image' },
              { title: 'card-with-focused-title', value: 'card-with-focused-title' },
              { title: '2-card-carousel', value: '2-card-carousel' },
              { title: 'card-with-tabs', value: 'card-with-tabs' },
              { title: 'single-item', value: 'single-item' },
              { title: 'card-with-focused-title', value: 'card-with-focused-title' },
              { title: 'card-with-information', value: 'card-with-information' },
              { title: 'card-with-links', value: 'card-with-links' },
              { title: 'card-with-location', value: 'card-with-location' }
          ]
  }
},
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Large Image",
      name: "largeImage",
      type: "image",
    },
    {
      title: "Focus Title",
      name: "focusTitle",
      type: "string",
    },
    {
      title: "Sub Title",
      name: "subTitle",
      type: "string",
    },
    {
      title: "Sub Content",
      name: "subContent",
      type: "string",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      title: "Action",
      name: "action",
      type: "array",
      of: [{ type: "action" }],
    },
  ],
};
