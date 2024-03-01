import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import API from '@/services/auth-api';

export const useAuthStore = defineStore('auth', () => {
  const login = ref('');
  const token = ref('');
  const toast = useToast();

  const isLoggedIn = computed(() => {
    return Boolean(token.value);
  });

  function setUser(userData) {
    login.value = userData;
  };
  function setToken(tokenData) {
    token.value = tokenData;
  };

  // async function registration(credentials) {
  //   const data = await API.registerUser(credentials);
  // };
  async function logIn(credentials) {
    try {
      const { data } = await API.logInUser(credentials);
      // console.log("🚀 ~ logIn ~ data:", data)
      return data
    } catch (error) {
      console.log(error.message);
    };
  };

  return { isLoggedIn, setUser, setToken, logIn };
});
