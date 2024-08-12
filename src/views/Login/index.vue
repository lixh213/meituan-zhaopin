<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const phoneNumber = ref('');
const verificationCode = ref('');
const isAgreed = ref(false); // 用于跟踪是否勾选了协议
const phoneError = ref(''); // 用于存储手机号码验证错误信息

function validatePhoneNumber() {
  // 正则表达式用于验证手机号码是否有效（示例：11位数字）
  const phoneRegex = /^1[3-9]\d{9}$/;
  return phoneRegex.test(phoneNumber.value);
}

function sendVerificationCode() {
  if (!validatePhoneNumber()) {
    phoneError.value = '手机号码有误，请重新输入！';
    return;
  }
  phoneError.value = ''; // 清除错误信息
  console.log(`向手机号码 ${phoneNumber.value} 发送验证码`);
  setTimeout(() => {
    verificationCode.value = '123456'; // 假设验证码是123456
  }, 1000);
}

function login() {
  if (!isAgreed.value) {
    alert('请先勾选协议');
    return;
  }
  if (!validatePhoneNumber()) {
    // 如果手机号码无效，再次显示错误信息
    phoneError.value = '手机号码有误，请重新输入！';
    return;
  }
  if (verificationCode.value !== '123456') {
    console.log('验证码错误，请重新输入！');
    return;
  }
  console.log('登录成功！');
  router.push('/');
}
function goBack() {
  router.back(); // 或者 router.go(-1);
}
</script>

<template>
  <div class="box">
    <div class="container">
      <div class="login">
        <div class="header">
          <a href="/"><img src="https://s3.meituan.net/static-prod01/com.sankuai.recruitment.official.website/dist/imgs/logo-b6301390.png"></a>
          <a @click="goBack"> < 返回上一级</a>
        </div>
        <div class="body">
          <div class="phone">
            <h3>手机登录</h3>
            <input v-model="phoneNumber" type="text" placeholder="请输入11位手机号码">
            <div v-if="phoneError" class="error">{{ phoneError }}</div> 
            <input v-model="verificationCode" type="text" placeholder="验证码">
            <button @click="sendVerificationCode" :disabled="!phoneNumber" class="send">发送验证码</button>
            <button @click="login" :disabled="!verificationCode" class="goLogin">登录</button>
          </div>
          <div class="scan">
            <div class="code1" v-if="!isAgreed">
              <h4>扫码登陆</h4>
              <span>请先勾选</span>
              <span>个人信息保护隐私政策</span>
            </div>
            <div v-if="isAgreed" class="code2" >
              <img src="https://res.wx.qq.com/t/fed_upload/46a73b115c002aa8d49ae255da18c592/qrcode_expired.jpg">
            </div>
            <div class="text">
              <span>使用微信扫一扫登录</span>
              <span>"美团招聘"</span>
            </div>
          </div>
        </div>
        <div class="footer">
        <input type="checkbox" v-model="isAgreed" class="check"> 我已阅读并同意<a href="#">《个人信息保护隐私政策》</a>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.box {
  width: 100%;
   height: 100vh; /* 使用视口高度 */
  background-color: #ffd100;
}
.container {
  width: 1280px;
  margin: 0 auto;
  position: relative;
  height: 100vh;
}
.login {
  width: 890px;
  height: 458px;
  border-radius: 16px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
img {
  width: 192px;
  height: 40.57px;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 32px 40px 0 32px;
}
.header a {
  font-size: 16px;
  font-weight: bold;
}
.body {
  display: flex;
}
.phone {
  width: 510px;
  height: 331px;
  /* background-color: pink; */
  padding: 30px 80px 45px;
}
.scan {
  height: 300px;
  padding: 58px 0 0 90px;
  /* background-color: skyblue; */
  border-left: 1px solid rgb(247, 244, 244);
}
.phone h3 {
  padding-bottom: 16px;
}
.phone input {
  width: 100%;
  height: 48px;
  margin-bottom: 25px;
  background-color: rgb(247, 244, 244);
  border-radius: 6px;
  border-color: transparent;
  font-size: 16px;
  padding: 0 8px;
}

.send {
  position:relative;
  bottom: 73px;
  left: 270px;
  height: 48px;
  padding: 0;
  background-color: rgb(247, 244, 244);
  border-radius: 6px;
  border-color: transparent; /* 将边框设置为透明 */
  color:#166ff7;
}

.goLogin {
  position:relative;
  bottom:50px;
  width: 100%;
  height: 48px;
  background-color: #ffd100;
  margin-top: 15px;
  border-color: transparent; /* 将边框设置为透明 */
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
}
.code2 {
  width: 180px;
  height: 180px;
  border-radius: 16px;
  margin-bottom: 20px;
}
.code2 img {
  width: 180px;
  height: 180px;
}
.code1 {
  width: 180px;
  height: 180px;
  border-radius: 16px;
  background: rgba(0,0,0,0.9);
  margin-bottom: 20px;
}
.code1 h4 {
  padding: 70px 0 5px 55px;
}
.code1 span {
  display: block;
  text-align: center;
  /* width: 100px; */
  margin: 0 auto;
  font-size: 12px;
  padding-bottom: 5px;
}
.code1 h4,span {
  color:white;
}
.error {
  color: red;
  float: right;
}
.text span {
  font-size: 13px;
  display: block;
  margin-top: 5px;
  color: black;
}
.text span:first-child {
  position: relative;
  left: 30px;
}
.text span:nth-child(2) {
  position: relative;
  left: 55px;
}
.footer {
  position: relative;
  left: 300px;
  font-size: 14px;
  color: rgb(185, 184, 184);
}
.footer a {
  color: #166ff7;
}
.footer input {
  color: rgb(185, 184, 184);
}
</style>