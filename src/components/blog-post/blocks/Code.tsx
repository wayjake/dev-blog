//@ts-ignore
const Code:React.FC = ({  text, id }) => {
  return (
    <pre>
        <code key = {id}>
        {text.rich_text[0].text.content}
        </code>
    </pre>

  )
}

export default Code;