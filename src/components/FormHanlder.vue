<template>
  <div>
    <input
      v-model="email"
      type="email"
      data-mail="email"
    >

    <form
      data-test="form"
      @submit.prevent="submit"
    >
      <input
        v-model="form.email"
        data-test="email"
        type="email"
      >

      <textarea
        v-model="form.description"
        data-test="description"
      />

      <select
        v-model="form.city"
        data-test="city"
      >
        <option value="taipei">
          Taipei
        </option>
        <option value="tainan">
          Tainan
        </option>
      </select>

      <input
        v-model="form.subscribe"
        data-test="subscribe"
        type="checkbox"
      >

      <input
        v-model="form.interval"
        data-test="interval.weekly"
        type="radio"
        value="weekly"
      >
      <input
        v-model="form.interval"
        data-test="interval.monthly"
        type="radio"
        value="monthly"
      >

      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['submit'])
const email = ref('')

const form = reactive({
  email: '',
  description: '',
  city: '',
  subscribe: false,
  interval: ''
})

const submit = () => {
  emit('submit', form)
}
</script>
