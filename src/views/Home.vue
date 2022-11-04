<template>
  <div>
    <!-- 元件某處 -->
    <button
      data-test="button"
      @click="goToEditPage"
    >
      編輯文章
    </button>
    {{ count }}
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/pinia'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const props = defineProps({
  isUserLogin: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()

const goToEditPage = () => {
  props.isUserLogin ? router.push({ name: 'Edit' }) : router.push({ name: 'Login' })
}
</script>
