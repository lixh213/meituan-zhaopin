<script setup>

</script>

<template>
  <footer>
    <div class="container">

      <div class="logo_slogan">
        <div class="logo">
          <img src="@/assets/images/logo1.png">
          <h1>美团·招聘</h1>
        </div>
        <div class="slogan">
          <h1>一起成长，一起更好</h1>
          <p>Grow Together,Better Together</p>
        </div>
      </div>

      <div class="info">

        <div class="right">
          <span><a href="http://localhost:5173/">美团</a></span>
          <span>|</span>
          <span>@2024美团版权所有</span>
          <span><a href="https://beian.miit.gov.cn/">京ICP备10211739号</a></span>
          <span><img src="@/assets/images/icon.png"></span>
          <span><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002052">京公网安备 11000002002052号</a></span>
          <span>|</span>
          <span><a href="https://rules-center.meituan.com/rules-detail/2">隐私政策</a></span>
          <span>招聘意见反馈：zhaopin@meituan.com</span>
        </div>
        
        <div class="subscribe">
          <ul>
            <li>关注我们</li>
            <li><img src="@/assets/images/weixin.png"></li>
            <li><img src="@/assets/images/shipinhao.png"></li>
            <li><img src="@/assets/images/bilibili.png"></li>
            <li><img src="@/assets/images/douyin.png"></li>
            <li><img src="@/assets/images/weibo.png"></li>
            <li><img src="@/assets/images/red.png"></li>
            <li><img src="@/assets/images/in.png"></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: block;
  height: 328.52px;
  background-color: #f4f5f7;
}
.container {
  margin: 0 auto;
  width: 1280px;
}
.logo img {
  float: left;
  height: 65px;
  position: relative;
  top: 6px;
}
.logo h1 {
  float: left;
  position: relative;
  left: 10px;
  margin-top: 3px;
  font-size: 50px;
}
.logo {
  padding-top: 38px;
  padding-bottom: 114px;
  border-bottom: solid 1px #e6e7eb;
}
.logo_slogan {
  display: flex;
  justify-content: space-between;
}
.slogan h1{
  font-size: 36px;
  font-family: 'meituantype-Regular';
}
.slogan p {
  font-size: 12px;
  color: #111925;
  font-weight: 300;
  font-family: PingFangSC-Light;
  margin-top: 10px;
  margin-left: 160px;
}
.slogan {
  padding-top: 48px;
}
.info {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
}
.right span {
  color: #393a3b4a ;
  font-size: 12px;
  margin-right: 8px;
}
span a {
  text-decoration:underline;
  color: #393a3b4a ;
}
span a:hover {
  color:#111925;
}
span img {
  position: relative;
  top:1px;
  width: 13px;
}
ul {
  width: 412px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color:#000000D6;
}
ul li:first-child {
  padding-top: 8px;
}
ul li img {
  width: 32px;
}
</style>