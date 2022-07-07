import User from './user';
import File from './file';
import {
  CreatePageParameters,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints"; 


type Page = {
  object: 'page';
  id: string;
  created_time: string;
  created_by: User;
  last_edited_time?: string;
  last_edited_by?: User;
  archived: boolean;
  icon?: File;
  cover?: File;
  properties: {
    Name: { title: string | object[] }
    Published: { checkbox: boolean}
    Tags: { multi_select: string[] }
    Summary: { rich_text: string }
  };
  parent?: object;
  url: string;
}

export default Page;