import Link from "next/link";
import { title } from "process";
import {Tag, Text} from "../blocks";
import { Post } from "../../types/props/componentProps";
import { Header } from "./Header";
import { initProps } from "../../types/props/initialProps";

export const BlogList:React.FC<initProps>= ({ posts, users }) => {

  console.log("posts", posts); 
  return (

    <div>
        <Header />
        <ol>
        {/* {posts.map((post: Page) => { */}
          {posts.map((post: Post) => {
            
            const date = new Date(post.last_edited_time as string).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );

            return (
              <li key={post.id}>
                <h3>
                  <Link href={`./views/blog-post/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name?.title[0]?.text?.content} />
                    </a>
                  </Link>
                </h3>

            <p>{"by "+users[(post.created_by.id as unknown as number)]}</p>
            <p>{post?.properties?.Tags?.multi_select[0] ?"Tags: ": ""}<Tag values={post?.properties?.Tags?.multi_select ? post.properties.Tags.multi_select : null}/></p>               

              <p><Text text={post.properties.Summary?.rich_text[0]?.text?.content} /></p>

                <p>{date}</p>
                <Link href={`./views/blog-post/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );

          })}
        </ol>
    </div>
    )
 }
 
 export default BlogList;