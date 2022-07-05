//@ts-ignore
export const Bookmark:React.FC = ({ value }) => {
    const href = value.url
    return (
      <a href={ href } target="_brank">
        { href }
      </a>
    );
}

export default Bookmark;





