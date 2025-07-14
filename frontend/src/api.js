import axios from 'axios';
const API = axios.create{
baseURL:Process.env.REACT_APP_URL,
});
export default API;
