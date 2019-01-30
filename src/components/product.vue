<template>
    <!--/*主要部分*/-->
    <div class="classmain">
    	<table width="95%" border="0" cellspacing="0" class="class_main">
        	<tr>
                <router-link tag="td" class="class_main_1" :to="{name:'detail',params:{id:val.id},query:{leibie:val.style1 ,leibie2:val.img}}" v-for="val in count" :key="val.id"><a href="javascript:;">
                	<div class="class_pic"><img :src="val.img" width="100%" height="auto"/></div>
                    <div class="class_text">{{val.style1}}<p>{{val.style2}}</p></div></a>
                </router-link>
            	<!-- <td class="class_main_1"><a href="dianqi.html">
                	<div class="class_pic"><img src="../assets/img/00.png" width="100%" height="auto"/></div>
                    <div class="class_text">KTV<p>酒吧</p></div></a>
                </td> -->
                <!-- <td width="10"></td> -->
                <!-- <router-link tag="td" class="class_main_1" to='detail'><a href="dianqi.html">
                	<div class="class_pic"><img src="../assets/img/00.png" width="100%" height="auto"/></div>
                    <div class="class_text">KTV<p>酒吧</p></div></a>
                </router-link>
                 <router-link tag="td" class="class_main_1" to='detail'><a href="dianqi.html">
                	<div class="class_pic"><img src="../assets/img/00.png" width="100%" height="auto"/></div>
                    <div class="class_text">KTV<p>酒吧</p></div></a>
                </router-link>
                 <router-link tag="td" class="class_main_1" to='detail'><a href="dianqi.html">
                	<div class="class_pic"><img src="../assets/img/00.png" width="100%" height="auto"/></div>
                    <div class="class_text">KTV<p>酒吧</p></div></a>
                </router-link> -->
                
            </tr>
            <!-- <tr height="5"></tr>
            <tr>
            	<td class="class_main_1"><a href="dianqi.html">
                	<div class="class_pic"><img src="../assets/img/001.jpg" width="100%" height="auto"/></div>
                    <div class="class_text">洗浴<p>SPA</p><p>按摩</p></div></a>
                </td>
                <td width="10"></td>
                <td class="class_main_1"><a href="dianqi.html">
                	<div class="class_pic"><img src="../assets/img/002.jpg" width="100%" height="auto"/></div>
                    <div class="class_text">观光<p>订票</p><p>住宿</p></div></a>
                </td>
            </tr> -->
            <!-- <tr height="5"></tr>
            <tr>
            	<td class="class_main_1"><a href="dianqi.html">
                	<div class="class_pic"><img src="../assets/img/003.jpg" width="100%" height="auto"/></div>
                    <div class="class_text">美容<p>美甲</p><p>美发</p></div></a>
                </td>
                <td width="10"></td>
                <td class="class_main_1"><a href="dianqi.html">
                	<div class="class_pic"><img src="../assets/img/004.jpg" width="100%" height="auto"/></div>
                    <div class="class_text">电器<p>厨房</p><p>化妆品</p></div></a>
                </td>
            </tr> -->
            <!-- <tr height="5"></tr>
            <tr>
            	<td class="class_main_1"><a href="dianqi.html">
                	<div class="class_pic"><img src="../assets/img/004.jpg" width="100%" height="auto"/></div>
                    <div class="class_text">体育<p>高尔夫</p><p>休闲</p></div></a>
                </td>
                <td width="10"></td>
                <td class="class_main_1"><a href="dianqi.html">
                	<div class="class_pic"><img src="../assets/img/005.jpg" width="100%" height="auto"/></div>
                    <div class="class_text">服装<p>箱包</p><p>眼镜</p></div></a>
                </td>
            </tr>
            <tr height="5"></tr>
            <tr>
            	<td class="class_main_1"><a href="dianqi.html">
                	<div class="class_pic"><img src="../assets/img/006.jpg" width="100%" height="auto"/></div>
                    <div class="class_text">婚庆<p>鲜花</p><p>饰品</p></div></a>
                </td>
                <td width="10"></td>
                <td class="class_main_1"><a href="dianqi.html">
                	<div class="class_pic"><img src="../assets/img/007.jpg" width="100%" height="auto"/></div>
                    <div class="class_text">保健品<p>酒</p></div></a>
                </td>
            </tr>
            <tr height="5"></tr> -->
                <!-- <tr>
                    <td class="class_main_1"><a href="dianqi.html">
                        <div class="class_pic"><img src="../assets/img/008.jpg" width="100%" height="auto"/></div>
                        <div class="class_text">茶叶<p>茶具</p></div></a>
                    </td>
                    <td width="10"></td>
                    <td class="class_main_1"><a href="dianqi.html">
                        <div class="class_pic"><img src="../assets/img/009.jpg" width="100%" height="auto"/></div>
                        <div class="class_text">医院<p>培训</p></div></a>
                    </td>
                </tr>
                <tr height="5"></tr> -->
                <!-- <tr>
                    <td class="class_main_1"><a href="dianqi.html">
                        <div class="class_pic"><img src="../assets/img/010.jpg" width="100%" height="auto"/></div>
                        <div class="class_text">装修<p>家具</p></div></a>
                    </td>
                    <td width="10"></td>
                    <td class="class_main_1"><a href="dianqi.html">
                        <div class="class_pic"><img src="../assets/img/011.jpg" width="100%" height="auto"/></div>
                        <div class="class_text">代驾<p>车租凭</p></div></a>
                    </td>
                </tr>
                <tr height="5"></tr> -->
                <!-- <tr>
                    <td class="class_main_1"><a href="dianqi.html">
                        <div class="class_pic"><img src="../assets/img/012.jpg" width="100%" height="auto"/></div>
                        <div class="class_text">学校<p>团体机构</p></div></a>
                    </td>
                    <td width="10"></td>
                    <td class="class_main_1"><a href="dianqi.html">
                        <div class="class_pic"><img src="../assets/img/013.jpg" width="100%" height="auto"/></div>
                        <div class="class_text">物流<p>通讯</p></div></a>
                    </td>
                </tr> -->
                <!-- <tr height="5"></tr> -->
                <!-- <tr>
                    <td class="class_main_1"><a href="dianqi.html">
                        <div class="class_pic"><img src="../assets/img/015.jpg" width="100%" height="auto"/></div>
                        <div class="class_text">加盟<p>贸易</p><p>机械</p></div></a>
                    </td>
                    <td width="10"></td>
                    <td class="class_main_1"><a href="dianqi.html">
                        <div class="class_pic"><img src="../assets/img/016.jpg" width="100%" height="auto"/></div>
                        <div class="class_text">净水器<p>空气净化</p></div></a>
                    </td>
                </tr> -->
            </table>
        <!-- <div>{{product_main}}</div> -->
    </div>
    
</template>
<script>
import Vuex from 'vuex' ;
import * as types from '../store/types.js'
import {mapGetters} from 'vuex'
export default {
   created() {
    //    console.log(this.$router)
    let url= '/data/product.json'
    // this.$store.dispatch('UPDATE_HOME' , url)
    // console.log(types.PRODUCT_MAIN)
    this.$store.dispatch(types.PRODUCT_MAIN ,url)
   },
   computed: {
       ...mapGetters([
           'count'
       ])
   },

}
</script>
<style scoped>
    /*分类*/
    .classmain{width:100%;  margin:0px auto; text-align:center; padding-top:5px; padding-bottom:10px; margin-top:40px;}
    .class_main{ margin:10px auto; text-align:center; widows:100%; }
    .class_main_1{ width:49%; background:#FFF; border:#CCC 1px solid; height:70px; }
    .class_pic{ width:60%; height:auto; float:left; margin:5px auto; padding-left:5px;}
    .class_text{ width:30%; font-family:"微软雅黑"; font-size:12px; color:#666; float:left; text-align:center; height:70px; line-height:20px; padding-top:10px;}
    .classmain tr{display: flex;flex-wrap: wrap}
     .classmain tr td{height: 100px;margin-right: 1px}   
</style>
