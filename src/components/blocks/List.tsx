import { Text } from "./Text";
// import { renderNestedList } from "./NestedList";
import { ListProp } from "../../types/props/blockProps"


const List = ({ type, text, id }: ListProp) => {
  return (
    <li key={id}>
    <Text text={text} />
    </li>
  ); 
}

export default List;