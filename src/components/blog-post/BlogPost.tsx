import Head from "next/head";
import Link from "next/link";
import {Tag, Text, RenderBlock} from "../blocks";
import {StyledBlogPost} from './BlogPost.Styled'
import style from 'styled-jsx'

export default function BlogPost({ page, blocks, users }) {
  if (!page || !blocks) {
    return null;
  }
  return (
    <div>
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

      <style jsx>{`
        h1 {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}