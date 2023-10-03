import axios from 'axios';

function createApi() {
  const api = axios.create({
    // set default endpoint API
    baseURL: 'http://localhost:8000'
  });

  return api;
}

export default createApi;