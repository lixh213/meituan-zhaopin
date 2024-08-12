<script setup>
import { ref } from 'vue';
const showMore1 = ref(false); // 控制显示更多信息的变量
const showMore2 = ref(false); // 控制显示更多信息的变量
const showMore3 = ref(false); // 控制显示更多信息的变量
const showMore4 = ref(false); // 控制显示更多信息的变量
</script>

<template>
<div class="introduction">
    <div class="container">
      <h1>工作在美团</h1>
        <div class="list">
          <ul>
            <li
            class="info-trigger"
      @mouseenter="showMore1 = true"
      @mouseleave="showMore1 = false">
              <h2>人才成长</h2>
              <p v-if="showMore1">完整的方法论，多元的业务落地场景和顶尖的团队，帮助你在实践中学习，成为更好的自己！</p>
              <button v-if="showMore1"> <RouterLink :to="{ name: 'About', hash: '#section1' }">了解详情</RouterLink></button>
            </li>
            <li
            class="info-trigger"
      @mouseenter="showMore2 = true"
      @mouseleave="showMore2 = false">
              <h2>人文关怀</h2>
              <p v-if="showMore2">时刻关心你的工作体验与生活状态，希望你的每一天都丰富而美好！</p>
              <button v-if="showMore2"><RouterLink :to="{ name: 'About', hash: '#section2' }">了解详情</RouterLink></button>
            </li>
            <li
            class="info-trigger"
      @mouseenter="showMore3 = true"
      @mouseleave="showMore3 = false">
              <h2>文化活动</h2>
              <p v-if="showMore3">与你一起走过每个重要节日，一起庆祝你的每个人生里程碑，一起让生活更好！</p>
              <button v-if="showMore3"><RouterLink :to="{ name: 'About', hash: '#section3' }">了解详情</RouterLink></button>
            </li>
            <li
            class="info-trigger"
      @mouseenter="showMore4 = true"
      @mouseleave="showMore4 = false">
              <h2>员工公益</h2>
              <p v-if="showMore4">美团人相信，每个人都可以做一点好事，在工作中也有机会做公益。</p>
              <button v-if="showMore4"><RouterLink :to="{ name: 'About', hash: '#section4' }">了解详情</RouterLink></button>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<style scoped >
.container {
  width: 1280px;
  margin: 0 auto;
  padding-top: 80px;
}
.introduction {
  height: 720px;
  background-image: url(@/assets/images/serviceBg.png);
}
ul {
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
}
ul li {
  width: 296px;
  height: 464px;
  border-radius: 20px;
}
ul li:first-child {
  background-image: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/grow.png);
  background-size: contain; 
}
ul li:nth-child(2) {
  background-image: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/care%402x.png);
  background-size: contain; 
}
ul li:nth-child(3) {
  background-image: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/activity.png);
  background-size: contain; 
}
ul li:nth-child(4) {
  background-image: url(https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/welfare.png);
  background-size: contain; 
}
.info-trigger {
  cursor: pointer;
}

.info-trigger:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

ul li h2,p {
  color: white;
}
ul li h2 {
  margin-top: 400px;
  margin-left: 100px;
  position: relative;
  
}

/* 可以添加一些过渡效果 */
p,button {
  opacity: 0;
  transition: opacity 0.3s ease;
  margin: 10px 0 0 0;
}
p {
  display: block;
  text-align: center;
  width: 232px;
  margin: 0 auto;
}
button {
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  width: 80px;
  height:32px;
  background-color: #ffd100;
  border-radius: 4px;
  border: solid 1px black;
}
.info-trigger:hover p,button {
  opacity: 1;
}
.info-trigger:hover h2 {
  margin-top: 250px;
}
</style>