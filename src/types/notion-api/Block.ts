import { CreatePageParameters, GetBlockResponse } from "@notionhq/client/build/src/api-endpoints";
  //exports the PageProperties type 
  export type BlockProperties = Pick<CreatePageParameters, "properties">;
  
  // this exports the Page type we get from the Database
  export type Block = GetBlockResponse; 
