// import { Page } from "../notion-api/Page"
import { User } from "../notion-api/User"
import { Block } from "../notion-api/Block"
import { Post } from "../../components/blog-list/BlogList";

export interface BlogPostProps {
  // page: Page;
  page: Post;
  users: User[];
  blocks: Block[];
}

export interface RenderBlockProps {
  block: Block;
}
