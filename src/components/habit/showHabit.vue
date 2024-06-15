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
dayjs.extend(relativeTime)
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

onMounted(()=>{
   const sss = dayjs().diff(dayjs(props.habit.createdAt))
   const SS = Math.floor(sss/1000)
   const dd = Math.floor(SS/86400)
   const hh = Math.floor((SS-dd*86400)/3600)
   const mm = Math.floor((SS-dd*86400-hh*3600)/60)
   const ss = SS-dd*86400-hh*3600-mm*60
   goingTime.value = {dd,hh,mm,ss}

})


</script>
<template>
    <Tag :id="habit.id"></Tag>
    <div class="card">
        <div class="card-body shadow-xl rounded-md border">
            <h2 class="card-title">{{ habit.title }}</h2>
            <p>{{ habit.description }}</p>
            <p>开始：{{ dayjs(habit.createdAt).format('YYYY年MM月DD日 HH:mm:ss') }}</p>
            <p>您坚持了：{{ goingTime.dd }}天{{ goingTime.hh }}小时{{ goingTime.mm }}分钟{{ goingTime.ss }}秒</p>
            <div class="card-cations">
                <button class="btn btn-primary" @click="gameOver" :loading="isDisabled" :disabled="isDisabled">结束</button>
            </div>
        </div>
    </div>
    


</template>