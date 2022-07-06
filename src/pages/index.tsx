import {BlogList} from "./views/blog-list/BlogList";
import { getDatabasePosts } from "../api/Database/getDatabasePosts";
import { getUsers } from "../api/User/getUsers";
// @ts-ignore

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts, users }) {

  return (
    <div>
      <main>
        <BlogList posts={posts} users={users}/>
      </main>
    </div>
  );
}

// Does Initial Pull of Database
export const getStaticProps = async () => {
  const databasePosts = await getDatabasePosts();
  const users = await getUsers();

  return {
    props: {
      posts: databasePosts,
      users: users
    },
    revalidate: 1,
  };
};