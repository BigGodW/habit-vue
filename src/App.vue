<script setup>
import { RouterLink, RouterView } from 'vue-router'
import webNav from './components/webNav.vue'
</script>

<template>
  <div class="p-2 text-xl h-screen bg-slate-200">
    <webNav></webNav>
    <RouterView />
  </div>
</template>


