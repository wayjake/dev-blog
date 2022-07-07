//@ts-ignore
export const Tag:React.FC = ({ value }) => {
    return value.map((value) => {
      const {
        name,
        color
      } = value;
      return (
        <span style={{backgroundColor:value.color, padding:"0.125rem"}}>
        {value.name}
      </span>
      );
    });
}

export default Tag;





