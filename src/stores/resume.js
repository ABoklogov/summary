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
    // аватар
    const loadingAvatar = ref(false);
    const errorAvatar = ref('');
    // Имя, профессия, ссылка на gitHub
    const loadingName = ref(false);
    const errorName = ref('');

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
    // аватар
    function setLoadingAvatar(payload) {
      loadingAvatar.value = payload;
    };
    function setErrorAvatar(payload) {
      errorAvatar.value = payload;
    };
    // Имя
    function setLoadingName(payload) {
      loadingName.value = payload;
    };
    function setErrorName(payload) {
      errorName.value = payload;
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

    return {
      dataResume,
      loading,
      error,
      getDataResume,
      loadingAvatar,
      changeAvatar,
      loadingName,
      changeName,
    };
  }
);
