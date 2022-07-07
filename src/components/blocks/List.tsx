import { Text } from "./Text";
import { renderNestedList } from "./NestedList";

interface ListProps {
  type: string;
  text: string;
}

const List = ({ type, text }: ListProps) => {
  return (
    <li>
    <Text text={text} />
    </li>
  ); 
}

export default List;