import axios from 'axios';
const api = axios.create({
    baseURL: 'https://soerraj-GreenAPI.hf.space',
});

export default api;