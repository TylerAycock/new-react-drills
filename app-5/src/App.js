import MyImage from './components/MyImage';
import './App.css';
import {useState} from 'react'
import Image from './images/rubberDuck.jpeg'

function App() {

  const [img , setImg] = useState(Image)
  return (
    <div className="App">
      <MyImage img={img}/>
    </div>
  );
}

export default App;
