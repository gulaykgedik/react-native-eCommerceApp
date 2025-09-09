const { default: axios } = require("axios");

 const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});

export default api;