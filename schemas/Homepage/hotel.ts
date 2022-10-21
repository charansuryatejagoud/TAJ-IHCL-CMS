import { IoHome as Icon } from "react-icons/io5";

export default {
  name: "hotel",
  title: "IHCL Hotel",
  type: "document",
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
};
