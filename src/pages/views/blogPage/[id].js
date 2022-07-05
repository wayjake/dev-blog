import { Fragment } from "react";
import Head from "next/head";
import { getBlocks } from "../../../pages/api/Page/Blocks/getBlocks"
import { getDatabase } from "../../../pages/api/Database/getDatabase"
import { getPage } from "../../../pages/api/Page/getPage"
import Link from "next/link";
import { databaseId } from "../../../pages/index";
import { styles } from "../../../../styles/post.module.css"
import Paragraph from "./components/Paragraph";
import Text from "./components/Text"
import List from "./components/List";
import ToDo from "./components/ToDo";
import Toggle from "./components/Toggle";
import Image from "./components/Image";
import Code from "./components/Code";


export const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];
  console.log("value:", value)

  return (
    <main>
    <div>{type == "paragraph" ? <Paragraph text={value.rich_text}/>: "" }</div>
     <div>{type == "heading_1" ? <h1><Text text={value.rich_text}/></h1>: "" }</div>
     <div>{type == "heading_2" ? <h2><Text text={value.rich_text}/></h2>: "" }</div>
     <div>{type == "heading_3" ? <h3><Text text={value.rich_text}/></h3>: "" }</div>
     <div>{type == "bulleted_list_item" || type == "numbered_list_item" ?        
          <List type={type} text={value.rich_text} />: ""}</div>
     <div>{type == "to_do" ? <ToDo text={value} id={id}/>: "" }</div>
     <div>{type == "toggle" ? <Toggle text={value} id={id}/>: "" }</div>
     <div>{type == "child_page" ? <p>Page: {value.title}, linking to pages not currently supported!</p>: "" }</div>
     <div>{type == "image" ? <Image value={value}/>: "" }</div>
     <div>{type == "divider" ? <hr key={id}/>: "" }</div>
     <div>{type == "quote" ? <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>: "" }</div>
     <div>{type == "code" ? <Code text={value} id={id}/>: "" }</div>





    



    </main>

  )
  switch (type) {

    case "code":
      return (
        <pre className={styles.pre}>
          <code className={styles.code_block} key={id}>
            {value.rich_text[0].text.content}
          </code>
        </pre>
      );
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className={styles.file}>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case "bookmark":
      const href = value.url
      return (
        <a href={ href } target="_brank" className={styles.bookmark}>
          { href }
        </a>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <div>
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article>
        <h1>
          <Text text={page.properties.Name.title} />
        </h1>
        <section>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
          <Link href="/">
            <a>← Go home</a>
          </Link>
        </section>
      </article>
    </div>
  );
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId);
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
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
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};