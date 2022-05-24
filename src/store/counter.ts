import { defineStore } from 'pinia'
import { CounterShape } from '../types/interfaces'

export const useCounterStore = defineStore('counter', {
  state: (): CounterShape => ({
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
    mergeVal(reduceResult: number) {
      this.counter += reduceResult
    },
    updateCounter() {
      this.counter++
    }
  }
})