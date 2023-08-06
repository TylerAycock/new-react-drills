import { useState } from 'react'
import "./Form.css"
const Form = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const clickHandler = () => {
        alert(`Username: ${userName} PassWord: ${password}`)
    }

    return (
        <div className='login'>
            <input type="text" placeholder="username" name="userName" onChange={e => { setUserName(e.target.value) }} />
            <input type="text" placeholder="password" name="password" onChange={e => { setPassword(e.target.value) }} />
            <button onClick={clickHandler} className='btn'>Submit</button>
        </div>
    )
}

export default Form