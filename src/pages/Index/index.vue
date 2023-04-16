<template>
  <div class="container">
    <div class="router">
      <div class="project">
        <div class="icon">
          <img src="./images/R-C.png" />
        </div>
        <div class="project-name">项目名称</div>
      </div>
      <div class="router-content">
        <div class="listblock">
          <div class="list-item" v-for="(list,index) in itemobj" :key="list.index" @click="switchinfo(index)">
            <div class="list-name">{{list}}</div>
            <div class="list-icon">
              <img src="./images/chevron-right.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="head">
        <div class="seach">
          <div class="seach-icon">
            <!-- <img src="./images/seach.png"/> -->
          </div>
          <input class="seach-content" placeholder="输入用户信息，查询用户" />
        </div>
        <div class="userinfo">
          <div class="message">
            <img src="./images/message.png">
          </div>
          <div class="userinfo-img">
            <img src="./images/me.png">
          </div>
          <div class="userinfo-name">用户昵称</div>
        </div>
      </div>
      <div class="content-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      index: "",
      itemobj:["用户列表","市场划分","罚单管理","收件箱"]
    };
  },
  methods:{
    switchinfo(e){
      switch(e){
        case 0:
          console.log("用户列表")
          this.$router.push("/index/user")
          break;
        case 1:
          console.log("市场划分")
          this.$router.push("/index/region")
          break;
        case 2:
          console.log("罚单管理")
          this.$router.push("/index/ticket")
          break;
        case 3:
          console.log("收件箱")
          this.$router.push("/index/email")
          break;
        default:
          return 0;
      }
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #f6f6f6;
}
.message{
  width: 7%;
  height: 48%;
  border: solid 1px rgb(97, 93, 93);
  padding: 2px;
  border-radius: 50%;
}
.userinfo-img{
  margin-left: 10%;
  width: 13%;
  height: 80%;
  border-radius: 50%;
}
.userinfo-name{
  margin-left: 5%;
}
.userinfo{
  width: 25%;
  height: 50%;
  margin-right: 5%;
  display: flex;
  flex-direction: row;  
  align-items: center;
}
.userinfo img{
  width: 100%;
  height: 100%;
}
.list-name{
  font-size: 80%;
  margin-left: 10%;
}

.list-icon{
  width: 10%;
  height: 35%;
  margin-right: 10%;
}
.list-icon img{
  width: 100%;
  height: 100%;
}
.list-item{
  height: 10%;
  width: 80%;
  margin: 5% auto;
  box-shadow: 1px 1px 1px black;
  border-radius: 10px;
  background-color: #f6f6f6;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.list-item:active{
  box-shadow: 0px 0px 1px rgb(45, 41, 41);
}
.content-body{
    border-radius: 10px;
    background: #f6f6f6;
    height: 60%;
    width: 85%;
    margin: 6% auto;
    padding: 2%;
}
.router-content {
  height: 88%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.listblock {
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.765);
  width: 80%;
  height: 90%;
  background-color: #ffffff;
  border-radius: 10px;
  padding-top: 10%;
}
.project {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 12%;
}
.project-name {
  font-size: large;
  margin-top: 3%;
  margin-left: 3%;
}
.head {
  height: 12%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.content {
  width: 80%;
  height: 100%;
  background: #ffffff;
}
.router {
  width: 20%;
}
.icon {
  height: 85%;
  width: 24%;
  margin-top: 2%;
  margin-left: 8%;
}
.icon img {
  height: 100%;
  width: 100%;
}
.seach{
    width: 40%;
    height: 50%;
    display: flex;
    margin-left: 3%;
    background-color: #f6f6f6;
    border-radius: 20px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.765);
}
.seach-icon{
    width: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.seach-icon img{
    width: 70%;
    height: 70%;
}
.seach-content{
    border: none;
    outline:none;
    width: 85%;
    background-color: #f6f6f6;
}
</style>