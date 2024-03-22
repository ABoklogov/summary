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
// смена city
async function changeCity(cityData, id) {
  const { data } = await axios.patch(`/resume/contacts/${id}/city`, {city: cityData});
  return data;
};
// смена email
async function changeEmail(emailData, id) {
  const { data } = await axios.patch(`/resume/contacts/${id}/email`, {email: emailData});
  return data;
};
// смена phone
async function changePhone(phoneData, id) {
  const { data } = await axios.patch(`/resume/contacts/${id}/phone`, {phone: phoneData});
  return data;
};
// смена telegram
async function changeTelegram(telegramData, id) {
  const { data } = await axios.patch(`/resume/contacts/${id}/telegram`, {telegram: telegramData});
  return data;
};
// изменение social
async function changeSocial(socialData, id) {
  const { data } = await axios.put(`/resume/social/${id}`, socialData);
  return data;
};
// добавление social
async function addSocial(socialData) {
  const { data } = await axios.post('/resume/social', socialData);
  return data;
};
// удаление social
async function removeSocial(id) {
  const { data } = await axios.delete(`/resume/social/${id}`);
  return data;
};

const API = {
  fetchAllResume,
  changeAvatar,
  changeName,
  changeAbout,
  changeCity,
  changeEmail,
  changePhone,
  changeTelegram,
  changeSocial,
  addSocial,
  removeSocial,
};
export default API;
