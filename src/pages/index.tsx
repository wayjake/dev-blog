import {BlogList} from "./views/blog-list/BlogList";
import { getDatabasePosts } from "../api/Database/getDatabasePosts";
import { getUsers } from "../api/User/getUsers";
import {ThemeProvider } from 'styled-components'
import  Database  from "../types/database"; 
import { Page } from "../types/notion-api/PageExtraction";
import { UserData } from "../types/notion-api/UserDataExtraction";



export default function Home({ posts, users}) {
console.log("postCollection", posts)
console.log("users", users)
  return (
    <div>
        <BlogList posts={posts} users={users}/>
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