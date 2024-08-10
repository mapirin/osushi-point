<template>
<div class="text-center">
    <h1>{{ appName }}</h1>
    <div class="mb-3">
        <p>現在のポイント</p>
        <p>{{ currentPoint }}</p>
    </div>
    <div class="mb-3">
        <button @click="openModal" class="btn btn-primary">ためる</button>
          <div id="overlay" v-show:="showContent">
            <div id="content">
              <p>ポイントを貯めますか？</p>
              <button @click="plus">はい</button>
              <button @click="closeModal">いいえ</button>
            </div>
          </div>
    </div>
    <div class="mb-3">
        <div  v-if="currentPoint < 4">
            <button @click="minus" class="btn btn-primary" disabled>つかう</button>
        </div>
        <div v-else>
            <button @click="minus" class="btn btn-primary">つかう</button>
        </div>
    </div>
    <div class="p-3 mb-2 text-red">
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
        openModal(){
          this.showContent = true;
        },
        closeModal(){
          this.showContent = false; 
        },
        plus(){
            this.message = "おつかれさま！";
            this.currentPoint ++;
        },
        minus(){
            this.message = "ご褒美！";
            this.currentPoint -= 4;
        }
    },
    data: () => ({
        appName: "おすしポイント",
        currentPoint: "0",
        message: " ", 
        showContent: false
    }),
}
</script>
<style>
  body{
    background-image:
        url(../assets/tamago.png),
        url(../assets/buri.png),
        url(../assets/hamachi.png),
        url(../assets/ikura.png),
        url(../assets/kinmedai.png),
        url(../assets/negitoro.png),
        url(../assets/torotaku.png),
        url(../assets/salmon.png),
        url(../assets/tai.png),
        url(../assets/nodoguro.png),
        url(../assets/hotate.png),
        url(../assets/inarizushi.png),
        url(../assets/iwashi.png),
        url(../assets/anago.png);
    background-position:   
        top 200px left 30px,
        top 300px left 30px,
        top 400px left 30px,
        top 500px left 30px,
        top 600px left 30px,
        top 600px left 160px,
        top 600px left 290px,
        top 600px left 420px,
        top 600px left 550px,
        top 500px left 550px,
        top 400px left 550px,
        top 300px left 550px,
        top 200px left 550px;
    background-repeat:
        no-repeat,
        no-repeat,
        no-repeat,
        no-repeat,
        no-repeat,
        no-repeat,
        no-repeat,
        no-repeat;
  },
  #overlay{
    z-index:1;

    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.5);

    display: flex;
    align-items: center;
    justify-content: center;
  },
  #content{
    z-index:2;
    width:50%;
    padding: 1em;
    background:#fff;
  }
</style>