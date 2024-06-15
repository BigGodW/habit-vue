<script setup>
defineProps(['name','size'])
</script>

<template>
    <svg class="icon inline" :class="[size]" aria-hidden="true">
        <use :xlink:href="'#'+name"></use>
    </svg>
</template>