import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import SignUp from './components/SignUp'
import Details from './components/Details'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
