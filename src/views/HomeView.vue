<script setup>
import { ref } from 'vue';
import { } from 'vue-router'
const weblist = ref([{
  title: 'web',
  description: "前端",
  tag: ['vue', 'vant', 'tailwind']
}, {
  title: "server",
  description: "后端",
  tag: ['node.js', 'express']
}, {
  title: "database",
  description: "数据库",
  tag: ['mysql', 'prisma']
}])
</script>

<template>
  <main>
    <h1 class="text-center text-2xl">网站使用技术栈</h1>
    <div class="stats shadow flex ">
      <div class="stat" v-for="web of weblist">
        <div class="stat-title">{{ web.title }}</div>
        <div class="stat-desc">{{ web.description }}</div>
        <div class="stat-value">
          <div class="">
            <span class="badge badge-accent m-1 text-white" v-for="tag in web.tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
    <svg class="icon text-9xl fixed bottom-0 right-0 opacity-60" aria-hidden="true">
      <use xlink:href="#icon-xingbienannv"></use>
    </svg>
  </main>
</template>
