import Head from "next/head";
import Link from "next/link";
import RenderBlock from "../blocks/RenderBlock";
import Tag from "../blocks/Tag";
import Text from "../blocks/Text";

export default function BlogPost({ page, blocks, users }) {
  if (!page || !blocks) {
    return null;
  }
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