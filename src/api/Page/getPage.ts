import { Client } from "@notionhq/client";

//@todo move client into a separate exported module
const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
});

//@TODO add types
export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};