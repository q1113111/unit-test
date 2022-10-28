import { createPinia, defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
import storeReset from './plugins/storeReset'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    function increment(v) {
        count.value++
    }

    return { count, doubleCount, increment }
})

const pinia = createPinia()
pinia.use(storeReset)

export default pinia
