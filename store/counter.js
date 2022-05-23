import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0
  }),
  getters: {
    limitAlert: (state) => {
      return state.counter > 500
    }
  },
  actions: {
    resetCounter() {
      this.counter = 0
    },
    mergeVal(reduceResult) {
      this.counter += reduceResult
    },
    updateCounter() {
      this.counter++
    }
  }
})