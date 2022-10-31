<template>
  <nav>
    <a
      id="profile"
      href="/profile"
    >My Profile</a>
    <a
      v-if="admin"
      id="admin"
      href="/admin"
    >Admin</a>

    <ul
      v-show="expandDropdown"
      id="user-dropdown"
    >
      <!-- dropdown content -->
    </ul>
    <div class="test ss" v-show="true" data-test="target">
      dataset
    </div>
    <div class="test" v-show="false" ref="isRef">
      isRef
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'

const admin = ref(true)
const isRef = ref(true)
const expandDropdown = ref(false)

</script>
