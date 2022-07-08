import {ImageProp } from "../../types/props/blockProps"

export const Image = ({ imgUrl, imgCaption }: ImageProp) => {
  return (
    <figure>
      <img src={imgUrl} alt={imgCaption} />
      {imgCaption && <figcaption>{imgCaption}</figcaption>}
    </figure>
  )
}

export default Image;