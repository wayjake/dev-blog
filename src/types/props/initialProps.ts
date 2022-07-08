import { Page } from "../notion-api/Page";
import { User } from "../notion-api/User";
import { Post } from "../../components/blog-list/BlogList";
export interface initProps {
    posts: Page[];
    users: User[]; 
}