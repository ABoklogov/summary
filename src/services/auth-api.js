import axios from 'axios';

axios.defaults.baseURL = 'http://boklogovserver.areaprod.ru/api/v1';

// регистрация
// async function registerUser(credentials) {
//   const data = await axios.post('/auth/register', credentials);
//   return data;
// };

// вход
async function logInUser(credentials) {
  const { data } = await axios.post('/auth/login', credentials);
  return data;
};

// выход
async function logOutUser() {
  axios.get('/auth/logout');
};

// определение текущего юзера
// async function fetchCurrentUser() {
//   const data = await axios.get('/personal/profile');
//   return data;
// };

const API = {
  // registerUser,
  logInUser,
  logOutUser,
  // fetchCurrentUser,
};
export default API;