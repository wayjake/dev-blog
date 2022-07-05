const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });

//@ts-ignore
export default async (req, res) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  console.log(response);
  res.status(200).json({ response });
};