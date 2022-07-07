interface TextProps {
  // annotations: {
  //   bold: string;

  // }
  text: {
    link: { url: string}
    content: string
  }
}


export const Text: React.FC = ({ text }: TextProps) => {
  console.log("[Text.tsx]:", text);
    if (!text) {
      return null;
    }
    return text.map((value: any) => {
      const {
        text,
      } = value;
      return (
        <span>
          {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
        </span>
      );
    });
  };

  export default Text;