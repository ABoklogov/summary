import { defineStore } from 'pinia'

export const useViewStore = defineStore('view', {
  state: () => ({
    language: 'ru',
    theme: 'white'
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
