import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:7255/api/',
  timeout: 1000,
});

export default axiosClient;