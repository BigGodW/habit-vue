<script setup>
import Tag from './tag.vue';
import axios from 'axios';
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
const router = useRouter()
const props = defineProps(['habit'])
const isDisabled = ref(false)
import dayjs from 'dayjs'
dayjs.locale('zh-cn')
import relativeTime from 'dayjs/plugin/relativeTime'
import { watch } from 'vue';
dayjs.extend(relativeTime)

import MyIcon from '../MyIcon.vue'

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
const goingTime = ref({})
const timeSS = ref(0)
// 设置显示为2位数字
const set10 = (value) => {
    if (value < 10) {
        return '0' + value
    } return value
}
// 获取天、时、分、秒
const getGoingTime = () => {
    const sss = dayjs().diff(dayjs(props.habit.createdAt))
    const SS = Math.floor(sss / 1000)
    timeSS.value = SS
    const dd = Math.floor(SS / 86400)
    const hh = set10(Math.floor((SS - dd * 86400) / 3600))

    const mm = set10(Math.floor((SS - dd * 86400 - hh * 3600) / 60))
    const ss = set10(SS - dd * 86400 - hh * 3600 - mm * 60)
    goingTime.value = { dd, hh, mm, ss }
}
onMounted(() => {
    getGoingTime()
    setInterval(() => { timeSS.value++ }, 1000)

})
watch(timeSS, () => {
    getGoingTime()
})

</script>
<template>
    <Tag :id="habit.id"></Tag>
    <div class="card shadow-lg rounded-xl m-2 z-10 bg-white ">
        <div class="card-body ">
            <h2 class="card-title">
                <p class="text-center text-3xl text-blue-900">{{ habit.title }}</p>
            </h2>
            <p class=" line-clamp-2 text-blue-600 text-center">{{ habit.description }}</p>
            <!-- <p>开始：{{ dayjs(habit.createdAt).format('YYYY年MM月DD日 HH:mm:ss') }}</p> -->
            <div class="flex self-center items-center flex-wrap justify-center">
                <MyIcon name="icon-shijian" size="text-5xl"></MyIcon>
                <span class=" flex-none">您坚持了</span>
                <p class="text-center font-bold">
                    <span v-show="goingTime.dd"><span class=" bg-black text-white p-1 rounded-lg">{{ goingTime.dd }}</span>天</span>
                    <span ><span class=" bg-black text-white p-2 rounded-lg">{{ goingTime.hh}}</span>小时</span>
                    <span ><span class=" bg-black text-white p-2 rounded-lg">{{ goingTime.mm }}</span>分钟</span>
                    <span ><span class=" bg-black text-white p-2 rounded-lg">{{ goingTime.ss }}</span>秒</span>
                </p>
            </div>
            <div class="card-cations justify-center flex">
                <button class="btn btn-primary" @click="gameOver" :loading="isDisabled"
                    :disabled="isDisabled">结束</button>
            </div>
            <MyIcon class=" absolute -top-7 -right-3"  name="icon-flag" size="text-7xl"></MyIcon>
        </div>
    </div>



</template>