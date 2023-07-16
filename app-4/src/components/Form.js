import './Form.css'
import {useState} from 'react'

const Form = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()
        alert(`Username: ${username} & Password ${password}`)
        setUsername('')
        setPassword('')
    }

    const usernameHandler = e =>{
        setUsername(e.target.value)
    }

    const passwordHandler = e =>{
        setPassword(e.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className='input'>
            <label htmlFor="username">User Name:</label>
            <input type="text" name="username" id="username" onChange={usernameHandler} value={username}/>
            </div>
            <div className='input'>
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" id="password" onChange={passwordHandler} value={password}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form