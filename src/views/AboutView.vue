<script setup>
import { ref } from 'vue';
const isShow = ref(false)
</script>
<template>
  <div class="about">
    <!-- 抽屉元素 -->
    <div class="drawer">
      <input type="checkbox" class="drawer-toggle" id="my-drawer" v-model="isShow">
      <div class="drawer-content">
        <button class="btn " @click="isShow= true">open</button>
      </div>
      <div class="drawer-side">
       <div class="drawer-overlay" @click="isShow = false"></div>
        <div class=" bg-white p-4 w-80 min-h-screen">
          <h1>hahashh</h1>
          <button class="btn fixed top-3 right-3" @click="isShow = false">X</button>
        </div>
      </div>
    </div>
    <!-- hero -->
    <div class="hero rounded-lg
     bg-slate-300 bg-cover bg-no-repeat" style="background-image: url(https://bgwblog.wubug.cn/VR%E4%B8%96%E7%95%8C.png);">
      <div class="hero-overlay"></div>
      <div class="hero-content text-center text-white">
       <div>
        <h1 class="text-5xl font-bold ">hero</h1>
        <p class="py-6">descript</p>
        <button class="btn">success</button>
       </div>
      </div>
    </div>
    <!-- indicator -->
     <div class="indicator">
      <span class="indicator-item badge badge-primary indicator-start">new</span>
      <button class="btn">success</button>
     </div>
  </div>
</template>

<style></style>
