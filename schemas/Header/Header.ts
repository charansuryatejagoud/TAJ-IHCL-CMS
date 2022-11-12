import { MdViewHeadline } from "react-icons/md";
export default {
  title: 'Header',
  name: 'header',
  type: 'document',
  icon: MdViewHeadline,
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
      title: 'Detail List',
      name: 'detailList',
      type: 'array',
      of: [{ type: 'fields' }],
    },
    {
      title: 'Login List',
      name: 'loginList',
      type: 'array',
      of: [{ type: 'header1', }],
    },
    {
      title: 'Action',
      name: 'action',
      type: 'array',
      of: [{ type: 'action' }],
    },
  ],
};
