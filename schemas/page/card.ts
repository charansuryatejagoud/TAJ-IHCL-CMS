import { type } from "os";
import { IoApps, IoCard as Icon, IoSettings } from "react-icons/io5";
export default {
  title: "Card",
  name: "card",
  type: "object",
  icon: Icon,
  initialValue: {
    isHighLighted: false,
  },
  fields: [
    {
      title: "Show Divider For Title",
      name: "showDividerForTitle",
      type: "boolean",
    },
    {
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      initialValue:'image',
      options: {
          list: [
              { title: 'video', value: 'video' },
              { title: 'image', value: 'image' }
          ]
      }
    },
    {
      title: "Variant",
      name: "variant",
      type: "string",
      options: {
        list: [
          { title: "simple-media", value: "simple-media" },
          { title: "card-with-carousel", value: "card-with-carousel" },
          { title: "award-card", value: "award-card" },
          { title: "carousel-with-bg-image", value: "carousel-with-bg-image" },
          { title: "card-with-focused-title", value: "card-with-focused-title" },
          { title: "3-actions-with-right-aligned-content-card", value: "3-actions-with-right-aligned-content-card" },
          { title: "card-with-tabs", value: "card-with-tabs" },
          { title: "single-item", value: "single-item" },
          { title: "card-with-information", value: "card-with-information" },
          { title: "card-with-links", value: "card-with-links" },
          { title: "card-with-location", value: "card-with-location" },
          { title: "title-with-hoverable-card", value: "title-with-hoverable-card" },
          { title: "card-with-simple-media", value: "card-with-simple-media" },
          { title: "rectangle-card", value: "rectangle-card" },
          { title: "card-with-right-aligned-title-link", value: "card-with-right-aligned-title-link" },
          { title: "3-column-grid", value: "3-column-grid" },
          { title: "card-with-title-and-sub-titles", value: "card-with-title-and-sub-titles" },
          { title: "card-with-2-buttons-and-link", value: "card-with-2-buttons-and-link" },
          { title:'card-with-right-aligned-content',value:'card-with-right-aligned-content' },
          { title:'card-with-right-aligned-content-with-link',value:'card-with-right-aligned-content-with-link' },
          // {title:''}
        ],
      },
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
      title: 'Video URL ',
      name: 'videoUrl',
      type: 'file',
      options: {
          accept: 'video/mp4'
      }
    },
    {
      title: 'Video Play Icon',
      name: 'videoPlayIcon',
      type: 'image'
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Sub Title",
      name: "subTitle",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
    {
      title: "Rich Text",
      name: "richText",
      type: "array",
      of: [{ type: 'richText' }]
    },
    {
      title: "Sub Content",
      name: "subContent",
      type: "blockContent",
    },
    {
      title: "Action",
      name: "action",
      type: "array",
      of: [{ type: "action" }]
    },
    {
      title: 'Social Icon',
      name: 'socialIcon',
      type: 'image'
    }
  ],
}

