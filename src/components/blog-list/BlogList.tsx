import Link from "next/link";
import { title } from "process";
import { Page } from "../../types/notion-api/Page";
import { User } from "../../types/notion-api/User";
import {Tag, Text} from "../blocks";
import { TagProp } from "../blocks/Tag";
import { Header } from "./Header";
import { initProps } from "../../types/props/initialProps";

interface BlogListProps {
  posts: Post[];
  users: User[];
}

export interface Post {
  archived?: boolean;
  cover?: {
    external: {
      url: string;
    }
  }
  created_by: {
    id: string
  }
  icon?: string | null;
  id?: string
  lasted_edited_by?: { 
    id: string 
  };
  last_edited_time?: string;
  object?: string
  parent?: {
    type: string
    database_id: string
  }
  url?: string;
  properties: {
    Published?: {
      checkbox: boolean
    }
    Name?: {
       title: {
        [key: string]: {
          plain_text?: string
          text: {
          content: string
          }
        }
     }
  }
    Tags?: {
      multi_select: TagProp[]
    }
    Summary?: {
      rich_text:{
        [key: string]: {
          text: {
            content: string
          }
        }
      }
    }
  }
}
export const BlogList:React.FC<BlogListProps>= ({ posts, users }) => {
// export const BlogList:React.FC<initProps>= ({ posts, users }) => {

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