import Link from "next/link";
import { Text } from "../../../components/blog-post/blocks/Text";
import { BlogListHeader } from "../../../components/blog-list/BlogListHeader";
import { Tag } from "../../../components/blog-post/Tag"

//@ts-ignore
export const BlogList:React.FC  = ({ posts, users }) => {

return (
    <div>
    <BlogListHeader />
    <ol>
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );

            if (post.properties.Published.checkbox){
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

              <p><Text text={post.properties.Summary.rich_text} /></p>

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