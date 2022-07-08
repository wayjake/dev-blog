interface TagProps {
  value: {
    [key: string]:{
      color: string
      name: string
    }
  }
}

export const Tag = ({ value }: TagProps) => {
    console.log("Tag", value);
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





