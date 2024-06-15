<script setup>
import axios from 'axios';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
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
    <div>
        <h1 class=" p-2 text-center py-2 text-2xl leading-loose font-bold">
            一个新的flag
            <span class="animate-bounce">
                <svg class="icon text-3xl inline animate-bounce" aria-hidden="true">
                    <use xlink:href="#icon-flag"></use>
                </svg>
            </span>
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
</template>
