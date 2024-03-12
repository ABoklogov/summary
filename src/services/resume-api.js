import axios from '@/utils/axios';

// получить все данные
async function fetchAllResume() {
  const { data } = await axios.get('/resume');
  return data;
};
// смена аватара
async function changeAvatar(formData, id) {
  const { data } = await axios.patch(`/resume/about/${id}/avatars`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return data;
};

const API = {
  fetchAllResume,
  changeAvatar,
};
export default API;
