//@ts-ignore
interface Props {
  value: {
    url?: string;
  }
}

export const Bookmark:React.FC<Props> = ({ value }) => {
    const href = value.url
    return (
      <a href={ href } target="_blank">
        { href }
      </a>
    );
}

export default Bookmark;





