<template>

<div class="black-bg" v-if="모델창열렸니 == true">
  <div class="white-bg">
    <h4>상세페이지임</h4>
    <p>상세페이지 내용임</p>
    <button @click="모델창열렸니 = false">닫기</button>
  </div>
</div>
<div>
  <a v-for="작명 in 메뉴들" :key="작명">{{ 작명 }}</a>
 
</div>





<div>
  <img src="./assets/room0.jpg">
  <button @click="모델창열렸니 = true">{{ 원룸들[0] }} </button>
  <p>{{ 원룸들[0] }}</p>
  <button @click="신고수[0]++">
    허위매물신고
  </button>
  <span>
    신고수 : {{신고수[0]}}
  </span>
</div>

<div>
    <img src="./assets/room1.jpg">
  <button>{{ products[1] }} </button>
  <p>60만원</p>
  <button @click="신고수[1]++">
    허위매물신고
  </button>
  <span>
    신고수 : {{신고수[1]}}
  </span>
</div>

<div>
    <img src="./assets/room2.jpg">
  <button>{{ products[2] }} </button>
  <p>70만원</p>
  <button @click="신고수[2]++">
    허위매물신고
  </button>
  <span>
    신고수 : {{신고수[2]}}
  </span>
</div>
 
  
</template>

<script>

import data from './one room.js';


export default {
  name: 'App',
  data(){
    return {
      원룸들 : data,
      모델창열렸니 : false,
      신고수 : [0,0,0],
      메뉴들 : ['Home', 'Shop', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸']

      
    }
  },
  
 
}
</script>

<style>
body {
  margin : 0
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
