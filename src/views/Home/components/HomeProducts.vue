<script setup>

</script>

<template>
  <div class="products">
    <div class="container">
      <h1>
        产品和服务
      </h1>
      <ul>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
        <li>
          <img src="@/assets/images/meituan.png">
          <span>美团</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1280px;
  margin: 0 auto;
  padding-top: 80px;
}
.products {
  height: 720px;
  background-image: url(@/assets/images/serviceBg.png);
}
ul {
  width: 1280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
}
ul li {
  width: 240px;
  height: 100px;
  background-color: white;
  margin: 0 15px 20px 0;
  border-radius: 16px;
  cursor: pointer;
  padding: 30px 0 0 70px;
}
ul li img {
  width: 36px;
  height: 36px;
}
ul li span {
  position: relative;
  bottom: 10px;
  font-size: 24px;
}
ul li:hover{
   box-shadow: 2px 2px 15px rgba(233, 227, 227, 0.3), /* 右下 */
              -2px -2px 15px rgba(233, 227, 227, 0.3),/* 左上 */
              2px -2px 15px rgba(233, 227, 227, 0.3),/* 右上 */
              -2px 2px 15px rgba(233, 227, 227, 0.3); /* 左下 */
}
</style>