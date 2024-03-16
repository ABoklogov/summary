import axios from '@/utils/axios';

// получает все данные
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
// смена имени, профессии, ссылки на gitHub
async function changeName(nameData, id) {
  const { data } = await axios.patch(`/resume/about/${id}/name`, {name: nameData});
  return data;
};
// смена about
async function changeAbout(aboutData, id) {
  const { data } = await axios.patch(`/resume/about/${id}/about`, {about: aboutData});
  return data;
};

const API = {
  fetchAllResume,
  changeAvatar,
  changeName,
  changeAbout,
};
export default API;
