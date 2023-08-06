import ToDo from './components/Todo';
import './App.css';
import {useState} from 'react'

function App() {
  const [list, setList] = useState([])
  const [input, setInput] = useState('')

const clickHandler = () => {
  setList([...list, input])
  setInput('')
}

  return (
    <div className="App">
     <h1>My To Do List:</h1>
     <input type="text"  onChange={e=>setInput(e.target.value)} value={input}/>
     <button  onClick={clickHandler}>Add</button>
     <ToDo list={list}/>
    </div>
  );
}

export default App;
