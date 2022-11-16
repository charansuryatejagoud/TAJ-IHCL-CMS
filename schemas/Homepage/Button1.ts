export default {
<<<<<<< HEAD
    title: 'Primary',
    name: 'primary',
    type: 'object',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Check Box',
            name: 'checkBox',
            type: 'string',
            options: {
                list: [
                    { title: 'Internal',value: 'internal' },
                    { title: 'External',value: 'external' }
                ],
                layout:'radio',
                isHighlighted:true
            }
        },
        {
            title: 'Url',
            name: 'url',
            type: 'string'
        },
    ]
}
=======
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
  ],
};
>>>>>>> 7166b859b67c3deba5efba3d8451431c89b7ba54
