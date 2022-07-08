import Link from "next/link";
import { title } from "process";
import { Page } from "../../types/notion-api/Page";
import { User } from "../../types/notion-api/User";
import {Tag, Text} from "../blocks";
import { Header } from "./Header";

interface BlogListProps {
  posts: Post[];
  users: User[];
}

interface Post {
  archived?: boolean;
  cover?: string | null;
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
          text: {
          content: string
        }
        }
     }
  }
    Tags?: {
      multi_select: {
        [key: string]: {
          name: string
          color: string
        }
      }
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
  console.log("POSTS LOG", posts)
  return (

    <div>
        <Header />
        <ol>
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

            <p>{"by "+users[post.created_by.id]}</p>
            <p>{post?.properties?.Tags?.multi_select[0] ?"Tags: ": ""}<Tag value={post?.properties?.Tags?.multi_select}/></p>               

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