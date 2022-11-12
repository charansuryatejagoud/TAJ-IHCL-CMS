export default {
  title: "Primary",
  name: "primary",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Check Box",
      name: "checkBox",
      type: "string",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
        ],
        layout: "radio",
        isHighlighted: true,
      },
    },
    {
      title: "Url",
      name: "url",
      type: "string",
    },
    // {
    //     title: 'Secondary Action',
    //     name: 'secondaryAction',
    //     type: 'array',
    //     of: [{ type: 'secondary' }]
    // }
  ],
};
