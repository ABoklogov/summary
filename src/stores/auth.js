import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import API from '@/services/auth-api';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const token = ref('');

  const isLoggedIn = computed(() => {
    return Boolean(token.value);
  });

  function setUser(userData) {
    user.value = userData;
  };
  function setToken(tokenData) {
    token.value = tokenData;
  };

  // async function registration(credentials) {
  //   const data = await API.registerUser(credentials);
  // };
  async function logIn(credentials) {
    const { data } = await API.logInUser(credentials);
    console.log("🚀 ~ logIn ~ data:", data)
  };

  return { isLoggedIn, setUser, setToken, logIn };
});
