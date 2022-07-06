import { Fragment } from "react";
import Head from "next/head";
import { getBlocks } from "../../../api/Page/Blocks/getBlocks";
import { getDatabasePosts } from "../../../api/Database/getDatabasePosts"
import { getPage } from "../../../api/Page/getPage"
import Link from "next/link";
import { databaseId } from "../../index";
import { Text } from "../../../components/blog-post/blocks/Text";
import RenderBlock from "../../../components/RenderBlock";
import { getUsers } from "../../../api/User/getUsers";
import { Tag } from "../../../components/blog-post/Tag"

export default function Post({ page, blocks, users }) {
  if (!page || !blocks) {
    return <div />;
  }
  // console.log("page", page)
  // console.log("users", users)
  // styling of image probably needs to be pulled out
  return (
    <div>
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article>
        {/* {blog header} */}
          <img src={page.cover ? page.cover.external.url : ""} style={page.cover? { display: "block", width: "100%", height: "30vh", objectFit: "cover", objectPosition: "center 34.27%" }: {}} /> 
        <h1>
          <Text text={page.properties.Name.title} />
        </h1>
        <p>{"by "+users[page.created_by.id]}</p> 
        <p>{page.properties.Tags.multi_select[0] ?"Tags: ": ""}<Tag value={page.properties.Tags.multi_select}/></p>    
        <section>
          {blocks.map((block:any) => ( <RenderBlock key={block.id} block={block} /> ))}
          <Link href="/">
            <a>← Go home</a>
          </Link>
        </section>
      </article>
    </div>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabasePosts(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id!;
  const page = await getPage(id);
  const users = await getUsers();
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
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
    // Add child blocks if the block should contain children but none exists
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