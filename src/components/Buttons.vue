<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: "Buttons",
  props: {
    buttonConfig: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { buttonType, buttonText } = toRefs(props.buttonConfig)

    return {
      buttonType,
      buttonText
    }
  },
})
</script>

<template>
<button :class="buttonType">{{ buttonText }}</button>
</template>

<style scoped>
button {
  transition: 0.3s;
  cursor: pointer;
  border-color: transparent;
  border-radius: 8px;
  padding: 8px 24px;
  margin: 0 6px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
}

.primary {
  background: #FFD954;
}

.primary:hover {
  background: #F2AB39;
}

.secondary {
  background: #E4B660;
}

.secondary:hover {
  background: #69491A;
}

.alert {
  background: #FE7773;
}

.alert:hover {
  background: #E81E25;
}
</style>
