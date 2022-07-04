import axios from 'axios';

const api = axios.create({
    baseURL: 'https://reactnative.herokuapp.com/reactnative'
});

export default api;