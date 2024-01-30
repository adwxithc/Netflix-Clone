import {BASE_URL} from './Constands/Constands'
import axios from 'axios';
const instance = axios.create({
    baseURL: BASE_URL,
  
  });
  export default instance