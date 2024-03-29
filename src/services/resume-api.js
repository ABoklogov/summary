import axios from '@/utils/axios';

// получает все данные
async function fetchAllResume() {
  const { data } = await axios.get('/resume');
  return data;
}
// смена аватара
async function changeAvatar(formData, id) {
  const { data } = await axios.patch(`/resume/about/${id}/avatars`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return data;
}
// смена имени, профессии, ссылки на gitHub
async function changeName(nameData, id) {
  const { data } = await axios.patch(`/resume/about/${id}/name`, { name: nameData });
  return data;
}
// смена about
async function changeAbout(aboutData, id) {
  const { data } = await axios.patch(`/resume/about/${id}/about`, { about: aboutData });
  return data;
}
// смена city
async function changeCity(cityData, id) {
  const { data } = await axios.patch(`/resume/contacts/${id}/city`, { city: cityData });
  return data;
}
// смена email
async function changeEmail(emailData, id) {
  const { data } = await axios.patch(`/resume/contacts/${id}/email`, { email: emailData });
  return data;
}
// смена phone
async function changePhone(phoneData, id) {
  const { data } = await axios.patch(`/resume/contacts/${id}/phone`, { phone: phoneData });
  return data;
}
// смена telegram
async function changeTelegram(telegramData, id) {
  const { data } = await axios.patch(`/resume/contacts/${id}/telegram`, { telegram: telegramData });
  return data;
}
// изменение social
async function changeSocial(socialData, id) {
  const { data } = await axios.put(`/resume/social/${id}`, socialData);
  return data;
}
// добавление social
async function addSocial(socialData) {
  const { data } = await axios.post('/resume/social', socialData);
  return data;
}
// удаление social
async function removeSocial(id) {
  const { data } = await axios.delete(`/resume/social/${id}`);
  return data;
}
// изменение education
async function changeEducation(educationData, id) {
  const { data } = await axios.put(`/resume/education/${id}`, educationData);
  return data;
}
// добавление education
async function addEducation(educationData) {
  const { data } = await axios.post('/resume/education', educationData);
  return data;
}
// удаление education
async function removeEducation(id) {
  const { data } = await axios.delete(`/resume/education/${id}`);
  return data;
}
// изменение TechSkills
async function changeTechSkills(techSkillsData, id) {
  const { data } = await axios.put(`/resume/tech_skills/${id}`, techSkillsData);
  return data;
}
// добавление TechSkills
async function addTechSkills(educationData) {
  const { data } = await axios.post('/resume/tech_skills', educationData);
  return data;
}
// удаление TechSkills
async function removeTechSkills(id) {
  const { data } = await axios.delete(`/resume/tech_skills/${id}`);
  return data;
}
// изменение Experience
async function changeExperience(experienceData, id) {
  const { data } = await axios.put(`/resume/experience/${id}`, experienceData);
  return data;
}
// добавление Experience
async function addExperience(experienceData) {
  const { data } = await axios.post('/resume/experience', experienceData);
  return data;
}
// удаление Experience
async function removeExperience(id) {
  const { data } = await axios.delete(`/resume/experience/${id}`);
  return data;
}
// изменение Certificate
async function changeCertificate(certificateData, id) {
  const { data } = await axios.put(`/resume/certificate/${id}`, certificateData);
  return data;
}
// добавление Certificate
async function addCertificate(certificateData) {
  const { data } = await axios.post('/resume/certificate', certificateData);
  return data;
}
// удаление Certificate
async function removeCertificate(id) {
  const { data } = await axios.delete(`/resume/certificate/${id}`);
  return data;
}
// Загрузка сертификата
async function exportCertificate(formData, id) {
  const { data } = await axios.patch(`/resume/certificate/${id}/path`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return data;
}

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
  changeEducation,
  addEducation,
  removeEducation,
  changeTechSkills,
  addTechSkills,
  removeTechSkills,
  changeExperience,
  addExperience,
  removeExperience,
  changeCertificate,
  addCertificate,
  removeCertificate,
  exportCertificate
};
export default API;
