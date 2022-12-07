import { MdViewHeadline } from "react-icons/md";
<<<<<<< HEAD

=======
>>>>>>> be5b7b894b4a9c3455df94967558313ec7df757d
export default {
  title: 'Header',
  name: 'header',
  type: 'document',
  icon: MdViewHeadline,
  initialValue: {
    variant: 'default',
  },
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Variant',
      name: 'variant',
      type: 'string',
      options: {
        list: [
          { title: 'default', value: 'default', },
        ],
      },
    },
    {
      title: 'Path',
      name: 'path',
      type: 'string',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
    },
    {
      title: 'Secondary Logo',
      name: 'secondaryLogo',
      type: 'image',
    },
    {
      title: 'Detail List',
      name: 'detailList',
      type: 'array',
      of: [{ type: 'ctaLabel' }],
    },
    {
      title: 'Login List',
      name: 'loginList',
      type: 'array',
      of: [{ type: 'ctaLabel', }],
    },
    {  
       title: 'Cart Icon',
       name: 'cartIcon',
       type: 'array',
       of: [{ type: 'cartIcon' }]
    },
    {
      title: 'Action',
      name: 'action',
      type: 'array',
      of: [{ type: 'action' }],
    },
  ],
  preview: {
    select: {
        title: 'title',
        subtitle: 'variant',
    },
},
};

