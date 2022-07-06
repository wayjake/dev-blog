import User from './user';
import File from './file';

type Page = {
  object: "page";
  id: string;
  created_time: string;
  created_by: User;
  last_edited_time?: string;
  last_edited_by?: User;
  archived: boolean;
  icon?: File;
  cover?: File;
  properties: {
    Name: { title: string }
    Published: { checkbox: boolean}
  };
  parent?: object;
  url: string;
}

export default Page;