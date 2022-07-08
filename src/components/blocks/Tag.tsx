export interface TagProps {
  values: TagProp[] | null
}

export interface TagProp extends TagProps {
  color: string
  name: string
  id: string
}

export const Tag = ({ values }: TagProps) => {
    return (<span>
      {values?.map((value) => {
      const {
        name,
        color
      } = value;
      return (
      <span key={value.id} style={{backgroundColor:value.color, padding:"0.125rem", border:"3px solid #000", borderRadius:"25px", marginRight:"0.125rem", color:"white", paddingLeft:"0.5rem", paddingRight:"0.5rem"}}>
        {value.name}
      </span>
      );
    })}
    </span>);
}

export default Tag;





