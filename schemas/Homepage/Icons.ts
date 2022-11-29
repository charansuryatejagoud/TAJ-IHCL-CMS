export default {
<<<<<<< HEAD
    title: 'Icons',
=======
    title: 'Icon',
>>>>>>> 15cd2a076a7d37236a0348d3dbcc69b5594e68ce
    name: 'icon',
    type: 'object',
    fields:[
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Icons',
            name: 'icons',
            type: 'array',
            of: [{ type: 'brands' }]
        }
    ]
}