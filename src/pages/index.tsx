import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "./api/Database/getDatabase";
import { Text } from './views/blogPage/components/Text';
import { BlogHome } from "./views/blog-list/BlogHome";

// @ts-ignore
export default function Home({ posts }) {
  return (
    <div>
      {/* so this is where blogList should start */}
      <BlogHome/>   
        {/** PULL DOWN BELOW INTO BLOG LIST COMPONENTS **/}
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
            return (
              <li key={post.id}>
                <h3>
                  <Link href={`./views/blogPage/${post.id}`}>
                    <a>
                      <Text text={post.properties.Name.title} />
                    </a>
                  </Link>
                </h3>

                <p>{date}</p>
                <Link href={`./views/blogPage/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );
          })}
        </ol>
    </div>
  );
}

// Does Initial Pull of Database
export const getStaticProps = async () => {
  console.log("hello");
  const database = await getDatabase();
  
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};