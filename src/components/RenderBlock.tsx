
import { Bookmark, Code, File, Image, List, Paragraph, Text, ToDo, Toggle } from "../components/blog-post"
import Block from "../types/block";

interface Props {
  block: Block
}

interface Value {
  rich_text?: [{
    text?: {
      content: string;
      url: string;
    }
  }];
  children?: [{
    type: string;
  }]
  title?: string;
  text?: object;
  url?: string;
  external?: { url: string };
  file?: { url: string };
  type?: string;
  caption?: any;
  checked?: boolean;
  color?: string;
}
export const RenderBlock: React.FC = ({ block }) => {
console.log("BLOCKZ", block)
// export const RenderBlock: React.FC<Props> = ({ block }) => {
  // const notionType: string = block.type;
  // const id = block.id;
  // const value: Value = block.notionType;
  const { type, id } = block;
  const value = block[type];
  // const value: Value = block.notionType;

  const typeMap = new Map([
    // ["paragraph", <Paragraph text={value.rich_text?.text?.content}/>],
    ["paragraph", <p><Text text={value.rich_text?.text?.content}/></p>],
    ["heading_1", <h1><Text text={value.rich_text?.text?.content} /></h1>],
    ["heading_2", <h2><Text text={value.rich_text?.text?.content}/></h2> ],
    ["heading_3", <h3><Text text={value.rich_text?.text?.content}/></h3>],
    ["bulleted_list_item", <List type={type} text={value.rich_text ? value.rich_text[0].text?.content:""} />],
    // numbered list not currently rendering properly, item will be unordered list for now
    ["numbered_list_item", <List type={type} text={value.rich_text ? value.rich_text[0].text?.content:""} />],        
    ["to_do", <ToDo text={value.rich_text ? value.rich_text[0].plain_text: ""} checked={value.checked} id={id}/>],
    ["toggle", <Toggle 
      text={value.rich_text ? value.rich_text[0]?.text?.content: ""} 
      toggleContent={value.children ? 
        value.children[0].paragraph?.rich_text ? value.children[0].paragraph?.rich_text[0].text.content : "" : ""}
      />],
    ["child_page", <p>Page: {value.title}, linking to pages not currently supported!</p>],
    ["image", <Image 
      imgUrl={value.type == "external"? value.external?.url : value.file?.url }
      imgCaption={value.caption ? value.caption[0]?.plain_text : ""}
      />],
    ["divider", <hr key={id}/>],
    ["quote", <blockquote><Text text={value.rich_text ? value.rich_text[0].text?.content: ""}/></blockquote>],
    ["code", <Code text={value.rich_text ? value.rich_text[0].text?.content : ""} id={id}/>],
    ["file", <File value={value}/>],
    ["bookmark", <Bookmark value={value} />],
  ])

  if (!typeMap.has(type)) {
    return (
      <div>{`${type} not currently supported!`}</div>
    )
  }
  
  return (
    <div>
      {typeMap.get(type)}
    </div>
  );
}

export default RenderBlock;