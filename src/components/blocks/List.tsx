import { Text } from "./Text";
import { renderNestedList } from "./NestedList";
import {ListProp } from "../../types/props/blockProps"


const List = ({ type, text }: ListProp) => {
  return (
    <li>
    <Text text={text} />
    </li>
  ); 
}

export default List;