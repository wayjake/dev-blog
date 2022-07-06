import Text from "./Text";

export default const RenderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  const objTypes = [
    "paragraph", "heading_1", "heading_2", "heading_3", "bulleted_list_item", 
    "numbered_list_item", "to_do", "toggle", "child_page", "image", "bookmark",
    "divider", "code", "file", "quote"
  ]

  return (
    <main>
    <div>{type == "paragraph" ? <Paragraph text={value.rich_text}/>: "" }</div>
     <div>{type == "heading_1" ? <h1><Text text={value.rich_text}/></h1>: "" }</div>
     <div>{type == "heading_2" ? <h2><Text text={value.rich_text}/></h2>: "" }</div>
     <div>{type == "heading_3" ? <h3><Text text={value.rich_text}/></h3>: "" }</div>
     <div>{type == "bulleted_list_item" || type == "numbered_list_item" ?        
          <List type={type} text={value.rich_text} />: ""}</div>
     <div>{type == "to_do" ? <ToDo text={value} id={id}/>: "" }</div>
     <div>{type == "toggle" ? <Toggle text={value} id={id}/>: "" }</div>
     <div>{type == "child_page" ? <p>Page: {value.title}, linking to pages not currently supported!</p>: "" }</div>
     <div>{type == "image" ? <Image value={value}/>: "" }</div>
     <div>{type == "divider" ? <hr key={id}/>: "" }</div>
     <div>{type == "quote" ? <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>: "" }</div>
     <div>{type == "code" ? <Code text={value} id={id}/>: "" }</div>
     <div>{type == "file" ? <File value={value} type={type}/>: "" }</div>
     <div>{type == "bookmark" ? <Bookmark value={value} />: "" }</div>
    <div>{objTypes.indexOf(type) == -1  ? `${type} not currently supported!` : "" }</div>
    </main>
  );
}