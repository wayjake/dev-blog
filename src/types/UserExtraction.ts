/*import {
    CreatePageParameters,
    QueryDatabaseResponse,
  } from "@notionhq/client/build/src/api-endpoints";
  
  export type PageProperties = Pick<CreatePageParameters, "properties">;
  
  export type Page = QueryDatabaseResponse["results"];*/

  import {
    GetUserResponse
  } from "@notionhq/client/build/src/api-endpoints"

  //exports the User type that the response returns 
  export type User = GetUserResponse;