<script>
import { defineComponent, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import Buttons from './components/Buttons.vue'
import { useCounterStore } from '../store/counter'
import { useReducer } from '../store/reducer'

export default defineComponent({
  name: "App",
  setup() {
    const counterStore = useCounterStore()
    const { counter, limitAlert } = storeToRefs(counterStore)
    const { updateCounter, mergeVal, resetCounter } = counterStore

    const reducerStore = useReducer()
    const { total, extraVal } = storeToRefs(reducerStore)
    const { reduceVal, addExtraVal, resetVal } = reducerStore


    const btnConfig1 = reactive({
      buttonType: 'primary', buttonText: 'add 10'
    })

    const btnConfig2 = reactive({
      buttonType: 'secondary', buttonText: 'add 50'
    })

    const btnConfig3 = reactive({
      buttonType: 'alert', buttonText: 'add 100'
    })

    return {
      counter,
      updateCounter,
      mergeVal,
      resetCounter,
      limitAlert,
      btnConfig1,
      btnConfig2,
      btnConfig3,
      total,
      extraVal,
      reduceVal,
      addExtraVal,
      resetVal
    }
  },
  components: {
    Buttons
  }
})
</script>

<template>
  <p class="title">Test Vite + Pinia Template</p>
  <div class="counters">
    <p class="counterResult" :class="{ 'alert': limitAlert }">counter: {{ counter }}</p>
    <button @click="updateCounter">add counter</button>
    <button @click="mergeVal(total)">calc total counter</button>
    <button @click="resetCounter">reset counter</button>
    <p>extraVal: {{ extraVal }}</p>
    <p>resultVal: {{ total }}</p>
    <button @click="reduceVal">calc extraVal</button>
    <button @click="resetVal">reset resultVal</button>
  </div>
  <div class="buttons">
    <Buttons @click="addExtraVal(10)" :buttonConfig="btnConfig1"/>
    <Buttons @click="addExtraVal(50)" :buttonConfig="btnConfig2"/>
    <Buttons @click="addExtraVal(100)" :buttonConfig="btnConfig3"/>
  </div>
</template>

<style>
.title {
  width: 40%;
  padding: 10px 0;
  border-bottom: 1px solid #000;
  display: inline-block;
  font-weight: bold;
  font-size: 20px;
}

p.counterResult {
  font-size: 28px;
  font-weight: bold;
}

p.alert {
  color: red;
}

.buttons {
  padding: 24px;
  display: inline-block;
}

button {
  margin: 0 6px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
