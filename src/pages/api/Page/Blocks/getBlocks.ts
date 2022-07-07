<<<<<<< HEAD:src/api/Page/Blocks/getBlocks.ts
import notion from "../../Client";

=======
>>>>>>> 9e3b938b4b9bbceeef01e41d98a34bd4f1170981:src/pages/api/Page/Blocks/getBlocks.ts
// @ts-ignore
import { notion } from "../../utils/notion";

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
<<<<<<< HEAD:src/api/Page/Blocks/getBlocks.ts
=======
  // console.log("BLOCK LIST",blocks)
>>>>>>> 9e3b938b4b9bbceeef01e41d98a34bd4f1170981:src/pages/api/Page/Blocks/getBlocks.ts
  return blocks;
}; 