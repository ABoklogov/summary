import { defineStore } from 'pinia'

export const useViewStore = defineStore('view', {
  state: () => ({
    language: 'en',
    theme: 'white',
    optionsSelectLanguage: ['en', 'ru']
  }),
  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
  // actions: {
  //   increment() {
  //     this.count++
  //   },
  // },
})
