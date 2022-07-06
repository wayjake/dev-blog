import { Text } from "./Text";

//@ts-ignore
const Paragraph:React.FC = ({ text }) => {
  return (
    <p>
      <Text text={text} />
    </p>
  );
}

export default Paragraph;