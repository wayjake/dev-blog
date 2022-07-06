import Link from "next/link";
import { Text } from '../../blogPage/components/Text';
import { getDatabase } from "../../../api/Database/getDatabase";
import { Props } from "../models/props";

export const BlogList = ({posts}) => {


    return (
        <div>
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
    )
}

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