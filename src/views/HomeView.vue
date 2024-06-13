<script setup>
import {} from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
    <hr>
    <RouterLink to="/vant">Go to vant</RouterLink>
    <RouterLink to="/habit">habit</RouterLink>
  </main>
</template>
