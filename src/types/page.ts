import IUser from './user';
import IFile from './file';

interface IPage {
  object: "page";
  id: string;
  created_time: string;
  created_by: IUser;
  last_edited_time?: string;
  last_edited_by?: IUser;
  archived: boolean;
  icon?: IFile;
  cover?: IFile;
  properties: {};
  parent?: {};
  url: string;
}

export default IPage;