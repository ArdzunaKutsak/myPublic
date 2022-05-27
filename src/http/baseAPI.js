import axios from 'axios';

export const baseAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})