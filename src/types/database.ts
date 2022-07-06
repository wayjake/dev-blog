import IUser from './user';
import IFile from "./file";

interface IDatabase {
  object: "database";
  id: string;
  created_time: string;
  created_by: IUser;
  last_edited_time?: string;
  last_edited_by?: IUser;
  title: string;
  description: string;
  icon?: IFile;
  cover?: IFile;
  properties: {};
  parent?: {};
  url: string;
  archived: boolean;
  is_inline: boolean;
}

export default IDatabase;