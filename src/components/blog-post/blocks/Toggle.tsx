import { Fragment } from "react";
import { Text } from "./Text";
import { renderNestedList } from "./NestedList";
import RenderBlock from "../../RenderBlock";

//@ts-ignore
const Toggle:React.FC = ({  text }) => {
  return (
    <details>
    <summary>
      <Text text={text.rich_text} />
    </summary>
    {text.children?.map((block) => (
      <RenderBlock key={block.id} block={block} />
    ))}
    </details>
  )
}

export default Toggle;