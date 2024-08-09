<template>
<div class="text-center">
    <h1>{{ appName }}</h1>
    <div class="mb-3">
        <p>現在のポイント</p>
        <p>{{ currentPoint }}</p>
    </div>
    <div class="mb-3">
        <button @click="plus" class="btn btn-primary">ためる</button>
    </div>
    <div class="mb-3">
        <div  v-if="currentPoint < 4">
            <button @click="minus" class="btn btn-primary" disabled>つかう</button>
        </div>
        <div v-else>
            <button @click="minus" class="btn btn-primary">つかう</button>
        </div>
    </div>
    <div class="p-3 mb-2 bg-success text-white">
        <p>{{ message }}</p>
    </div>
</div>
</template>
<script>
export default {
    name: 'OsushiHome',
    components: {

    },
    methods: {
        plus(){
            this.message = "1ポイント貯める";
            this.currentPoint ++;
        },
        minus(){
            this.message = "4ポイント使う";
            this.currentPoint -= 4;
        }
    },
    data: () => ({
        appName: "Oshshi Point",
        currentPoint: "0",
        message: " " 
    }),
}
</script>
<style>

</style>