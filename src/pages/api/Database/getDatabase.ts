import { Client } from "@notionhq/client";

//Notion Clien Authentication
const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
});

// Pull of Database Object/List will return a list of objects (pages)
export const getDatabase = async (databaseId: string) => {
    const response = await notion.databases.query({
      //@ts-ignore
      database_id: databaseId,
    });
    return response.results;
  };