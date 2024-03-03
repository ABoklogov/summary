import axios from '@/utils/axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

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
async function fetchCurrentUser(persistedToken) {
  token.set(persistedToken);

  const { data } = await axios.get('/auth/current');
  return data;
};

const API = {
  logInUser,
  logOutUser,
  fetchCurrentUser,
};
export default API;