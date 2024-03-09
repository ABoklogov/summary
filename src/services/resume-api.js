import axios from '@/utils/axios';

// получить все данные
async function fetchAllResume() {
  const { data } = await axios.get('/resume');
  return data;
};

const API = {
  fetchAllResume,
};
export default API;
