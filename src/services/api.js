import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.30.1.208:8080/'
});

export default api;