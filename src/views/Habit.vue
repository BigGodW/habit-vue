<script setup>
import { ref, onMounted } from 'vue'
import NewHabit from '../components/habit/newHabit.vue'
import ShowHabit from '../components/habit/showHabit.vue'

import axios from 'axios';
const showhabit = ref('null')
const habit = ref({})
onMounted(async () => {
    const {data:result} = await axios.get('/wubug/habit')
    if (!result.habit) {
        showhabit.value = 'new'
    } else {
        habit.value = result.habit
        showhabit.value = 'show'
    }
})
</script>
<template>
    <div class="y-2 ">
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