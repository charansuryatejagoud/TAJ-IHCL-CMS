export default{
    name: 'facilities',
    title: 'Facilities',
    type: 'object',
    fields:[
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Sub Titles',
            name: 'subTitles',
            type: 'array',
            of:[{ type: 'string' }]
        }
    ]
}