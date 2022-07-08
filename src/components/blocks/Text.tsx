import {TextProp } from "../../types/props/blockProps"


export const Text = ({ text, url }: TextProp) => {
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