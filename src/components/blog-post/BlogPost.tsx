import Head from "next/head";
import Link from "next/link";
import {Tag, Text, RenderBlock} from "../blocks";
import * as S from './BlogPost.styled'
import style from 'styled-jsx'
import { BlogPostProps } from "../../types/props/componentProps";
import { CoverImage } from "../blocks/CoverImage";
import {BlogPostHeader} from "./BlogPostHeader"

export default function BlogPost({ page, blocks, users }: BlogPostProps) {
  if (!page || !blocks) {
    return null;
  }
  return (
    <div>
      {/* <CoverImage src = {page.cover ? page.cover.external.url : "" }/> */}
      <article>
        {/* {blog header} */}
        {/* <BlogPostHeader page = {page} users = {users} blocks = {blocks}/>                 */}
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