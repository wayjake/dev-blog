import {BookmarkProp } from "../../types/props/blockProps"
//@ts-ignore

export const Bookmark:React.FC<BookmarkProp> = ({ value }) => {
    const href = value.url
    return (
      <a href={ href } target="_blank">
        { href }
      </a>
    );
}

export default Bookmark;





