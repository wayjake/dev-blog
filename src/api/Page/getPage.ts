import notion from "../Client";
import { Pages } from "../../types/PagesExtraction" 

//@TODO add types
export const getPage = async (pageId: string) => {
  const response: Pages = await notion.pages.retrieve({ page_id: pageId });
  return response;
};