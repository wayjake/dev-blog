import notion from "../../Client";

// @ts-ignore
// seperate and return block objects for render on post
export const getBlocks = async (blockId) => {
  const blocks = [];
  let cursor;
  while (true) {
    //@ts-ignore
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