import axios from 'axios'
import './App.css';
import {useState, useEffect} from 'react'
import People from './components/People';

function App() {

  const [characters, setCharacters] = useState([])

  const getCharacters = async () => {
    try{
     let search= await axios.get('https://swapi.dev/api/people/1')
     console.log(search.data)
     setCharacters([...characters, search.data])
    }catch(err){console.log(err)}
  }


  useEffect(()=>{
    getCharacters()
  }, [])

  return(
    <div className='app'>
      <People characters={characters}/>
    </div>
  )
}

export default App;

