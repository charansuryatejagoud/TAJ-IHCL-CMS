
import { BsFillFileEarmarkPptFill } from "react-icons/bs";
import { client } from "../static/shared-utils";
export default {
    title: 'Page',
    name: 'page',
    type: 'document',
    icon: BsFillFileEarmarkPptFill,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Path',
            name: 'path',
            type: 'string',

            validation: (Rule) =>

                Rule.required().custom(async (path, { document }) => {

                    const documentId = document._id.replace("drafts.", "");

                    const page = await client.fetch(

            `*[_type == "page" && path == "${path}"  && !(_id match "*${documentId}")]{_id}[0]`,

          );

                    const pageExists = !!page;

                    return pageExists ? "This path is already  used." : true;

                }),

        },
        {
            title: 'Header',
            name: 'header',
            type: 'defaultHeader',
        },
        {
            title: 'Items',
            name: 'items',
            type: 'array',
            of: [{ type: 'group' },
            { type: 'card' },
            { type: 'banner' },
            { type: 'tabs' },
            { type: 'carousel' },
<<<<<<< HEAD
            { type: 'media' }
=======
            {type:'media'},
            {type:'test'}
>>>>>>> 15cd2a076a7d37236a0348d3dbcc69b5594e68ce
            ]
        },
        {
            title: 'Footer',
            name: 'footer',
            type: 'defaultFooter',
        }
    ]
}

