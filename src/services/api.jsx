import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hash-front-test.herokuapp.com/',
});

export default api;
