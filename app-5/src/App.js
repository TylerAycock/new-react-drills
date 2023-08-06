import MyImage from './components/MyImage';
import './App.css';
import {useState} from 'react'
import Duck from './images/rubberDuck.jpeg'


function App() {

  const [image, setImage] = useState(Duck)

  return (
    <div className="App">
      <MyImage image={image}/>
    </div>
  );
}

export default App;
