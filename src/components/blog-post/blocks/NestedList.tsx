import RenderBlock from '../../RenderBlock';

export const renderNestedList = (block: any) => {
    const { type } = block;
    const value = block[type];
    if (!value) return null;
  
    const isNumberedList = value.children[0].type === 'numbered_list_item'
  
    if (isNumberedList) {
      return (
        <ol>
          {value.children.map((block: any) => <RenderBlock key={block.id} block={block} />)}
        </ol>
      )
    }
    return (
      <ul>
        {value.children.map((block: any) => <RenderBlock key={block.id} block={block} />)}
      </ul>
    )
  }

  export default renderNestedList