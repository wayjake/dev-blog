import { Client } from "@notionhq/client";

//Notion Client Authentication
const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
});

export default notion;