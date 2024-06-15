<script setup>
import axios from 'axios';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import MyIcon from '../MyIcon.vue';
const router = useRouter()
const newHabit = ref({
    title: "",
    description: ""
})
const isDisabled = ref(false)
const addHibit = async () => {
    const { title, description } = newHabit.value
    if (!title) {
        return false
    }

    isDisabled.value = true
    const result = await axios.post('/wubug/habit', {
        title, description
    })
    if (result.data) {
        console.log(result.data)
        window.location.reload()
    }
}

</script>
<template>
    <div class=" h-screen bg-contain bg-no-repeat bg-bottom" 
    style="background-image: url('https://bgwblog.wubug.cn/VR%E4%B8%96%E7%95%8C.png');">
    <div class="card shadow-xl m-2">
        <div class="card-body">
            <h1 class=" p-2 text-center py-2 text-2xl leading-loose font-bold">
            <MyIcon name="icon-ziyuan" size="text-3xl"></MyIcon>
            flag
            <MyIcon name="icon-yanhua" size="text-3xl"></MyIcon>
        </h1>

        <van-cell-group inset>
            <van-field v-model="newHabit.title" label="标题" placeholder="你的新目标" />
            <van-field v-model="newHabit.description" label="描述" placeholder="目标描述" />
        </van-cell-group>
        <div class="p-2 m-2">
            <van-button hairline type="primary" :disabled="isDisabled" block @click="addHibit">添加</van-button>
        </div>
        <svg class="animate-bounce icon text-6xl fixed right-1 bottom-1" aria-hidden="true">
            <use xlink:href="#icon-xingbienannv"></use>
        </svg>
        </div>
    </div>
</div>
</template>

