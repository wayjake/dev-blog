import { notion } from "../utils/notion";
import { Pages } from "../../../types/notion-api/PageResponse"
// Pull of Database Object/List will return a list of objects (pages)
export const getDatabasePosts = async () => {
  const response = await notion.databases.query({
    filter: {
      and: [
        {
          "property": "Published",
          "checkbox": {
            "equals": true
          }
        }
      ]
    },
    
    //@ts-ignore
    //database id string is used here now
    database_id: `${process.env.NOTION_DATABASE_ID}`,
  });
  console.log("getdatabaseposts"); 
  let pagesInDatabase: Pages[] = response.results; 
  if("properties" in pagesInDatabase[0]){
    console.log(pagesInDatabase[0].properties); 
  }
  console.log("pages in db", pagesInDatabase); 
  return pagesInDatabase; //returns a Page[] object 
};