import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    withCredentials: true,
    // Authorization: `Bearer ${cookies.access_token}`,
    'Content-Type': `application/json`,
  },
});

export default api;
