<script setup>

import {ref} from 'vue'

const bannerList = ref([
  {
    imgUrl:'https://s3plus.meituan.net/zhaopin-official-website-prod/imgs/homePage/meituan_introduce_2.png'
  },
  {
    imgUrl:'https://s3plus.sankuai.com/zhaopin-official-website-prod/imgs/homePage/meituan_introduce_technology.png'
  },
  {
    imgUrl:'https://s3plus.sankuai.com/zhaopin-official-website-prod/imgs/homePage/meituan_introduce_responsibility.png'
  }
])


</script>

<template>
<div class="introduction">
    <div class="container">
      <h1>美团简介</h1>
        <div class="home-banner">
          <el-carousel height="500px">
            <el-carousel-item v-for="item in bannerList" :key="item.id">
              <img :src="item.imgUrl" alt="">
            </el-carousel-item>
          </el-carousel>
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

img {
  width: 1280px;
  height: 452px;
  margin-top: 35px;
}
</style>