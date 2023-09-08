<template>
 <div>
<button class="btn" @click="clickHandler">点我</button>
    <p class="name">{{name}}</p>
    <button class="btn2" @click="clickHandler2">点我</button>
    <p class="result">{{result}}</p>
 </div>
</template>
<script setup>
import { ref } from 'vue';
import { getApi,getList ,getList2} from '@/api/request.js'
const name = ref('');
const result = ref();
const clickHandler = async()=>{
  const res = await getList();
  name.value = res.data.name;
}
const clickHandler2 = async()=>{
  const res = await getApi();
 name.value = res.data;
}
</script>
