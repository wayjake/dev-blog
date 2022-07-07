import { Client } from "@notionhq/client";

//Notion Clien Authentication
const notion = new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
});

export const getUsers = async () => {
    const response = await notion.users.list();
    let userData = response.results
    console.log(`[getUsers] userData:`, userData);
    let users = Object.assign({}, ...userData.map((user) => ({[user.id]: user.name})));
    return users
}

