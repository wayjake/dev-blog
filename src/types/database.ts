import User from './user';
import File from "./file";

type Database = {
  object: "database";
  id: string;
  created_time: string;
  created_by: User;
  last_edited_time?: string;
  last_edited_by?: User;
  title: string;
  description: string;
  icon?: File;
  cover?: File;
  properties: object;
  parent?: object;
  url: string;
  archived: boolean;
  is_inline: boolean;
}

export default Database;