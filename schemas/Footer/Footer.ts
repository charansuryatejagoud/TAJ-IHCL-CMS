import { BiDockBottom } from "react-icons/bi";
export default {
  title: "Footer",
  name: "footer",
  type: "document",
  icon: BiDockBottom,
  initialValue: {
    variant: "default",
  },
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Variant",
      name: "variant",
      type: "string",
      options: {
        list: [
          {
            title: "default",
            value: "default",
          },
        ],
      },
    },
    {
      title: "Path",
      name: "path",
      type: "string",
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
    },
    {
      title: "Tag Line",
      name: "tagLine",
      type: "string",
    },
    {
      title: "Support Details",
      name: "supportDetails",
      type: "array",
      of: [{ type: "supportDetails" }],
    },
    {
      title: "Cta Label",
      name: "ctaLabel",
      type: "array",
      of: [{ type: "ctaLabel" }],
    },
    {
      title: "Items",
      name: "items",
      type: "items",
    },
    {
      title: "Download Buttons",
      name: "downloadButtons",
      type: "array",
      of: [{ type: "downloadButtons" }],
    },
    {
      title: "Brands",
      name: "brands",
      type: "array",
      of: [{ type: "brands" }],
    },
    {
      title: "Legal Information",
      name: "legalInformation",
      type: "array",
      of: [{ type: "bottom" }],
    },
    {
      title: "Icons",
      name: "icons",
      type: "array",
      of: [{ type: "media" }],
    },

    // {
    //     name: 'links',
    //     type: 'array',
    //     of: [{ type: 'string' }]
    // },
    // {
    //     name: 'search',
    //     type: 'array',
    //     of: [{ type: 'string' }]
    // },
    // {
    //     name: 'barcode',
    //     type: 'array',
    //     of: [{ type: 'image'}]
    // },
    // {
    //     name: 'sub_content',
    //     type: 'array',
    //     of: [{ type: 'string' }]
    // }
  ],
};
