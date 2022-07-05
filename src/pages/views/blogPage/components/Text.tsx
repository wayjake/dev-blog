//@ts-ignore
export const Text:React.FC  = ({ text }) => {
    if (!text) {
      return null;
    }
  // @ts-ignore
    return text.map((value) => {
      console.log(value)
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