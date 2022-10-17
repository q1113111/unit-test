<template>
  <div>
    <button
      data-test="increment"
      @click="increment"
    />
    <p data-test="count">
      Count: {{ count }}
    </p>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const count = computed(() => store.getters.count)

const increment = () => {
  store.commit('increment')
}
</script>
