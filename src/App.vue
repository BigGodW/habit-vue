<script setup>
import { RouterLink, RouterView } from 'vue-router'
import webNav from './components/webNav.vue'
</script>

<template>
  <div class="p-2 text-xl bg-slate-50 h-screen">
    <!-- <webNav></webNav> -->
    <RouterView />
  </div>
</template>


