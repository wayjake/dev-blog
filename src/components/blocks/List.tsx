import { Text } from "./Text";
import { renderNestedList } from "./NestedList";

//@ts-ignore
const List:React.FC = ({ type, text }) => {
  return (
    <li>
    <Text text={text} />
    {!!type.children && renderNestedList(block)}
  </li>); 
}

export default List;