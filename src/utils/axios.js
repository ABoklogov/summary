import axios from 'axios';

const axiosInstans = axios.create({
  baseURL: 'https://boklogovserver.areaprod.ru/api/v1'
});

export default axiosInstans;
