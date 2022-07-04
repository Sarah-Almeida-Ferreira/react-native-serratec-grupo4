import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://reactnative.herokuapp.com/reactnative'
});