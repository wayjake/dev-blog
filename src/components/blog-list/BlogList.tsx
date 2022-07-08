import Link from "next/link";
import { title } from "process";
import {Tag, Text} from "../blocks";
import { Post } from "../../types/props/componentProps";
import { Header } from "./Header";
import { initProps } from "../../types/props/initialProps";
import Card from "./Card";
import { Pages  } from "../../types/notion-api/PageResponse";
import { BlogListProps } from "../../types/props/componentProps";

export const BlogList:React.FC<BlogListProps> = ({ posts }) => {
// export const BlogList:React.FC<initProps>= ({ posts, users }) => {
  return (
    <div>
        <Header />
        {/* <ol id="cards-list"> */}
          {posts.map((post: Post) => {
            return (
              <Card 
              key={post.id} 
              title={post.properties.Name?.title[0]?.text?.content} 
              date={new Date(post.last_edited_time as string)} 
              tags={post?.properties?.Tags?.multi_select} 
              body={post.properties.Summary?.rich_text[0]?.text?.content} 
              link={`./views/blog-post/${post.id}`} />
            );
          })}
        {/* </ol> */}
    </div>
    )
 }
 
 export default BlogList;