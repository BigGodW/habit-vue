<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'
import MyIcon from '../MyIcon.vue';
const tagList = ref([])
const props = defineProps(['id'])
const wait = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        }, ms)
    })
}
onMounted(async () => {
    // 获取相关tag
    const {data:result} = await axios.get('/wubug/tag/habit/' + props.id)
    if (!result.tags.length) {
        tagList.value.push({ id: 2, text: "空空如也 发条弹幕吧~~~~" })
    } else {
        const data = result.tags.map((item) => {
            return { id: item.id, text: item.title }
        })
        console.log(data)
        tagList.value.push({ id: 0, text: '一大波弹幕正在袭来~~~' })
        for (let i = 0; i < data.length; i++) {
            tagList.value.push(data[i])
            await wait(800)
        }
    }
})
const newTag = ref('')
const tagIsDisabled= ref(false)
const addTag = async ()=>{
    if(!newTag.value) return false
    tagIsDisabled.value = true
    tagList.value.push({id:1,text:newTag.value})
    const result = await axios.post('/wubug/tag/'+props.id,{
        title:newTag.value
    })
    if(result.data){
        newTag.value = ''
        tagIsDisabled.value = false
    }
}

</script>
<template>
    <van-barrage  :delay="1000" rows="3" v-model="tagList">
        <div class="video w-full h-24" ></div>
    </van-barrage>
    
    <div class=" bg-slate-50 z-50 fixed bottom-4 left-0 right-0 p-2">
        <van-cell-group inset class="">
        <van-field v-model="newTag" center clearable  placeholder="骚话来一句">
            <template #button>
                <van-button  size="small" type="primary" :disabled="tagIsDisabled" @click="addTag">
                    <span class=" font-bold flex items-center"> 
                        发送
                        <MyIcon name="icon-fasong" size="text-3xl"></MyIcon>
                    </span>
                </van-button>
            </template>
        </van-field>
    </van-cell-group>
    </div>
</template>