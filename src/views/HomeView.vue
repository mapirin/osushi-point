<template>
<div class="text-center">
    <h1>{{ appName }}</h1>
    <div class="mb-3">
        <p>現在のポイント</p>
        <p>{{ currentPoint }}</p>
    </div>
    <div class="mb-3">
        <button @click="openModal(0)" class="btn btn-primary">ためる</button>
          <div id="overlay" v-show:="showContentPlus">
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
            <button @click="openModal(1)" class="btn btn-primary">つかう</button>
            <div id="overlay" v-show:="showContentMinus">
              <div id="content">
                <p>ポイントを使いますか？</p>
                <button @click="minus" class="btn btn-primary">はい</button>
                <button @click="closeModal">いいえ</button>
              </div>
          </div>
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
        openModal(id){
          if(id === 0){
            this.showContentPlus = true;
          }else{
            this.showContentMinus = true;
          }
        },
        closeModal(){
          this.showContentPlus = false;
          this.showContentMinus = false; 
        },
        plus(){
            this.showContentPlus = false; 
            this.message = "おつかれさま！";
            this.currentPoint ++;
        },
        minus(){
            this.showContentMinus = false;
            this.message = "ご褒美！";
            this.currentPoint -= 4;
        }
    },
    data: () => ({
        appName: "おすしポイント",
        currentPoint: "0",
        message: " ", 
        showContentPlus: false,
        showContentMinus: false
    }),
}
</script>
<style>
  body{
    background-image:
        url(../assets/tamago.png),
        url(../assets/hamachi.png),
        url(../assets/ikura.png);
    background-position:
        top 600px left 30px,
        top 600px left 160px,
        top 600px left 290px;
    background-repeat:
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