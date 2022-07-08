import { Text } from "./Text";
import {ToDoProp } from "../../types/props/blockProps"

export const ToDo = ({  text,checked,id }: ToDoProp) => {
  console.log("TODO TEXT",text)
  return (
    <label htmlFor={id}>
    <input type="checkbox" id={id} defaultChecked={checked} />{" "}
    <Text text={text} />
  </label>
  )
}

export default ToDo;