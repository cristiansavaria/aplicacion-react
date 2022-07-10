
import axios, { Axios } from 'axios';


import './App.css';

function App() {
 
  const options = {
    method: 'GET',
    url: 'https://digimon-api.vercel.app/api/digimon',
  };
 const x = axios.request(options).then((response) => {
   const data = response.data
   console.log(data);
  
  }).catch((error) => {
   
  });
axios.get(url,params)

  return (
    <div className="App">
     <h1>Hola Mundo</h1>
     <li></li>
     <div className='api'></div>
    </div>
  );
}

export default App;
