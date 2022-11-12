<<<<<<< HEAD
import {IoApps, IoLayers as Icon, IoSettings} from "react-icons/io5";
export default{
    title: 'Group',
    name: 'group',
    type: 'object',
    icon: Icon,
    initialValue:{
        titleAlignment:'regular'
    },
    groups: [
        { name: 'main', title: 'Main', icon: IoApps },    
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
        // {
        //     title: 'Variant',
        //     name: 'variant',
        //     type: 'string',
        //     group: 'main'
        // },
        // {
        //     title: 'Large Variant',
        //     name: 'largeVariant',
        //     type: 'string',
        //     group: 'main'
        // },
=======
import { IoApps, IoLayers as Icon, IoSettings } from "react-icons/io5";
export default {
  title: "Group",
  name: "group",
  type: "object",

  icon: Icon,
  initialValue: {
    titleAlignment: "regular",
  },
  groups: [{ name: "main", title: "Main", icon: IoApps }],
  fields: [
    {
      title: "Focus Title",
      name: "focusTitle",
      type: "string",
      group: "main",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
      group: "main",
    },
<<<<<<< HEAD
    {
      title: "Variant",
      name: "variant",
      type: "string",
      group: "main",
=======
>>>>>>> f7ca724529394e0c576fca2170fe91ec783496be
        {
            title: 'Large Variant',
            name: 'largeVariant',
            type: 'string',
            group: 'main',
            options:{
                list:[
                    { title: 'two-row-grid', value: 'two-row-grid' },
                    { title: 'single-card-carousel-with-bg-image', value: 'single-card-carousel-with-bg-image'},
                    { title: 'carousel-with-award-cards', value: 'carousel-with-award-cards'},
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
                    { title: '2-row-grid', value: '2-row-grid' }
                
                ]
        },
>>>>>>> 8c447714867d11572fe5f4f9ce9ede0baeafdc84
    },
<<<<<<< HEAD
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
           title: 'Title Alignment',
           name: 'titleAlignment',
           type: 'string',
           options:{
            list:[
                { title: 'Center', value: 'center' },
                { title: 'Regular', value: 'regular' },
            ],
           }
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
            of: [{ type: 'card' },
                 {type: 'tab' }, 
                 {type: 'tabs' },
               ],
               group: 'main'
        },
        {
            title: 'Drop Down Button',
            name: 'dropDownButton',
            type: 'primary'
        }
    ]
}
=======
    {
      title: "Demo Variant",
      name: "demoVariant",
      type: "string",
      group: "main",
      options: {
        list: [
          { title: "simple-media", value: "simple-media" },
          { title: "card-with-carousel", value: "card-with-carousel" },
          { title: "award-card", value: "award-card" },
          { title: "carousel-with-bg-image", value: "carousel-with-bg-image" },
          {
            title: "card-with-focused-title",
            value: "card-with-focused-title",
          },
          { title: "2-card-carousel", value: "2-card-carousel" },
          { title: "card-with-tabs", value: "card-with-tabs" },
          { title: "single-item", value: "single-item" },
          {
            title: "card-with-focused-title",
            value: "card-with-focused-title",
          },
          { title: "card-with-information", value: "card-with-information" },
          { title: "card-with-links", value: "card-with-links" },
          { title: "card-with-location", value: "card-with-location" },
        ],
      },
    },
    {
      title: "Large Variant",
      name: "largeVariant",
      type: "string",
      group: "main",
    },
    {
      title: "Demo Large Variant",
      name: "demoLargeVariant",
      type: "string",
      group: "main",
      options: {
        list: [
          { title: "two-row-grid", value: "two-row-grid" },
          {
            title: "single-card-carousel-with-bg-image",
            value: "single-card-carousel-with-bg-image",
          },
          {
            title: "carousel-with-award-cards",
            value: "carousel-with-award-cards",
          },
          {
            title: "multi-cards-carousel-with-bg-image",
            value: "multi-cards-carousel-with-bg-image",
          },
          {
            title: "3-column-grid-button-with-link",
            value: "3-column-grid-button-with-link",
          },
          { title: "media-card", value: "media-card" },
          {
            title: "carousel-with-focused-title",
            value: "carousel-with-focused-title",
          },
          { title: "group-with-information", value: "group-with-information" },
          { title: "group-with-links", value: "group-with-links" },
          { title: "group-with-maps", value: "group-with-maps" },
          {
            title: "card-with-right-aligned-content",
            value: "card-with-right-aligned-content",
          },
          {
            title: "card-with-focused-title",
            value: "card-with-focused-title",
          },
        ],
      },
    },
    {
      title: "Sub Title",
      name: "subTitle",
      type: "string",
      group: "main",
    },
    {
      title: "Text",
      name: "text",
      type: "text",
      group: "main",
    },
    {
      name: "titleAlignment",
      title: "Title Alignment",
      type: "string",

      options: {
        // styles:[
        //     {
        //         title:"regular",value:"regular"
        //     }
        //    ],
        list: [
          {
            title: "Center",
            value: "center",
          },
          {
            title: "Regular",
            value: "regular",
          },
        ],
      },
    },
    {
      title: "Padding",
      name: "padding",
      type: "number",
    },
    {
      title: "Action",
      name: "action",
      type: "array",
      of: [{ type: "action" }],
    },
    {
      title: "Items",
      name: "items",
      type: "array",
      of: [{ type: "card" }, { type: "tab" }, { type: "tabs" }],
      group: "main",
    },
    {
      name: "dropDownButton",
      title: "Drop Down Button",
      type: "primary",
    },
  ],
};
>>>>>>> f7ca724529394e0c576fca2170fe91ec783496be
