import { Text } from "./Text";
import { renderNestedList } from "./NestedList";

interface ToDoProps {
  text: string;
  checked: boolean;
  id: string;
}
export const ToDo = ({  text,checked,id }: ToDoProps) => {
  console.log("TODO TEXT",text)
  return (
    <label htmlFor={id}>
    <input type="checkbox" id={id} defaultChecked={checked} />{" "}
    <Text text={text} />
  </label>
  )
}

export default ToDo;