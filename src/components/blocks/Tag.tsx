export interface TagProps {
  values: TagProp[] | null
}

export interface TagProp extends TagProps {
  color: string
  name: string
}

export const Tag = ({ values }: TagProps) => {
    return (<span>
      {values?.map((value) => {
      const {
        name,
        color
      } = value;
      return (
      <span style={{backgroundColor:value.color, padding:"0.125rem"}}>
        {value.name}
      </span>
      );
    })}
    </span>);
}

export default Tag;





