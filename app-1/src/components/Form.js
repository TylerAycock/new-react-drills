import { useState } from 'react'

const Form = () => {
  const [output, setOutPut] = useState('')

  return (
    <div>
      <input type="text" onChange={e => { setOutPut(e.target.value) }} />
      <h1>{output}</h1>
    </div>
  )
}

export default Form 