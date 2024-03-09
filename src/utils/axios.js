import axios from 'axios';
import {baseUrl} from '@/services/urls.js';

const axiosInstans = axios.create({
  baseURL: `${baseUrl}/api/v1`
});

export default axiosInstans;
