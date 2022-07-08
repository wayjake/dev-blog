// import { Page } from "../notion-api/Page"
import { User } from "../notion-api/User"
import { Block } from "../notion-api/Block"
import { TagProp } from "./blockProps"

export interface BlogPostProps {
  // page: Page;
  page: Post;
  users: User[];
  blocks: Block[];
}

export interface RenderBlockProps {
  block: Block;
}

export interface Post {
  archived?: boolean;
  cover?: {
    external: {
      url: string;
    }
  }
  created_by: {
    id: string
  }
  icon?: string | null;
  id?: string
  lasted_edited_by?: { 
    id: string 
  };
  last_edited_time?: string;
  object?: string
  parent?: {
    type: string
    database_id: string
  }
  url?: string;
  properties: {
    Published?: {
      checkbox: boolean
    }
    Name?: {
       title: {
        [key: string]: {
          plain_text?: string
          text: {
          content: string
          }
        }
     }
  }
    Tags?: {
      multi_select: TagProp[]
    }
    Summary?: {
      rich_text:{
        [key: string]: {
          text: {
            content: string
          }
        }
      }
    }
  }
}