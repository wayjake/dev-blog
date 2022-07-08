import User from "./user";

type Block = {
  object: "block";
  id: string;
  parent?: object;
  type: string;
  created_time: string;
  created_by: User;
  last_edited_time?: string;
  last_edited_by?: User;
  archived: boolean;
  has_children: boolean;
  // blocks also have the value of the type, as a key, with an object as a value
  //   {
  //   "type": "paragraph",   <---- value of type
  //   //...other keys excluded
  //   "paragraph": {    <---- the value as a key
  //     "rich_text": [{
  //       "type": "text",
  //       "text": {
  //         "content": "Lacinato kale",
  //         "link": null
  //       }
  //     }],
  //     "color": "default",
  //     "children":[{
  //       "type": "paragraph"
  //       // ..other keys excluded
  //     }]
  //   }
  // }
}

export default Block;