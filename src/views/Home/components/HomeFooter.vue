<script setup>

</script>

<template>
  <div class="container">
    <div class="problem">
      <div class="title">
        <h1>常见问题</h1>
      <span>查看更多 ></span>
      </div>
      <ul>
        <li>
          <a href="">
            【社招】美团的社招招聘流程是什么？
          </a>
        </li>
        <li>
          <a href="">
            【社招】填写简历时有哪些注意事项？
          </a>
          
        </li>
        <li>
          <a href="">
            【校招】本次校招面向哪些同学开放？
          </a>
        </li>
        <li>
          <a href="">
            【校招】招聘职位的工作地点在哪儿？
          </a>
        </li>
      </ul>
    </div>
    <div class="announcement">
      <div class="title">
        <h1>公告</h1>
        <span>查看更多 ></span>
      </div>
      <ul>
        <li>
          <a href="">
            2024年秋季校园招聘行程介绍
          </a>
        </li>
        <li>
          <a href="#">
            美团2025届北斗计划启动，让科技走向烟火人间
          </a>
          
        </li>
        <li>
          <a href="#">
            来美团启航计划，极速开启面试，早拿offer早入职！欢迎零售类人才加入...
          </a>
        </li>
        <li>
          <a href="#">
            详解8大技术方向，美团校招技术岗位投递指南来了
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1280px;
  margin: 0 auto;
  display: flex;
}
.problem {
  width: 50%;
  /* background-color: pink; */
  
  
}
.announcement {
  width: 50%;
  /* background-color: skyblue; */
  padding-left: 60px;
}
.title {
  display: flex;
  justify-content: space-between;
  padding-right: 60px;
}
.title span {
  margin:auto 0;
}
ul {
  padding-right: 60px;
  border-right: solid 1px rgb(208, 207, 207);
}
ul li a {
  color: gray
}
ul li a:hover {
  color: #0a70f5;
}
ul li {
  padding-top: 40px;
  padding-bottom: 24px;
  border-bottom: dotted 1px rgb(208, 207, 207);
}
</style>