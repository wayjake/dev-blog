interface ImageProps {
  imgUrl: string;
  imgCaption: string;
}

export const Image = ({ imgUrl, imgCaption }: ImageProps) => {
  return (
    <figure>
      <img src={imgUrl} alt={imgCaption} />
      {imgCaption && <figcaption>{imgCaption}</figcaption>}
    </figure>
  )
}

export default Image;