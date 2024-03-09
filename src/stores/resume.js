import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import API from '@/services/resume-api';

export const useResumeStore = defineStore(
  'resume',
  () => {
    const toast = useToast();

    const dataResume = ref(null);
    const loading = ref(false);
    const error = ref('');

    function setDataResume(data) {
      dataResume.value = data;
    };
    function setLoading(payload) {
      loading.value = payload;
    };
    function setError(payload) {
      error.value = payload;
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
    }

    return {
      dataResume,
      loading,
      error,
      getDataResume
    };
  }
);
