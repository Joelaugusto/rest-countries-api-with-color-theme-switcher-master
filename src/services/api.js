const axios =  require('axios');

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export default api;

