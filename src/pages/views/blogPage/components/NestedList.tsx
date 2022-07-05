import { renderBlock } from './../[id]'

// @ts-ignore
export const renderNestedList = (block) => {
    const { type } = block;
    const value = block[type];
    if (!value) return null;
  
    const isNumberedList = value.children[0].type === 'numbered_list_item'
  
    if (isNumberedList) {
      return (
        <ol>
          {value.children.map((block) => renderBlock(block))}
        </ol>
      )
    }
    return (
      <ul>
        {value.children.map((block) => renderBlock(block))}
      </ul>
    )
  }

  export default renderNestedList