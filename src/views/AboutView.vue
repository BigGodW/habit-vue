<script setup>
import { ref } from 'vue';
const isShow = ref(false)
const showIndicator = ref(true)
const showModal = ref(false)
const isSwap = ref(true)
</script>
<template>
  <div class="about">
    <!-- 抽屉元素 -->
    <div class="drawer">
      <input type="checkbox" class="drawer-toggle" id="my-drawer" v-model="isShow">
      <div class="drawer-content">
        <button class="btn btn-error " @click="isShow = true">open</button>
      </div>
      <div class="drawer-side z-10">
        <div class="drawer-overlay" @click="isShow = false"></div>
        <div class=" bg-white p-4 w-80 min-h-screen">
          <h1>hahashh</h1>
          <button class="btn fixed top-3 right-3 btn-square" @click="isShow = false">X</button>
        </div>
      </div>
    </div>
    <!-- hero -->
    <div class="hero rounded-lg
     bg-slate-300 bg-cover bg-no-repeat"
      style="background-image: url(https://bgwblog.wubug.cn/VR%E4%B8%96%E7%95%8C.png);">
      <div class="hero-overlay"></div>
      <div class="hero-content text-center text-white">
        <div>
          <h1 class="text-5xl font-bold ">hero</h1>
          <p class="py-6">descript</p>
          <button class="btn glass">success</button>
          <button class="btn btn-error btn-outline">success</button>
        </div>
      </div>
    </div>
    <!-- indicator 提示 -->

    <div class="m-2 p-2">
      <div class="indicator">
        <span class="indicator-item badge badge-primary " v-show="showIndicator">new</span>
        <button class="btn btn-block" @click="showIndicator = false">success</button>
      </div>
      <div class="btn  btn-accent ">block</div>
      <div class="btn btn-link btn-success">block</div>
    </div>
    <!-- 下拉菜单 -->
     <div>
        <div class=" dropdown dropdown-hover dropdown-right">
          <div tabindex="0" class="btn"> 显示</div>
          <div tabindex="0" class=" dropdown-content w-32 border p-2 rounded-sm">
            <h1 >hahahh</h1>
          </div>
        </div>
     </div>
     <!-- 遮罩层显示 -->
      <div>
        <button class="btn btn-success" @click="showModal = !showModal">modal</button>
        <input type="checkbox" class=" modal-toggle" v-model="showModal">
        <div class="modal">
          <div class=" modal-box">
            <h1>modal</h1>
          </div>
          <div class=" modal-backdrop" @click="showModal = false"></div>
        </div>
      </div>
      <!-- 内容切换显示 -->
       <div class="swap swap-flip w-24 m-4 p-2 text-center bg-slate-300"  @click=" isSwap = !isSwap">
          <input type="checkbox" v-model="isSwap">
          <div class="swap-on">yes</div>
          <div class="swap-off">no</div>
       </div>
  </div>
</template>

<style></style>
