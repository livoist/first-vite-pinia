import { defineStore } from 'pinia'

export const useReducer = defineStore('reducer', {
  state: () => ({
    total: 0,
    extraVal: 0
  }),
  actions: {
    resetVal() {
      this.total = 0
      this.extraVal = 0
    },
    addExtraVal(num) {
      this.extraVal += num
    },
    reduceVal() {
      this.total += this.extraVal
      this.extraVal = 0
    }
  }
})