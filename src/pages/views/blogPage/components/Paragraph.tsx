import { Text } from "../[id]";

const Paragraph: React.FC = ({ text }) => {
  return (
    <p>
      <Text text={text} />
    </p>
  );
}

export default Paragraph;