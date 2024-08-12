<script setup>
import { onMounted, onUnmounted } from 'vue';

const scrollToSection = () => {
  const hash = window.location.hash;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

onMounted(scrollToSection);
onUnmounted(() => {
  // 取消监听，避免内存泄漏
});

</script>

<template>
  <div class="container">
    <div id="section1">01 这是人才成长的跳转页面</div>
    <div id="section2">02 这是人文关怀的跳转页面</div>
    <div id="section3">03 这是文化活动的跳转页面</div>
    <div id="section4">04 这是员工公益的跳转页面</div>
  </div>
</template>

<style scoped>
.container {
  width: 1280px;
  margin: 0 auto;
}
#section1,#section2,#section3,#section4 {
  height: 560px;
}
</style>