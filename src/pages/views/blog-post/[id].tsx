import { getBlocks } from "../../api/Page/Blocks/getBlocks";
import { getDatabasePosts } from "../../api/Database/getDatabasePosts"
import { getPage } from "../../api/Page/getPage"

import { databaseId } from "../../api/utils/notion";

import { getUsers } from "../../api/User/getUsers";
import BlogPost from "../../../components/blog-post/BlogPost";

export default function Post({ page, blocks, users }) {
  return <BlogPost page={page} blocks={blocks} users={users}/>
}

export const getStaticPaths = async () => {
  const database = await getDatabasePosts(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id!;
  const page = await getPage(id);
  const users = await getUsers();
  const blocks = await getBlocks(id);

  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      users,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};