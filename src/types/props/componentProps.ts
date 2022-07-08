import { Page } from "../notion-api/Page"
import { User } from "../notion-api/User"
import { Block } from "../notion-api/Block"

export interface BlogPostProps {
  page: Page;
  users: User[];
  blocks: Block[];
}

export interface RenderBlockProps {
  block: Block;
}
