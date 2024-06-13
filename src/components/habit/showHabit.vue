<script setup>
import Tag from './tag.vue';
import axios from 'axios';
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
const router = useRouter()
const props = defineProps(['habit'])
const isDisabled = ref(false)

// 结束habit
const gameOver = async () => {
    isDisabled.value = true
    const result = await axios.put('/wubug/habit/' + props.habit.id, {
        isEnd: true
    })
    if (result.data) {
        window.location.reload()
    }
}


</script>
<template>
    <Tag :id="habit.id"></Tag>
    <h1>habit</h1>
    <pre>{{ habit }}</pre>
    <h2>{{ habit.title }}</h2>
    <p>创建时间{{ habit.createdAt }}：</p>
    <p>{{ habit.description }}</p>
    <van-button type="primary" @click="gameOver" :loading="isDisabled" :disabled="isDisabled">结束</van-button>
    


</template>