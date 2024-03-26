import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import API from '@/services/resume-api';

export const useResumeStore = defineStore(
  'resume',
  () => {
    const toast = useToast();

    // общие данные 
    const dataResume = ref(null);
    const loading = ref(false);
    const error = ref('');
    // avatar
    const loadingAvatar = ref(false);
    const errorAvatar = ref('');
    // name, profession, link
    const loadingName = ref(false);
    const errorName = ref('');
    // about
    const loadingAbout = ref(false);
    const errorAbout = ref('');
    // city
    const loadingCity = ref(false);
    const errorCity = ref('');
    // email
    const loadingEmail = ref(false);
    const errorEmail = ref('');
    // phone
    const loadingPhone = ref(false);
    const errorPhone = ref('');
    // telegram
    const loadingTelegram = ref(false);
    const errorTelegram = ref('');
    // social
    const loadingSocial = ref(false);
    const errorSocial = ref('');
    // education
    const loadingEducation = ref(false);
    const errorEducation = ref('');
    // techSkills
    const loadingTechSkills = ref(false);
    const errorTechSkills = ref('');
    // experience
    const loadingExperience = ref(false);
    const errorExperience = ref('');
    // certificate
    const loadingCertificate = ref(false);
    const errorCertificate  = ref('');

    // общие данные 
    function setDataResume(data) {
      dataResume.value = data;
    };
    function setLoading(payload) {
      loading.value = payload;
    };
    function setError(payload) {
      error.value = payload;
    };
    // avatar
    function setLoadingAvatar(payload) {
      loadingAvatar.value = payload;
    };
    function setErrorAvatar(payload) {
      errorAvatar.value = payload;
    };
    // name
    function setLoadingName(payload) {
      loadingName.value = payload;
    };
    function setErrorName(payload) {
      errorName.value = payload;
    };
    // about
    function setLoadingAbout(payload) {
      loadingAbout.value = payload;
    };
    function setErrorAbout(payload) {
      errorAbout.value = payload;
    };
    // city
    function setLoadingCity(payload) {
      loadingCity.value = payload;
    };
    function setErrorCity(payload) {
      errorCity.value = payload;
    };
    // email
    function setLoadingEmail(payload) {
      loadingEmail.value = payload;
    };
    function setErrorEmail(payload) {
      errorEmail.value = payload;
    };
    // phone
    function setLoadingPhone(payload) {
      loadingPhone.value = payload;
    };
    function setErrorPhone(payload) {
      errorPhone.value = payload;
    };
    // telegram
    function setLoadingTelegram(payload) {
      loadingTelegram.value = payload;
    };
    function setErrorTelegram(payload) {
      errorTelegram.value = payload;
    };
    // social
    function setLoadingSocial(payload) {
      loadingSocial.value = payload;
    };
    function setErrorSocial(payload) {
      errorSocial.value = payload;
    };
    // education
    function setLoadingEducation(payload) {
      loadingEducation.value = payload;
    };
    function setErrorEducation(payload) {
      errorEducation.value = payload;
    };
    // education
    function setLoadingTechSkills(payload) {
      loadingTechSkills.value = payload;
    };
    function setErrorTechSkills(payload) {
      errorTechSkills.value = payload;
    };
    // experience
    function setLoadingExperience(payload) {
      loadingExperience.value = payload;
    };
    function setErrorExperience(payload) {
      errorExperience.value = payload;
    };
    // certificate
    function setLoadingCertificate(payload) {
      loadingCertificate.value = payload;
    };
    function setErrorCertificate(payload) {
      errorCertificate.value = payload;
    };

    async function getDataResume() {
      try {
        setLoading(true);
        const { data } = await API.fetchAllResume();

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoading(false);
          setError('');
          setDataResume(data);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
        toast.add({ severity: 'error', summary: 'Ошибка', detail: error.message, life: 5000 });
      }
    };

    async function changeAvatar(file) {
      try {
        setLoadingAvatar(true);
        const { _id } = dataResume.value.about;
        let formData = new FormData();
        formData.append('avatar', file);

        const { data } = await API.changeAvatar(formData, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingAvatar(false);
          setErrorAvatar('');

          // меняем аватар в стейте
          const newData = {...dataResume.value}
          newData.about.avatar = data.avatar;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Успешно сменили аватар',
            life: 5000
          });

          return data
        }
      } catch (error) {
        setLoadingAvatar(false);
        setErrorAvatar(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function changeName(nameData) {
      try {
        setLoadingName(true);
        const { _id } = dataResume.value.about;
   
        const { data } = await API.changeName(nameData, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingName(false);
          setErrorName('');

          // меняем ключ name в стейте
          const newData = {...dataResume.value}
          newData.about.name = data.result.name;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingName(false);
        setErrorName(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function changeAbout(aboutData) {
      try {
        setLoadingAbout(true);
        const { _id } = dataResume.value.about;
   
        const { data } = await API.changeAbout(aboutData, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingAbout(false);
          setErrorAbout('');

          // меняем ключ about в стейте
          const newData = {...dataResume.value}
          newData.about.about = data.result.about;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingAbout(false);
        setErrorAbout(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function changeCity(cityData) {
      try {
        setLoadingCity(true);
        const { _id } = dataResume.value.contacts;
   
        const { data } = await API.changeCity(cityData, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingCity(false);
          setErrorCity('');

          // меняем ключ city в стейте
          const newData = {...dataResume.value}
          newData.contacts.city = data.result.city;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingCity(false);
        setErrorCity(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function changeEmail(emailData) {
      try {
        setLoadingEmail(true);
        const { _id } = dataResume.value.contacts;
   
        const { data } = await API.changeEmail(emailData, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingEmail(false);
          setErrorEmail('');

          // меняем ключ email в стейте
          const newData = {...dataResume.value}
          newData.contacts.email = data.result.email;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingEmail(false);
        setErrorEmail(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };
    
    async function changePhone(phoneData) {
      try {
        setLoadingPhone(true);
        const { _id } = dataResume.value.contacts;
   
        const { data } = await API.changePhone(phoneData, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingPhone(false);
          setErrorPhone('');

          // меняем ключ phone в стейте
          const newData = {...dataResume.value}
          newData.contacts.phone = data.result.phone;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingPhone(false);
        setErrorPhone(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function changeTelegram(telegramData) {
      try {
        setLoadingTelegram(true);
        const { _id } = dataResume.value.contacts;
   
        const { data } = await API.changeTelegram(telegramData, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingTelegram(false);
          setErrorTelegram('');

          // меняем ключ telegram в стейте
          const newData = {...dataResume.value}
          newData.contacts.telegram = data.result.telegram;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingTelegram(false);
        setErrorTelegram(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function changeSocial({ link, shortLink, text, _id }) {
      try {
        setLoadingSocial(true);

        const { data } = await API.changeSocial({ link, shortLink, text }, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingSocial(false);
          setErrorSocial('');

          // Находим нужный элемент в social и заменяем его
          const newSocial = dataResume.value.social.reduce((acc, item) => {
            if (item._id === data.result._id) {
              acc.push(data.result);
            } else {
              acc.push(item);
            }
            return acc;
          }, []);
          
          const newData = {...dataResume.value};
          newData.social = newSocial;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingSocial(false);
        setErrorSocial(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function addSocial(socialData) {
      try {
        setLoadingSocial(true);

        const { data } = await API.addSocial(socialData);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingSocial(false);
          setErrorSocial('');

          // Добавляем новый элемент в массив и подставляем в data
          const newSocial = [...dataResume.value.social, data.result];
          const newData = {...dataResume.value};
          newData.social = newSocial;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно добавлены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingSocial(false);
        setErrorSocial(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function removeSocial(id) {
      try {
        setLoadingSocial(true);

        const { data } = await API.removeSocial(id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingSocial(false);
          setErrorSocial('');

          // Удаляем элемент из массива socials
          const newSocial = [...dataResume.value.social];

          const index = newSocial.findIndex(el => el._id === id);
          if (index !== -1) newSocial.splice(index, 1);

          const newData = {...dataResume.value};
          newData.social = newSocial;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно удалены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingSocial(false);
        setErrorSocial(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function changeEducation({ institution, speciality, _id }) {
      try {
        setLoadingEducation(true);

        const { data } = await API.changeEducation({ institution, speciality }, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingEducation(false);
          setErrorEducation('');

          // Находим нужный элемент в education и заменяем его
          const newEducation = dataResume.value.education.reduce((acc, item) => {
            if (item._id === data.result._id) {
              acc.push(data.result);
            } else {
              acc.push(item);
            }
            return acc;
          }, []);
          
          const newData = {...dataResume.value};
          newData.education = newEducation;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingEducation(false);
        setErrorEducation(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function addEducation(educationData) {
      try {
        setLoadingEducation(true);

        const { data } = await API.addEducation(educationData);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingEducation(false);
          setErrorEducation('');

          // Добавляем новый элемент в массив и подставляем в data
          const newEducation = [...dataResume.value.education, data.result];
          const newData = {...dataResume.value};
          newData.education = newEducation;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно добавлены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingEducation(false);
        setErrorEducation(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function removeEducation(id) {
      try {
        setLoadingEducation(true);

        const { data } = await API.removeEducation(id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingEducation(false);
          setErrorEducation('');

          // Удаляем элемент из массива educations
          const newEducation = [...dataResume.value.education];

          const index = newEducation.findIndex(el => el._id === id);
          if (index !== -1) newEducation.splice(index, 1);

          const newData = {...dataResume.value};
          newData.education = newEducation;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно удалены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingEducation(false);
        setErrorEducation(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function changeTechSkills({ value, _id }) {
      try {
        setLoadingTechSkills(true);

        const { data } = await API.changeTechSkills({ value }, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingTechSkills(false);
          setErrorTechSkills('');

          // Находим нужный элемент в tech_skills и заменяем его
          const newTechSkills = dataResume.value.tech_skills.reduce((acc, item) => {
            if (item._id === data.result._id) {
              acc.push(data.result);
            } else {
              acc.push(item);
            }
            return acc;
          }, []);
          
          const newData = {...dataResume.value};
          newData.tech_skills = newTechSkills;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingTechSkills(false);
        setErrorTechSkills(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };
    
    async function addTechSkills(techSkillsData) {
      try {
        setLoadingTechSkills(true);

        const { data } = await API.addTechSkills(techSkillsData);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingTechSkills(false);
          setErrorTechSkills('');

          // Добавляем новый элемент в массив и подставляем в tech_skills
          const newTechSkills = [...dataResume.value.tech_skills, data.result];
          const newData = {...dataResume.value};
          newData.tech_skills = newTechSkills;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно добавлены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingTechSkills(false);
        setErrorTechSkills(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function removeTechSkills(id) {
      try {
        setLoadingTechSkills(true);

        const { data } = await API.removeTechSkills(id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingTechSkills(false);
          setErrorTechSkills('');

          // Удаляем элемент из массива tech_skills
          const newTechSkills = [...dataResume.value.tech_skills];

          const index = newTechSkills.findIndex(el => el._id === id);
          if (index !== -1) newTechSkills.splice(index, 1);

          const newData = {...dataResume.value};
          newData.tech_skills = newTechSkills;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно удалены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingTechSkills(false);
        setErrorTechSkills(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function changeExperience({ 
      position, 
      company, 
      responsibility, 
      start, 
      finish, 
      webSite, 
      _id 
    }) {
      try {
        setLoadingExperience(true);

        const { data } = await API.changeExperience({ position, company, responsibility, start, finish, webSite }, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingExperience(false);
          setErrorExperience('');

          // Находим нужный элемент в experience и заменяем его
          const newExperience = dataResume.value.experience.reduce((acc, item) => {
            if (item._id === data.result._id) {
              acc.push(data.result);
            } else {
              acc.push(item);
            }
            return acc;
          }, []);
          
          const newData = {...dataResume.value};
          newData.experience = newExperience;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingExperience(false);
        setErrorExperience(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function addExperience(experienceData) {
      try {
        setLoadingExperience(true);

        const { data } = await API.addExperience(experienceData);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingExperience(false);
          setErrorExperience('');

          // Добавляем новый элемент в массив и подставляем в experience
          const newExperience = [...dataResume.value.experience, data.result];
          const newData = {...dataResume.value};
          newData.experience = newExperience;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно добавлены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingExperience(false);
        setErrorExperience(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function removeExperience(id) {
      try {
        setLoadingExperience(true);

        const { data } = await API.removeExperience(id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingExperience(false);
          setErrorExperience('');

          // Удаляем элемент из массива experience
          const newExperience = [...dataResume.value.experience];

          const index = newExperience.findIndex(el => el._id === id);
          if (index !== -1) newExperience.splice(index, 1);

          const newData = {...dataResume.value};
          newData.experience = newExperience;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно удалены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingExperience(false);
        setErrorExperience(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function changeCertificate({ 
      position, 
      company, 
      start, 
      finish, 
      webSite, 
      _id 
    }) {
      try {
        setLoadingCertificate(true);

        const { data } = await API.changeCertificate({ position, company, start, finish, webSite }, _id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingCertificate(false);
          setErrorCertificate('');

          // Находим нужный элемент в certificate и заменяем его
          const newCertificate = dataResume.value.certificate.reduce((acc, item) => {
            if (item._id === data.result._id) {
              acc.push(data.result);
            } else {
              acc.push(item);
            }
            return acc;
          }, []);
          
          const newData = {...dataResume.value};
          newData.certificate = newCertificate;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно изменены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingCertificate(false);
        setErrorCertificate(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function addCertificate(certificateData) {
      try {
        setLoadingCertificate(true);

        const { data } = await API.addCertificate(certificateData);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingCertificate(false);
          setErrorCertificate('');

          // Добавляем новый элемент в массив и подставляем в certificate
          const newCertificate = [...dataResume.value.certificate, data.result];
          const newData = {...dataResume.value};
          newData.certificate = newCertificate;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно добавлены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingCertificate(false);
        setErrorCertificate(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function removeCertificate(id) {
      try {
        setLoadingCertificate(true);

        const { data } = await API.removeCertificate(id);

        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingCertificate(false);
          setErrorCertificate('');

          // Удаляем элемент из массива certificate
          const newCertificate = [...dataResume.value.certificate];

          const index = newCertificate.findIndex(el => el._id === id);
          if (index !== -1) newCertificate.splice(index, 1);

          const newData = {...dataResume.value};
          newData.certificate = newCertificate;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Данные успешно удалены',
            life: 5000
          });
        }
      } catch (error) {
        setLoadingCertificate(false);
        setErrorCertificate(error.message);
        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: error.message, 
          life: 5000 
        });
      }
    };

    async function exportCertificate(file, id) {
      try {
        setLoadingCertificate(true);

        let formData = new FormData();
        formData.append('path', file);

        const { data } = await API.exportCertificate(formData, id);
        
        if (data === undefined) {
          throw new Error('Server Error!');
        } else {
          setLoadingCertificate(false);
          setErrorCertificate('');

          // меняем path в certificate в стейте
          const newData = {...dataResume.value}
          newData.certificate.path = data.path;
          setDataResume(newData);

          toast.add({
            severity: 'success',
            summary: 'Успешно загрузили файл',
            life: 5000
          });

          return data
        }
      } catch ({ message }) {
        setLoadingCertificate(false);
        setErrorCertificate(message);

        toast.add({ 
          severity: 'error', 
          summary: 'Ошибка', 
          detail: message, 
          life: 5000 
        });
      }
    };

    return {
      dataResume,
      loading,
      error,
      getDataResume,
      loadingAvatar,
      changeAvatar,
      loadingName,
      changeName,
      loadingAbout,
      changeAbout,
      loadingCity,
      changeCity,
      loadingEmail,
      changeEmail,
      loadingPhone,
      changePhone,
      loadingTelegram,
      changeTelegram,
      loadingSocial,
      changeSocial,
      addSocial,
      removeSocial,
      loadingEducation,
      changeEducation,
      addEducation,
      removeEducation,
      loadingTechSkills,
      changeTechSkills,
      addTechSkills,
      removeTechSkills,
      loadingExperience,
      changeExperience,
      addExperience,
      removeExperience,
      loadingCertificate,
      changeCertificate,
      addCertificate,
      removeCertificate,
      exportCertificate,
    };
  }
);
