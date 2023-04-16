<template>
  <div class="container">
    <input type="text" placeholder="请输入用户邮箱">
    <input type="password" placeholder="请输入密码">
    <button @click="submit()">登录</button>
    <div class="front">
        <label class="remember">
            <input type="checkbox">&nbsp;&nbsp;<label>记住我</label>
        </label>
        <div style="width:30%"></div>
        <div class="icon">
            <img src="./images/github.png">
        </div>
        <div class="icon">
            <img src="./images/twitch.png">
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{
            password:'',
            username:'',
        }
    },
    components:{
    },
    methods:{
        submit(){
            console.log("登录,跳转首页")
            // const{username,password} = this
            // this.$store.dispatch("login",{username,password})
            this.$router.push("/index")
        },
    }

}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
}
input{
    height: 10%;
    border-radius: 5px;
    margin: 10% 0%;
}
.remember{
    margin-top: 5%;
}
button{
    height: 10%;
    margin-top: 20%;
}
.front{
    display: flex;
    flex-direction: row;
}
.front input{
    width: 20px;
    height: 20px;
    vertical-align:middle;
}
.icon{
    height: 30px;
    width: 30px;
    margin-left: 5%;
    margin-top: 6%;
}
.icon img{
    width: 100%;
    height: 100%;
}
</style>