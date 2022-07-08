import { Pages } from "../notion-api/PageResponse";
import { User } from "../notion-api/User";
import { Post } from "../../components/blog-list/BlogList";
export interface initProps {
    posts: Pages[];
    users: User[]; 
}