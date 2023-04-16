<template>
<div class="container">
  <input type="text" placeholder="请输入您的邮箱">
  <input type="password" placeholder="请输入您的密码">
  <input type="password" placeholder="请确认您的密码">
  <div class="identify">
    <input type="text" placeholder="请输入验证码">
  <button>提交</button>
  </div>
  <button>注册</button>

</div>
</template>

<script>
export default {
  name: "register",
  components: {},
};
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
}
input{
    height: 10%;
    border-radius: 5px;
    margin: 5% 0%;
}
button{
    height: 10%;
    margin-top: 20%;
}
.identify{
  display: flex;
  flex-direction: row;

  height: 10%;
}
.identify input{
  height: 100%;
  width: 70%;
}
.identify button{
  height: 110%;
  width: 30%;
  margin-top: 6%;
}
</style>