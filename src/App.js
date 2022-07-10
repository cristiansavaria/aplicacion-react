
import axios from 'axios';
import { useEffect, useState } from 'react';


import './App.css';

function App() {
  const [state, setstate] = useState(null)
  const options = {
    method: 'GET',
    url: 'https://dog.ceo/api/breeds/list/all',
  };
 const x = axios.request(options).then((response) => {
   
  
  }).catch((error) => {
    setstate(error)
  });
useEffect(() => {
  setstate(x)
}, [])
console.log(state);
  return (
    <div className="App">
     <h1>Hola Mundo</h1>
     <li></li>
     <div className='api'></div>
    </div>
  );
}

export default App;
