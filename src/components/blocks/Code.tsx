//@ts-ignore
interface CodeProps {
  text?: string;
  id: string;
}

const Code = ({  text, id }: CodeProps) => {
  return (
    <pre>
        <code key = {id}>
        {text}
        </code>
    </pre>

  )
}

export default Code;