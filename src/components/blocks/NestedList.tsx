import RenderBlock from './RenderBlock';

export const renderNestedList = (listType: any, block: any) => {
    const { type } = block;
    const value = block[type];
    if (!value) return null;


  
    if (listType === 'numbered_list_item') {
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