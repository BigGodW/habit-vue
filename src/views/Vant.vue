<script setup></script>
<template>
    <h1>vant</h1>
    <div>
        <h1>grid</h1>
        <div class="box overflow-hidden bg-slate-200">
            <div class="flex gap-2 overflow-auto p-2 -mb-2">
            <div v-for="i in 10" class="bg-red-200 p-2 m-2 text-center rounded-lg">
                
                <MyIcon name="icon-ziyuan" size="text-3xl"></MyIcon>
                <p>{{ i }}</p>
            </div>
        </div>
        </div>
    </div>
</template>