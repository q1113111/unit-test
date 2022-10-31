<template>
  <div>
    <button
      data-test="button"
      @click="increment"
    >
      Increment
    </button>
    <p data-test="count">
      {{ count }}
    </p>

    <button data-test="leftButton" @click.right="result='here we go!'">Are You ready?</button>
    <div data-test="result">{{result}}</div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const count = ref(0)
const result = ref('')
const emit = defineEmits(['increments'])
const increment = () => {
  count.value += 1
  emit('increments', count.value)
}

</script>
