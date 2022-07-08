import {
    CreatePageParameters,
    QueryDatabaseResponse,
    GetPageResponse,
    GetPagePropertyResponse
  } from "@notionhq/client/build/src/api-endpoints";
  //exports the PageProperties type 
  export type PageProperties = Pick<CreatePageParameters, "properties">;
  
  // this exports the Page type we get from the Database
  export type Pages = GetPageResponse; 
