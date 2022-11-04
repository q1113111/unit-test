<template>
  <div>
    <slot />
    <slot name="header" />
    <slot name="body" />
    <slot name="footer" />
    <slot
      name="staff"
      :staff-info="staffInfo"
    />
  </div>
</template>
<script setup>
const staffInfo = {
  'black-cat': {
    name: '嘿嘿',
    'signature-dish': '拿鐵'
  },
  'orange-cat': {
    name: '橘',
    'signature-dish': '焦糖瑪奇朵'
  }
}
</script>
