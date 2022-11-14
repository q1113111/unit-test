<template>
 <div>
<button class="btn" @click="clickHandler">点我</button>
    <p class="name">{{name}}</p>
 </div>
</template>
<script setup>
import { ref } from 'vue';
import { getList } from '@/api/request.js'
const name = ref('');
const clickHandler = async()=>{
  const res = await getList();
  name.value = res.data.name;
}
</script>
