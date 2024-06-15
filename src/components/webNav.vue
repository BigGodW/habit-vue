<script setup>
import routes from '../router/routes'
</script>
<template>
    <h1 class="text-center">网站首页当航</h1>
    <ul class="menu menu-horizontal flex justify-center bg-base-200 rounded-box">
        <li class="" v-for="route in routes"><span><a class="link link-hover" :href="route.path">{{ route.name }}</a></span></li>
    </ul>

</template>