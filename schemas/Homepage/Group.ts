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
    {
      title: "Large Variant",
      name: "largeVariant",
      type: "string",
      group: "main",
      options: {
        list: [
          { title: "4-row-grid", value: "4-row-grid" },
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
          {
            title: "2-column-carousel-with-button-and-link",
            value: "2-column-carousel-with-button-and-link",
          },
          { title: "carousel-with-tabs", value: "carousel-with-tabs" },
          {
            title: "carousel-with-3-column-grid",
            value: "carousel-with-3-column-grid",
          },
          { title: "transparent-4-cards", value: "transparent-4-cards" },
          { title: "group-with-large-image", value: "group-with-large-image" },
          {
            title: "4-column-rectangle-grid",
            value: "4-column-rectangle-grid",
          },
          { title: "2-row-grid", value: "2-row-grid" },
          { title: "group-with-facilities", value: "group-with-facilities" },
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
      title: "Title Alignment",
      name: "titleAlignment",
      type: "string",
      options: {
        list: [
          { title: "Center", value: "center" },
          { title: "Regular", value: "regular" },
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
    },
    {
      title: "Drop Down Button",
      name: "dropDownButton",
      type: "primary",
    },
  ],
};
{
  title: "";
  h;
  el;
  l;
  o;
}
