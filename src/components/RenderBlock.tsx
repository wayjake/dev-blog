
import { Bookmark, Code, File, Image, List, Paragraph, Text, ToDo, Toggle } from "../components/blog-post"
export const RenderBlock = ({ block }) => {
  const { type, id } = block;
  const value = block[type];

  const typeMap = new Map([
    ["paragraph", <Paragraph text={value.rich_text}/>],
    ["text", <p><Text text={value.text}/></p>],
    ["heading_1", <h1><Text text={value.rich_text} /></h1>],
    ["heading_2", <h2><Text text={value.rich_text}/></h2> ],
    ["heading_3", <h3><Text text={value.rich_text}/></h3>],
    ["bulleted_list_item", <List type={type} text={value.rich_text} />],
    ["numbered_list_item", <List type={type} text={value.rich_text} />],        
    ["to_do", <ToDo text={value} id={id}/>],
    ["toggle", <Toggle text={value} id={id}/>],
    ["child_page", <p>Page: {value.title}, linking to pages not currently supported!</p>],
    ["image", <Image value={value}/>],
    ["divider", <hr key={id}/>],
    ["quote", <blockquote><Text text={value.rich_text}/></blockquote>],
    ["code", <Code text={value} id={id}/>],
    ["file", <File value={value} type={type}/>],
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