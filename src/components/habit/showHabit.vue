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
    <div class="card shadow-lg rounded-lg m-2 z-10 bg-sky-200 ">
        <figure><img src="https://bgwblog.wubug.cn/%E5%9B%BE%E6%80%AA%E5%85%BD_%E5%9B%BE%E6%80%AA%E5%85%BD%E5%8E%9F%E5%88%9B%E5%85%83%E7%B4%A0%E6%8F%92%E7%94%BB%E6%97%A9%E5%AE%89%E8%93%9D%E5%A4%A9%E9%A6%96%E5%9B%BE.jpg" alt="Shoes" /></figure>
        <div class="card-body ">
            <h2 class="card-title">
                <p class="text-center text-3xl text-blue-900">{{ habit.title.replace('白袜','**') }}</p>
            </h2>
            <p class=" line-clamp-2 text-blue-600 text-center">{{ habit.description }}</p>
            <!-- <p>开始：{{ dayjs(habit.createdAt).format('YYYY年MM月DD日 HH:mm:ss') }}</p> -->
            <div class="flex self-center items-center flex-wrap space-x-1 gap-2 justify-center">
                <MyIcon name="icon-shijian" size="text-4xl"></MyIcon>
                <span class=" flex-none">您已坚持</span>
                <p class="text-center font-bold text-xl">
                    <span v-show="goingTime.dd"><span class=" bg-black text-white p-1 rounded-lg">{{ goingTime.dd }}</span>天</span>
                    <span ><span class=" bg-black text-white p-1 rounded-lg">{{ goingTime.hh}}</span>时</span>
                    <span ><span class=" bg-black text-white p-1 rounded-lg countdown">
                        <span :style="{'--value':goingTime.mm}"></span>
                    </span>分</span>
                    <span ><span class=" bg-black text-white p-1 rounded-lg countdown">
                        <span :style="{'--value':goingTime.ss}"></span>
                    </span>秒</span>
                </p>
            </div>
            <!-- <div class="card-cations justify-center flex">
                <button class="btn btn-primary" @click="gameOver" :loading="isDisabled"
                    :disabled="isDisabled">结束</button>
            </div> -->
            <button class="btn btn-primary" @click="gameOver" :loading="isDisabled"
                    :disabled="isDisabled">结束</button>
            <MyIcon class=" absolute -top-7 -right-3"  name="icon-flag" size="text-7xl"></MyIcon>
        </div>
    </div>



</template>