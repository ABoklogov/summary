import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
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
    const newAvatar = ref('');
    const loadingAvatar = ref(false);
    const errorAvatar = ref('');

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
    function setAvatar(payload) {
      newAvatar.value = payload;
    };
    function setLoadingAvatar(payload) {
      loadingAvatar.value = payload;
    };
    function setErrorAvatar(payload) {
      errorAvatar.value = payload;
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
          setAvatar(data.avatar);
          toast.add({
            severity: 'success',
            summary: 'Успешно сменили аватар',
            life: 5000
          });
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

    return {
      dataResume,
      loading,
      error,
      getDataResume,
      newAvatar,
      loadingAvatar,
      changeAvatar,
    };
  }
);
