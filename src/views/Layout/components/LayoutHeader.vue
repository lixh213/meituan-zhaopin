<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// 使用 Vue Router
const route = useRoute();

const isHome = computed(() => route.path === '/');
const isBeidou = computed(() => route.path === '/beidou');
const isSocial = computed(() => route.path === '/social');
const isCampus = computed(() => route.path === '/campus');
const isAbout = computed(() => route.path === '/about');
</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <img src="@/assets/images/logo1.png">
        <RouterLink to="/" class="title">美团·招聘</RouterLink>
      </h1>
      <ul class="app-header-nav">
        <li class="home" :class="{ active: isHome }">
          <RouterLink to="/" class="home1">首页</RouterLink>
          <div class="line"></div>
        </li>
        <li :class="{ active: isBeidou }"> 
        <RouterLink to="/beidou">北斗计划</RouterLink> 
        <div class="line"></div>
      </li>
        <li :class="{ active: isSocial }"> <RouterLink to="/social">社会招聘</RouterLink><div class="line"></div> </li>
        <li :class="{ active: isCampus }"> <RouterLink to="/campus">校园招聘</RouterLink><div class="line"></div> </li>
        <li > <RouterLink to="/">工作兼职</RouterLink><div class="line"></div> </li>
        <li :class="{ active: isAbout }"> <RouterLink to="/about">了解美团</RouterLink><div class="line"></div> </li>
        <li> <RouterLink to="/">常见问题</RouterLink><div class="line"></div> </li>
      </ul>
      <div>
        <button class="english">English</button>
        <button class="login"><a href="/login">登录</a></button>
      </div>
      
    </div>
  </header>
</template>

<style scoped lang="scss">
.container {
  display: block;
  height: 77.99px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #000;
}
h1 .title {
  position: relative;
  bottom:6px;
  left:5px;
}
li {
  float: left;
  width: 70px;
  margin: 0 20px;
  font-weight: bold;
}
button {
  margin: 0 5px;
  width: 80px;
  height:32px;
  border-radius: 4px;
}
.english {
  border: solid 1px #111925;
  background-color: white;
}
.login {
  background-color: #ffd100;
  border: solid 1px #ffd100;
}
img {
  position:relative;
  top:5px;
  border-radius: 10px;
  width: 45px;
}
.active .line {
  position: relative;
  top: 8px;
  width: 24px;
  height: 4px;
  background-color: #ffd000;
  margin: 0 auto;
  border-radius: 2px;
}
.home .home1 {
  position: relative;
  left: 18px;
}
</style>