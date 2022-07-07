import { Client } from "@notionhq/client";
import { Page } from "../../types/notion-api/PageExtraction";
//Notion Clien Authentication
const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
});
// Pull of Database Object/List will return a list of objects (pages)
export const getDatabasePosts = async () => {
  const response = await notion.databases.query({
    //@ts-ignore
    //database id string is used here now
    database_id: `${process.env.NOTION_DATABASE_ID}`,
  });
  let pages: Page[] = response.results; 
  return pages;
}; 

 