<template>
   <div data-test="target">
      Root
      <ShallowChild></ShallowChild>
   </div>
</template>
<script setup>
import ShallowChild from './ShallowChild.vue'
</script>