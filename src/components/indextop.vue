<template>
    <div>
        <swipe class="my-swipe" :speed="1500" :auto="autotime">
            <swipe-item class="slide1"><img src="../assets/img/000.jpg" width="100%" height="auto"/></swipe-item>
            <swipe-item class="slide2"><img src="../assets/img/cp10.jpg" width="100%" height="auto"/></swipe-item>
            <swipe-item class="slide3"><img src="../assets/img/cp9.jpg" width="100%" height="auto"/></swipe-item>
        </swipe>
        <!-- <div style="margin-top:40px;" class="aa">
         <div ><img src="../assets/img/000.jpg" width="100%" height="auto"/></div>
         <div ><img src="../assets/img/cp10.jpg" width="100%" height="auto"/></div>
         <div ><img src="../assets/img/cp9.jpg" width="100%" height="auto"/></div>
         <div ><img src="../assets/img/cp8.jpg" width="100%" height="auto"/></div>
        </div> -->
        <div class="xx">
            <div class="xx_1"><img src="../assets/img/ts.png" width="40%" height="auto"/></div>
            <div class="xx_2">外卖：30分钟前A用户联系到大方外卖：30分钟前A用户联系到大方炸鸡炸鸡</div>
        </div>
        </div>
</template>

<script scoped>
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
    data(){
        return {
        autotime:2000
        }
    },
    components:{
        swipe:Swipe,
        'swipe-item':SwipeItem
    }
}
</script>

<style>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-top:40px;
}
 
.slide1 {
  height:inherit;
  background-color: #0089dc;
  color: #fff;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
  height:inherit;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
  height:inherit;
}
    .xx{ width:90%; text-align:left; margin:0px auto; height:20px; margin-top:5px; padding-bottom:15px;}
    .xx_1{ float:left; width:20%; }
    .xx_2{ float:right; width:80%; font-size:14px; color:#333; line-height:25px; height:25px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis}
    .aa img{display: block}
</style>
