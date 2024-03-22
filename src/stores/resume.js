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

    async function changeSocial(socialData) {
      try {
        setLoadingSocial(true);
        const { _id } = socialData;
        delete socialData._id;

        const { data } = await API.changeSocial(socialData, _id);

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
    };
  }
);
