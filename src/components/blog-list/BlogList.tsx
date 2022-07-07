import Link from "next/link";
<<<<<<< HEAD:src/pages/views/blog-list/BlogList.tsx
import { Text } from "../../../components/blog-post/blocks/Text";
import { BlogListHeader } from "../../../components/blog-list/BlogListHeader";
import { Tag } from "../../../components/blog-post/Tag"
import { Page } from "../../../types/notion-api/PageExtraction";
import { UserData } from "../../../types/notion-api/UserDataExtraction";
import styled from 'styled-components'; 
=======
import Page from "../../types/page";
import User from "../../types/user";
import {Tag, Text} from "../blocks";
import { Header } from "./Header";
>>>>>>> 9e3b938b4b9bbceeef01e41d98a34bd4f1170981:src/components/blog-list/BlogList.tsx

interface BlogListProps {
  posts: Page[];
  users: UserData[];
}

<<<<<<< HEAD:src/pages/views/blog-list/BlogList.tsx
export const BlogList: React.FC = ({ posts, users }: BlogListProps) => {
  console.log("post properties Name title", posts[2].properties.Name.title)
  return (
    <div className="w-container">
    <BlogListHeader />
    <ol>
          {posts.map((post: any) => {
            const date = new Date(post.last_edited_time).toLocaleString(
=======
const BlogList:React.FC<IBlogListProps>= ({ posts, users }) => {
return (
    <div>
        <Header />
        <ol>
          {posts.map((post: Page) => {
            
            const date = new Date(post.last_edited_time as string).toLocaleString(
>>>>>>> 9e3b938b4b9bbceeef01e41d98a34bd4f1170981:src/components/blog-list/BlogList.tsx
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );

            if (post.properties?.Published?.checkbox){
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
            <p>{post.properties.Tags.multi_select[0] ?"Tags: ": ""}<Tag value={post.properties.Tags.multi_select}/></p>               

<<<<<<< HEAD:src/pages/views/blog-list/BlogList.tsx
              <p><Text text={post.properties.Summary?.rich_text[0]?.text?.content} /></p>
=======
              <p><Text text={post.properties.Summary?.rich_text} /></p>
>>>>>>> 9e3b938b4b9bbceeef01e41d98a34bd4f1170981:src/components/blog-list/BlogList.tsx

                <p>{date}</p>
                <Link href={`./views/blog-post/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );
          } else return (<span></span>);
          })}
        </ol>
    </div>
    )
 }
 
 export default BlogList;