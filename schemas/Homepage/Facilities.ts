export default{
    name:"facilities",
    title:"Facilities",
    type:"object",
    fields:[
        {
            name:"title",
            title:"Title",
            type:"string"
        },
        {
            name:"subTitles",
            title:"Sub Titles",
            type:"array",
            of:[
                {
                    type:"string"
                }
            ]
        }
    ]
}