<template>
  <div>
   <slot></slot>
   <slot name="header"></slot>
   <slot name="body"></slot>
   <slot name="footer"></slot>
   <slot name="staff" :staffInfo="staffInfo"></slot>
  </div>
</template>
<script setup>
const staffInfo ={
  'black-cat':{
    name:'嘿嘿',
    'signature-dish': '拿鐵',
  },
    'orange-cat':{
    name:'橘',
    'signature-dish': '焦糖瑪奇朵',
  }
}
</script>