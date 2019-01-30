import Vue from 'vue'
import axios from 'axios'
import Router from 'vue-router'

Vue.use(Router)

import home from './components/home.vue';
import address from './components/address.vue';
import buy from './components/buy.vue';
import buycar from './components/buycar.vue';
import detail from './components/detail.vue';
import findpassword from './components/findpassword.vue';
import error from './components/error.vue';
import language from './components/language.vue';
import login from './components/login.vue';
import myjf from './components/myjf.vue';
import pingjia from './components/pingjia.vue';
import product from './components/product.vue';
import register from './components/register.vue';
import updatepassword from './components/updatepassword.vue';
import user from './components/user.vue';
import welcome from './components/welcome.vue';
import takeout from './components/takeout.vue';
import myorder from './components/myorder.vue';

let userAuth =(to , from ,next)=>{
  // let that = this ;
  // axios({
  //   url:'http://localhost:3000/users',
  // }).then((res)=>{
  //   console.log(res)
  //   if(!res.error) {
  //     alert('未登录,请先登陆');
  //     next('/login')
  //   }
  //   // console.log(to)
   
  // })
  // if(document.cookie.length==0){
  //   alert('还未登陆,请先去登陆')
  //   next('/login')
  //   console.log(document.cookie)
  // }else if(document.cookie.length > 0){
  //   alert('欢迎登陆')
  //   next('/user')
  // }
  // console.log(document.cookie)
  // document.cookie=222
 
// console.log(document.cookie)
  // if(document.cookie.length==0){
  //   alert('还未登陆，请登陆');
  //   next('/login')
  // }else if(document.cookie.length >= 0){
  //   next('/user')
  // }
  if(document.cookie.length > 0){
    next()
  }else if(document.cookie.length == 0){
    alert('还没登陆，请先的登陆');
    next('/login')
  }
}

let buycarAuth = (to ,from , next)=>{
  if(document.cookie.length > 0){
    next()
  }else if(document.cookie.length == 0){
    alert('还没登陆，请先的登陆');
    next('/login')
  }
}

let routes = [
  {path:'/welcome',component:welcome},
  {path:'/home',component:home },
  {path:'/product',component:product},
  {name:'detail', path:'/detail:id',component:detail},
  {path:'/buycar',component:buycar ,beforeEnter:buycarAuth},
  {path:'/user',component:user , beforeEnter:userAuth},
  {path:'/login',component:login,},
  {path:'/register',component:register},
  {name:'takeout',path:'/takeout/:id',component:takeout},
  {path:'/address',component:address},
  {path:'/updatepassword',component:updatepassword},
  {path:'/findpassword',component:findpassword},
  {path:'/language',component:language},
  {path:'/myorder',component:myorder},
  {path:'/myjf',component:myjf},
  {path:'/buy',component:buy},
  {path:'/',redirect:'/welcome'},
  {path:'*',component:error},
]

export default new Router({
  routes
})
