import NavBar from "../components/nav-bar/NavBar";
import {BlogList} from "../components/blog-list";
import { getDatabasePosts } from "./api/Database/getDatabasePosts";
import { getUsers } from "./api/User/getUsers";
import { Pages } from "../types/notion-api/PageResponse";
import {ThemeProvider } from 'styled-components'
import Head from "next/head";
import { initProps } from "../types/props/initialProps";
import { Post } from "../types/props/componentProps";
//import { Post } from "../components/blog-list/BlogList";
import { BlogListProps } from "../types/props/componentProps"
// @ts-ignore


export default function Home({ posts, users }: BlogListProps) {
    /*if("properties" in posts[0]){
      console.log("properties found", posts[0].properties); 
    } */
  
  return (
        <BlogList posts={posts} users={users}/>
  );
}

// Does Initial Pull of Database
export const getStaticProps = async () => {
  const databasePosts = await getDatabasePosts();
  const users = await getUsers();
  // let props: initProps = {
  let props: initProps = { 
    posts: databasePosts, 
    users: users, 
  }
  
  //@Todo: getUsers() is called more times than it needs to be
  return {
    props,
    revalidate: 1,
  };
 
};