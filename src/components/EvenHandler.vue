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
  </div>
</template>
<script setup>
import { ref } from 'vue'

const count = ref(0)

const emit = defineEmits(['increments'])
const increment = () => {
  count.value += 1
  emit('increments', count.value)
}

</script>
