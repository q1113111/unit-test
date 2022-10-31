<template>
  <div data-test="target">{{ count }}</div>
</template>
<script setup>
import { inject } from 'vue';

const count = inject('count')
</script>