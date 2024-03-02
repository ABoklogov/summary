import axios from '@/utils/axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// регистрация
// async function registerUser(credentials) {
//   const data = await axios.post('/auth/register', credentials);
//   return data;
// };

// вход
async function logInUser(credentials) {
  const { data } = await axios.post('/auth/login', credentials);
  if (data) token.set(data.token);
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