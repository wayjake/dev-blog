import { notion } from "../utils/notion";

//@TODO add types
export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};