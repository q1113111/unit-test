<template>
  <div>
    <input
      v-model="password"
      data-test="password"
    >
    <p
      v-if="showError && isError"
      data-test="errorMsg"
    >
      Password must be at least {{ minLength }} characters.
    </p>
    <p data-test="content">{{content}}</p>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  minLength: {
    type: Number,
    required: true
  },
  showError: {
    type: Boolean,
    default: true
  },
  content:{
     type: String,
     default: 'hello'
  }
})

const password = ref('')
const isError = computed(() => password.value.length < props.minLength)
</script>
