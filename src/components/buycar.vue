<template>
    <div>
        <div class="header">
    <table width="100%" border="0" cellspacing="0" class="header_nav">
    	<tr>
        	<td width="10%" class="nav_left1"><a  href='javascript:window.history.go(-1)'></a></td>
            <td width="80%" class="nav_title">我的购物车</td>
            <td width="10%" class="nav_r"></td>
        </tr>
    </table>
    </div>
    <div class="bodymain">
    	<div class="bbb"
            v-for="val in addshop" :key="val.id"
        >
            <table width="100%" border="0" cellpadding="0" class="shop">
                <tr>
                    <td class="d2" @click="remove( $event,val.id)">删除</td>
                </tr>
            </table>
            <table width="95%" border="0" cellpadding="0">
                <tr>
                    <td rowspan="2"><input type='checkbox' v-model="bl"></td>
                    <td rowspan="2" class="shop_pic"><img :src="val.leibie2" width="100%" height="auto"/></td>
                    <td class="ddd">{{val.leibie1}}</td>
                </tr>
                <tr>
                    <!-- <td class="ddd">内容内容内容</td> -->
                </tr>
            </table>
            <table width="95%" border="0" cellpadding="0" class="shop_text">
                <tr>
                    <td class="d3">共{{val.count}}件商品</td>
                    <td class="d3"><span>{{val.price | currency}}</span> x{{val.count}}</td>
                </tr>
            </table>
    	</div>
        <!-- <div class="bbb">
            <table width="100%" border="0" cellpadding="0">
                <tr>
                    <td class="d2">删除</td>
                </tr>
            </table>
            <table width="95%" border="0" cellpadding="0">
                <tr>
                    <td rowspan="2"><input type='checkbox'></td>
                    <td rowspan="2" class="shop_pic"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></td>
                    <td class="ddd">大方炸鸡</td>
                </tr>
                <tr>
                    <td class="ddd">内容内容内容</td>
                </tr>
            </table>
            <table width="95%" border="0" cellpadding="0" class="shop_text">
                <tr>
                    <td class="d3">共1件商品</td>
                    <td class="d3"><span>￥199.00元</span> x1</td>
                </tr>
            </table>
    	</div> -->
    </div>
    <div class="js">
    <div class="jss"></div>
    	<table width="100%" border="0" cellpadding="0" style=" ">
        	<tr>
            	<td class="d3"><input type='checkbox' v-model="bl">全选</td>
                <td class="d3" style="text-align:left; padding-left:10px;">合计：<span>{{sum | currency}}</span>（不含运费）</td>
                <td class="jj"><input type="submit" value="结算" class="jsjs" /></td>
            </tr>
        </table>
    </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            shop :[],
            bl : false
        }
    },
    computed: {
       ...mapGetters([
           'addshop' , 'sum'
       ]),
    },
    methods: {
        remove(index){
            this.$store.dispatch('remove' , index)
        }
    },
}
</script>
<style scoped>
        /*购物车*/
    .d2{color:#666; font-size:12px; text-align:right; padding-right:10px; padding-top:5px; border-bottom:#CCC 1px solid; padding-bottom:5px;}
    .js{ width:100%; background:#fff; left:0px; right:0px; position:fixed; overflow:hidden; bottom:70px;}
    .jj{ width:80px; height:40px;}
    .jsjs{width:100%; border:0px; background:#ff5001; color:#FFF; height:40px; }
    .jss{width:100%; height:1px; background:#cacaca;}
    .d3{color:#333; font-size:12px;}
    .d3 span{color:#f60; font-size:12px;}
    .bbb{ width:100%; height:auto; background:#f7f7f7; }
    .ddd{ color:#000; text-align:left; padding-left:20px;}
    .shop_pic{ width:25%;}
    .shop_text{ width:100%; height:30px; background:#f0f0f4;}
</style>