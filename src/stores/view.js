import { defineStore } from 'pinia';
import { getStorage, setStorage } from '@/helpers/localStorage.js';

export const useViewStore = defineStore('view', {
  state: () => ({
    language: 'en',
    themeBlack: false,
    optionsSelectLanguage: ['en', 'ru']
  }),
  actions: {
    getLanguage() {
      const result = getStorage('language');
      if (!result) {
        this.language = 'en';
        setStorage('language', 'en');
      } else {
        this.language = result;
      };
    },
    getTheme() {
      const result = getStorage('themeBlack');
      if (!result) {
        this.themeBlack = false;
        setStorage('themeBlack', false);
      } else {
        this.themeBlack = result;
      };
    },
  },
});
