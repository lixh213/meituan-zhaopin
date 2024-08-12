<script setup>

</script>

<template>
  <div class="home">
    <div class="container">
      <div class="title">
      <h1>一起成长，一起更好</h1>
      <h3>Grow Together,Better Together</h3>
      <!-- 搜索框 -->
      <div class=search>
        <!-- <label for="search">关键词:</label> -->
        <input type="text" id="search" v-model="searchKeyword" placeholder="美团全部岗位">
        <button @click="searchJobs">搜索</button>
      </div>
    </div>
    <div class="list">
        <ul>
          <li>
            <a>
              <h3>北斗计划</h3>
              <span></span>
              <p>面向全球顶尖校园科技人才的招聘项目，诚邀各技术领域的优秀同学加入</p>
            </a>
          </li>
          <li>
            <a>
              <h3>社会招聘</h3>
              <span></span>
              <p>面向有一定工作经验的优秀人才</p>
            </a>
          </li>
          <li>
            <a>
              <h3>校园招聘</h3>
              <span></span>
              <p>面向所有校园人才，提供多种招聘项目，无论你在哪个年级，都能找到合适岗位</p>
            </a>
          </li>
          <li>
            <a>
              <h3>日常实习</h3>
              <span></span>
              <p>美团生态内灵活就业岗位，有骑手、分拣员、司机、推广员等，全职兼职都有</p>
            </a>
          </li>
          <li>
            <a>
              <h3>工作兼职</h3>
              <span></span>
              <p>美团生态内灵活就业岗位，有骑手、分拣员、司机、推广员等，全职兼职都有</p>
            </a>
          </li>
          <li>
              <h3>转正实习</h3>
              <span></span>
              <p>面向即将参加当年秋招的在校学生，提供转正机会，实习时间一般不少于两个月</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 625.57px;
  background-image: url(@/assets/images/videoPost.png);
}
.container {
  width: 1280px;
  margin: 0 auto;
}
.title {
  display: block;
  position: relative;
  top:90px;
  left: 300px;
}
.title h1{
  font-size: 52px;
  color:white;
  position: relative;
  left: 60px;
}
.title h3{
  font-size: 24px;
  color:white;
  position: relative;
  left: 100px;
}
.search {
  height: 60px;
  width: 600px;
  margin-top: 36px;
  border-radius: 30px;
  background-color: white;
}
input {
  position: relative;
  width: 544px;
  height: 60px;
  border-radius: 30px;
  border: 0;
  font-size: 20px;
  padding-left: 30px;
}
input:focus {
  outline: none; /* 移除边框 */
  box-shadow: none; /* 移除阴影 */
  border-color: transparent; /* 将边框设置为透明 */
}
button {
  position: relative;
  bottom: 2px;
  width: 52px;
  height:52px;
  background-color: #ffd100;
  border: 0;
  border-radius: 26px;
}
.list ul{
  position: relative;
  top:190px;
  width: 1265.88px;
  height: 192px;
  display: flex;
  background-color: rgba(255, 251, 251, 0.966);
  border-radius:20px;
}
.list li p{
  font-size: 14px;
  color: #57585b;
  font-family: 'PingFangSC-Regular';
}
.list li {
  width: 210.98px;
  padding: 32px 8px 26px 24px;
}
.list li:hover span{
  background-color: #ffd100;
}
.list li span {
  display: block;
  width: 40px;
  height: 8px;
  margin: 16px 0;
  background-color: #e0e0e0;
  border-radius: 4px;
}
.list ul li:last-child h3{
  color:rgba(211, 207, 207, 0.966);
}
.list ul li:last-child p{
  color:rgba(211, 207, 207, 0.966);
}
.list ul li:last-child:hover {
  cursor: not-allowed;
}
.list ul li:last-child:hover span {
  background-color: #e0e0e0;
}

</style>