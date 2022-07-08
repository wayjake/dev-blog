import { Fragment } from "react";
import { Text } from "./Text";
import { renderNestedList } from "./NestedList";
import {ToggleProp } from "../../types/props/blockProps"


export const Toggle = ({  text, toggleContent }: ToggleProp) => {
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