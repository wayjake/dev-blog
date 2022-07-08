import Link from "next/link";
import {FileProp } from "../../types/props/blockProps"


//@ts-ignore
export const File:React.FC<FileProp> = ({ value }) => {
    const src_file =
    value.type === "external" ? value.external.url : value.file.url;
  const splitSourceArray = src_file.split("/");
  const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
  const caption_file = value.caption ? value.caption[0]?.plain_text : "";
  return (
    <figure>
      <div>
        📎{" "}
        <Link href={src_file} passHref>
          {lastElementInArray.split("?")[0]}
        </Link>
      </div>
      {caption_file && <figcaption>{caption_file}</figcaption>}
    </figure>
  );
}

export default File;





