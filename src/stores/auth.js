import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import API from '@/services/auth-api';

// для сохранения токена в localStorage
const optionsPersist = {
  persist: {
  storage: localStorage,
  paths: ['token'],
}};

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();
  const toast = useToast();

  const login = ref('');
  const token = ref('');
  const loading = ref(false);
  const error = ref('');

  const isLoggedIn = computed(() => {
    return Boolean(token.value);
  });

  function setUser(userData) {
    login.value = userData;
  };
  function setToken(tokenData) {
    token.value = tokenData;
  };
  function setLoading(payload) {
    loading.value = payload;
  };
  function setError(payload) {
    error.value = payload;
  };

  async function logIn(credentials) {
    try {
      setLoading(true);
      const { data } = await API.logInUser(credentials);

      if (data === undefined) {
        throw new Error('Server Error!');
      } else {
        setLoading(false);
        setError('');

        const {user, token} = data;
        setUser(user.login);
        setToken(token);

        toast.add({ severity: 'success', summary: 'Успешно авторизован', detail: `Добро пожаловать ${user.login}`, life: 5000 });
        router.push({ name: 'adminPage' });
      };
    } catch (error) {
      // console.log("🚀 ~ logIn ~ error:", error)
      setLoading(false);
      setError(error.message);
      toast.add({ severity: 'error', summary: 'Ошибка', detail: error.message, life: 5000 });
    };
  };

  async function fetchCurrentUser() {
    const persistedToken = token.value;

    if (!persistedToken) return;

    try {
      setLoading(true);
      const { data } = await API.fetchCurrentUser(persistedToken);

      if (data === undefined) {
        throw new Error('Server Error!');
      } else {
        setLoading(false);
        setError('');

        setUser(data.login);

        // toast.add({ severity: 'success', summary: 'Произошла повторная авторизован', detail: `Добро пожаловать ${data.login}`, life: 5000 });
      };
    } catch (error) {
      setLoading(false);
      setError(error.message);
      setToken('');
      router.push({ name: 'adminAuthPage' });
      toast.add({ severity: 'error', summary: 'Ошибка', detail: error.message, life: 5000 });
    };
  };

  return { 
    login, 
    token, 
    loading, 
    error, 
    isLoggedIn, 
    logIn, 
    fetchCurrentUser 
  };
}, optionsPersist);
