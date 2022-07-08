import {TextProp } from "../../types/props/blockProps"


export const Text = ({ text, url }: TextProp) => {
  console.log("Text text", text)
  if (url) {
    return (
      <a href={url}><span>{text}</span></a>
    )
  } else {
    return (
      <span>{text}</span>
    )
  }
};

export default Text;