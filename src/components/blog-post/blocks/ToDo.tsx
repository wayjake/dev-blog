import { Text } from "./Text";
import { renderNestedList } from "./NestedList";

//@ts-ignore
export const ToDo:React.FC = ({  text, id }) => {
  return (
    <label htmlFor={id}>
    <input type="checkbox" id={id} defaultChecked={text.checked} />{" "}
    <Text text={text.rich_text} />
  </label>
  )
}

export default ToDo;