import { defineStore } from 'pinia';
import { watch, ref } from 'vue';

export const useViewStore = defineStore('view', () => {
  const language = ref('en');
  const themeBlack = ref(false);
  const optionsSelectLanguage = ref(['en', 'ru']);

  watch(themeBlack, () => {
    localStorage.setItem('themeBlack', themeBlack.value);
  });
  watch(language, () => {
    localStorage.setItem('language', language.value);
  });

  function getLanguage() {
    const result = localStorage.getItem('language');

    if (!result) {
      language.value = 'en';
      localStorage.setItem('language', 'en');
    } else {
      language.value = result;
    };
  };

  function getTheme() {
    const result = localStorage.getItem('themeBlack');

    if (!result) {
      themeBlack.value = false;
      localStorage.setItem('themeBlack', false);
    } else {
      themeBlack.value = JSON.parse(result);
    };
  };

  return { language, themeBlack, optionsSelectLanguage, getLanguage, getTheme }
});