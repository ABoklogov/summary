import axios from 'axios';

const axiosInstans = axios.create({
  baseURL: 'http://boklogovserver.areaprod.ru/api/v1'
});

export default axiosInstans;
