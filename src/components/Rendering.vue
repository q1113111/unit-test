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
    <div data-test="target">
      dataset
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'

const admin = ref(true)
const expandDropdown = ref(false)

</script>
