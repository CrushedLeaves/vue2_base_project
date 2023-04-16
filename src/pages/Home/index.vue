<template>
  <div class="container">
    <div class="images">
      <img src="./images/3.jpeg" />
    </div>
    <div class="login">
      <div class="login-head">
        <div class="icon">
          <img src="./images/R-C.png" />
        </div>
        <div class="login-head-right">
          <div @click="show()" v-show="!isshow">
            <router-link to="/home/register">注册</router-link>
          </div>
          <div @click="show()" v-show="isshow">
            <router-link to="/home/login">登录</router-link>
          </div>
        </div>
      </div>
      <div class="select">
        <router-view></router-view>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data(){
    return{
      isshow: false,
    }
  },
  components: {},
  methods:{
    show(){
      console.log("切换登陆注册服务",this.$data.isshow)
      this.isshow = !this.isshow
    },
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}
.images {
  width: 63%;
}
.images img {
  width: 100%;
  height: 100%;
  background-color: rgb(11, 11, 10);
}
.login {
  width: 37%;
  background-color: #f6f6f6;
  box-shadow:-5px 0 10px -7px rgb(19, 7, 7);
}
.icon {
  width: 16%;
  height: 11%;
}
.icon img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.select {
  margin-top: 13%;
  margin-left: 15%;
  height: 60%;
  width: 60%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.546);
  padding: 20px;
}
.login-head{
  display: flex;
  flex-direction: row;
}
.login-head-right{
  margin-top: 5%;
  margin-left: 60%;
}
</style>