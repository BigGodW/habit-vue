<script setup>
import { ref, onMounted } from 'vue'
import NewHabit from '../components/habit/newHabit.vue'
import ShowHabit from '../components/habit/showHabit.vue'

import axios from 'axios';
const showhabit = ref('null')
const habit = ref({ name: 1 })
onMounted(async () => {
    const result = await axios.get('/wubug/habit')
    if (!result.data) {
        showhabit.value = 'new'
    } else {
        habit.value = result.data
        showhabit.value = 'show'
        console.log(habit.value)
    }
})
</script>
<template>
    <div class="y-2 bg-slate-100 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen">
        <div v-if="showhabit == 'null'">
            <div class="py-12"></div>
            <van-empty image="search">
                <van-button round type="primary" plain loading loading-text="加载中..."
                    class="bottom-button">按钮</van-button>
            </van-empty>
        </div>
        <div v-if="showhabit == 'new'">
            <newHabit></newHabit>
        </div>
        <div v-if="showhabit == 'show'">
            <ShowHabit :habit="habit"></ShowHabit>
        </div>
    </div>
</template>