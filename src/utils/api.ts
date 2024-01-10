import axios from 'axios';
import { getCookie } from './cookies';
// import { cookies } from './cookies';

const accessToken = getCookie('accessToken');
const token = accessToken ? `Bearer ${accessToken}` : '';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    withCredentials: true,
    Authorization: token,
    'Content-Type': `application/json`,
  },
});
