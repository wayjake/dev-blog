import { Fragment } from "react";
import { Text } from "./Text";
import { renderNestedList } from "./NestedList";
import { renderBlock } from "../[id]";

//@ts-ignore
const Toggle:React.FC = ({  text }) => {
  return (
    <details>
    <summary>
      <Text text={text.rich_text} />
    </summary>
    {text.children?.map((block) => (
      <Fragment key={block.id}>{renderBlock(block)}</Fragment>
    ))}
    </details>
  )
}

export default Toggle;