import { Fragment } from "react";
import { Text } from "./Text";
import {ToggleProp } from "../../types/props/blockProps"


export const Toggle = ({  text, toggleContent }: ToggleProp) => {
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