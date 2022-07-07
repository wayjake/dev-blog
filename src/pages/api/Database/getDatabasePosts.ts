import { notion } from "../utils/notion";

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

  return response.results;
};