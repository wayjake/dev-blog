import { Fragment } from "react";
import { Text } from "./Text";
import { renderNestedList } from "./NestedList";
import RenderBlock from "../../RenderBlock";

interface ToggleProps {
  text?: string;
  toggleContent?: string;  
}

export const Toggle = ({  text, toggleContent }: ToggleProps) => {
  console.log("Toggle Component:", toggleContent)
  return (
    <details>
    <summary>
      <Text text={text} />
    </summary>
      <Text text={toggleContent} />
    </details>
  )
}

export default Toggle;