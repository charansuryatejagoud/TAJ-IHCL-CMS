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
