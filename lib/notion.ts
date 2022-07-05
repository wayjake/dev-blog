import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
});

// @ts-ignore
export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    //@ts-ignore
    database_id: databaseId,
  });
  return response.results;
};

// @ts-ignore
export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

// @ts-ignore
export const getBlocks = async (blockId) => {
  const blocks = [];
  let cursor;
  while (true) {
// @ts-ignore
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
};