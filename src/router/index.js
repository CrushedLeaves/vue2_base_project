import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Home from '../pages/Home/index.vue'
import Register from '../pages/Register/index.vue'
import Login from '../pages/Login/index.vue'
import Index from '../pages/Index/index.vue'
import User from '../pages/User/index.vue'
import Ticket from '../pages/Ticket/index.vue'
import Email from '../pages/Email/index.vue'
import Region from '../pages/Region/index.vue'


const routers =  new VueRouter({
    routes:[
        {
            name:'home',
            path:'/home',
            component:Home,
            children:[
                {
                    name:'register',
                    path:"/home/register",
                    component: Register,
                },
                {
                    name:'login',
                    path:"/home/login",
                    component:Login,
                },
            ]
        },
        {
            name:'index',
            path:'/index',
            component:Index,
            children:[
                {
                    name:'user',
                    path:"/index/user",
                    component:User,
                },
                {
                    name:'region',
                    path:"/index/region",
                    component:Region,
                },
                {
                    name:'ticket',
                    path:"/index/ticket",
                    component:Ticket,
                },
                {
                    name:'email',
                    path:"/index/email",
                    component:Email,
                },
            ]
            //添加验证机制，需要token才可访问
            // meta:{
            //     requiresAuth:true
            // },
        },
        {
            path:'/',
            redirect:'/home/login'   //默认显示
        }
    ]
})

export default routers