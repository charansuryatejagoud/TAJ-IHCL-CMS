// interface Props {
//     items: SchemaItem[];
//   }

// export default  function card(props: Props) {
//     return {
    export default {
    title: 'Menu',
    name: 'menu',
    type: 'object',
    fields: [
        {
            name: 'tabName',
            title: 'Tab Name',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [{
                        name: 'filters',
                        title: 'Filters',
                        type: 'string',
                    },
                    {
                        name: 'name',
                        title: 'Name',
                        type: 'array',
                        of: [
                            {
                                type: 'object',
                                fields: [
                                    {
                                        name:'tags',
                                        title: 'Tags',
                                        type:'string'
                                    },
                                    {
                                        title: 'Image',
                                        name: 'image',
                                        type: 'image'
                                    },
                                    {
                                        title: 'Url',
                                        name: 'url',
                                        type: 'string'
                                    },
                                   
                                ]
                            }
                        ]
                    }
                    ]
                }
            ]

        }
    ]
}
