
import { BsFillFileEarmarkPptFill} from "react-icons/bs";
import { pathRule } from "../static/shared-utils";
export default { 
    title: 'Page',
    name: 'page',
    type: 'document',
    icon:BsFillFileEarmarkPptFill,
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
            validation:(Rule)=>Rule.custom((path)=>{
              if( path== pathRule){
                return true
              }
              if(path=="page"){
                return "This URL all ready used"
              }
              if(typeof path==="string"){
                return true
            }
                else{
                    return "Not valid URL"
                }
             },
         )
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
                 { type: 'carousel' }
           ]
        },
        {
            title: 'Footer',
            name: 'footer',
            type: 'defaultFooter',  
        }
    ]
}

