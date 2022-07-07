import {BlogList} from "./views/blog-list/BlogList";
import { getDatabasePosts } from "./api/Database/getDatabasePosts";
import { getUsers } from "./api/User/getUsers";
import Page from "../types/page";
import {ThemeProvider } from 'styled-components'
import GlobalStyle  from '../styles/global'

// @ts-ignore

export const databaseId = process.env.NOTION_DATABASE_ID;

interface IHomeProps {
  posts: Page[];
  users: { [key: string]: string };  
}

export default function Home({ posts, users}: IHomeProps) {

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