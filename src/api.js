import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/future.json',
    params: {q: 'London', dt: '2022-12-25'},
    headers: {
      'X-RapidAPI-Key': 'ce9f14a8d8msh1d7d415515a2594p1fabfcjsn0fcd2337375f',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

console.log('hola')