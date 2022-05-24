import { defineStore } from 'pinia'
import { ReducerShape } from '../types/interfaces'

export const useReducer = defineStore('reducer', {
  state: (): ReducerShape => ({
    total: 0,
    extraVal: 0
  }),
  actions: {
    resetVal() {
      this.total = 0
      this.extraVal = 0
    },
    addExtraVal(num: number) {
      this.extraVal += num
    },
    reduceVal() {
      this.total += this.extraVal
      this.extraVal = 0
    }
  }
})