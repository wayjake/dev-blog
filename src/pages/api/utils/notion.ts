import { Client } from "@notionhq/client";

//Notion Client Authentication
export const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
});

export const databaseId = process.env.NOTION_DATABASE_ID;