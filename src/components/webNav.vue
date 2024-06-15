<script setup>
import { RouterLink } from 'vue-router';
import routes from '../router/routes'
</script>
<template>
    <ul class="menu menu-horizontal flex justify-center bg-base-200 rounded-box">
        <li class="" v-for="route in routes"><span><RouterLink class="link link-hover" :to="route.path">{{ route.name }}</RouterLink></span></li>
    </ul>

</template>