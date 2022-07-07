import Link from "next/link";
import Page from "../../types/page";
import User from "../../types/user";
import {Tag, Text} from "../blocks";
import { Header } from "./Header";

interface IBlogListProps {
  posts: Page[];
  users: User[];  
}

const BlogList:React.FC<IBlogListProps>= ({ posts, users }) => {
return (
    <div>
        <Header />
        <ol>
          {posts.map((post: Page) => {
            
            const date = new Date(post.last_edited_time as string).toLocaleString(
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
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>
                    
            <p>{"by "+users[post.created_by.id]}</p>
            <p>{post.properties.Tags.multi_select[0] ?"Tags: ": ""}<Tag value={post.properties.Tags.multi_select}/></p>               

              <p><Text text={post.properties.Summary?.rich_text} /></p>

                <p>{date}</p>
                <Link href={`./views/blog-post/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );
          } else return null;
          })}
        </ol>
    </div>
    )
 }


 export default BlogList;