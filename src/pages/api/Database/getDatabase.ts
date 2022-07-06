import { Client } from "@notionhq/client";

//Notion Clien Authentication
const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
});

// Pull of Database Object/List will return a list of objects (pages)
export const getDatabase = async () => {
    const response = await notion.databases.query({
      //@ts-ignore
      database_id: `${process.env.NOTION_DATABASE_ID}`,
    });
    return response.results;
  };