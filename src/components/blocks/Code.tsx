import {CodeProp } from "../../types/props/blockProps"

const Code = ({  text, id }: CodeProp) => {
  return (
    <pre>
        <code key = {id}>
        {text}
        </code>
    </pre>

  )
}

export default Code;