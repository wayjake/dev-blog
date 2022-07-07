interface TextProps {
  text?: string;
  url?: string;
}


export const Text = ({ text, url }: TextProps) => {
  if (url) {
    return (
      <a href={url} />
    )
  } else {
    return (
      <span>{text}</span>
    )
  }
};

export default Text;