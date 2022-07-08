import { notion } from "../../utils/notion";

// seperate and return block objects for render on post
export const getBlocks = async (blockId: string) => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor }: any = await notion.blocks.children.list({
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