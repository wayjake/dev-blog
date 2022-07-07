<<<<<<< HEAD
import {BlogList} from "./views/blog-list/BlogList";
import { getDatabasePosts } from "../api/Database/getDatabasePosts";
import { getUsers } from "../api/User/getUsers";
import {ThemeProvider } from 'styled-components'
import  Database  from "../types/database"; 
import { Page } from "../types/notion-api/PageExtraction";
import { UserData } from "../types/notion-api/UserDataExtraction";


=======
import {BlogList} from "../components/blog-list";
import { getDatabasePosts } from "./api/Database/getDatabasePosts";
import { getUsers } from "./api/User/getUsers";
import Page from "../types/page";
import {ThemeProvider } from 'styled-components'
import GlobalStyle  from '../styles/global'
import Head from "next/head";

// @ts-ignore
interface IHomeProps {
  posts: Page[];
  users: { [key: string]: string };  
}

export default function Home({ posts, users}: IHomeProps) {
>>>>>>> 9e3b938b4b9bbceeef01e41d98a34bd4f1170981

export default function Home({ posts, users}) {
console.log("postCollection", posts)
console.log("users", users)
  return (
    <div>
        <Head>
          <title>Dubsado Notion Dev</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
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