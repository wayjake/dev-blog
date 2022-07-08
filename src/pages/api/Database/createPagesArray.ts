import Page from "../../../types/old-types-delete-later/page"
import {Pages } from "../../../types/notion-api/PageResponse"
import { Post } from "../../../types/props/componentProps"
export function createPagesArray(response: Pages[]){
    const pages = response.map( v => {
      return{
        
      }
    }) as Post[]; 
}
/*
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
*/