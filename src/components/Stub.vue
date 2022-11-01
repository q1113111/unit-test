<template>
    <div>
     <slot></slot>
     <Child-Component />
    </div>
</template>
<script setup>
import ChildComponent from './ChildComponent.vue'
</script>