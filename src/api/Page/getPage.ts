import { Client } from "@notionhq/client";

//Notion Clien Authentication
const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
});

// Fetches Page Object based on passed pageId
export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};