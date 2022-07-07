import { Text } from "./Text";

const Paragraph:React.FC = ({ text }: any) => {
  return (
    <p>
      <Text text={text} />
    </p>
  );
}

export default Paragraph;