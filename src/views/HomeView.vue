<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world :msg="msg" />
  </div>
</template>
<script setup lang="ts">
const msg = ref("Welcome to Your Vue.js + TypeScript App");
</script>
