<template id='aa'>
        <!--/*主要部分*/-->
    <div class="indexmain">
    	<table width="100%" border="0" cellspacing="0" class="indexmain_1">
        	<tr>
                <!-- <router-link class="main_1" tag="td" to="/takeout"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">炸鸡</div></a></router-link> -->
                    <!-- <td class="main_1"  v-for="item in main1" :key="item.id">
                       <div class="main_2"> <router-link to="/detail"><img :src="'../assets/img/'+item.img+'.jpg'" width="100%" height="auto"/></div>
                    <div class="indetext">{{item.name}}</router-link></div>
                    </td> -->
            	<td class="main_1" v-for="item in main1" :key="item.id"><router-link :to="{name:'takeout',params:{id:item.id},query:{dataName:item.name}}">
                	<div class="main_2"><img :src="item.img" width="100%" height="auto"/></div>
                    <div class="indetext">{{item.name}}</div></router-link>
                </td>
                <!-- <td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp1.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">烧烤</div></a>
                </td>
                <td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp2.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">中餐</div></a>
                </td> -->
                
            </tr>
            <tr>
                <!-- <router-link class="main_1" tag="td" to="/takeout"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">炸鸡</div></a></router-link> -->
                    <!-- <td class="main_1"  v-for="item in main1" :key="item.id">
                       <div class="main_2"> <router-link to="/detail"><img :src="'../assets/img/'+item.img+'.jpg'" width="100%" height="auto"/></div>
                    <div class="indetext">{{item.name}}</router-link></div>
                    </td> -->
            	<td class="main_1" v-for="item in main2" :key="item.id"><router-link :to="{name:'takeout',params:{id:item.id},query:{dataName:item.name}}">
                	<div class="main_2"><img :src="item.img" width="100%" height="auto"/></div>
                    <div class="indetext">{{item.name}}</div></router-link>
                </td>
                <!-- <td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp1.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">烧烤</div></a>
                </td>
                <td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp2.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">中餐</div></a>
                </td> -->
                
            </tr>
             <tr>
                <!-- <router-link class="main_1" tag="td" to="/takeout"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">炸鸡</div></a></router-link> -->
                    <!-- <td class="main_1"  v-for="item in main1" :key="item.id">
                       <div class="main_2"> <router-link to="/detail"><img :src="'../assets/img/'+item.img+'.jpg'" width="100%" height="auto"/></div>
                    <div class="indetext">{{item.name}}</router-link></div>
                    </td> -->
            	<td class="main_1" v-for="item in main3" :key="item.id"><router-link :to="{name:'takeout',params:{id:item.id},query:{dataName:item.name}}">
                	<div class="main_2"><img :src="item.img" width="100%" height="auto"/></div>
                    <div class="indetext">{{item.name}}</div></router-link>
                </td>
                <!-- <td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp1.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">烧烤</div></a>
                </td>
                <td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp2.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">中餐</div></a>
                </td> -->
                
            </tr>
             <tr>
                <!-- <router-link class="main_1" tag="td" to="/takeout"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">炸鸡</div></a></router-link> -->
                    <!-- <td class="main_1"  v-for="item in main1" :key="item.id">
                       <div class="main_2"> <router-link to="/detail"><img :src="'../assets/img/'+item.img+'.jpg'" width="100%" height="auto"/></div>
                    <div class="indetext">{{item.name}}</router-link></div>
                    </td> -->
            	<td class="main_1" v-for="item in main4" :key="item.id"><router-link :to="{name:'takeout',params:{id:item.id},query:{dataName:item.name}}">
                	<div class="main_2"><img :src="item.img" width="100%" height="auto"/></div>
                    <div class="indetext">{{item.name}}</div></router-link>
                </td>
                <!-- <td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp1.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">烧烤</div></a>
                </td>
                <td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp2.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">中餐</div></a>
                </td> -->
                
            </tr>
        </table>
        <!-- <table width="100%" border="0" cellspacing="0" class="indexmain_1">
        	<tr>
            	<td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp3.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">猪蹄</div></a>
                </td>
                <td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp4.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">披萨</div></a>
                </td>
                <td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp5.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">寿司.肉包</div></a>
                </td>
            </tr>
        </table>
        <table width="100%" border="0" cellspacing="0" class="indexmain_1">
        	<tr>
            	<td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp6.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">盒饭.粥</div></a>
                </td>
                <td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp7.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">拌菜.汤饭</div></a>
                </td>
                <td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp8.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">咖啡店</div></a>
                </td>
            </tr>
        </table> -->
        <!-- <table width="100%" border="0" cellspacing="0" class="indexmain_1">
        	<tr>
            	<td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp9.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">蛋糕</div></a>
                </td>
                <td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp10.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">周边美食</div></a>
                </td>
                <td class="main_1"><a href="take-out.html">
                	<div class="main_2"><img src="../assets/img/cp11.jpg" width="100%" height="auto"/></div>
                    <div class="indetext">食品超市</div></a>
                </td>
            </tr>
        </table> -->
         <div id="activity">
            <div class="title">优惠中心</div>
            <div class="content">
                    <div class="text">网上订餐，每单任意消费后，加6元即可享受缤纷美味,加6元即可享受缤纷美味</div>
                    <div class="jt">></div>
            </div>
            <div class="content">
                    <div class="text">网上订餐，每单任意消费后，加6元即可享受缤纷美味,加6元即可享受缤纷美味</div>
                    <div class="jt">></div>
            </div>
            <div class="content">
                    <div class="text">网上订餐，每单任意消费后，加6元即可享受缤纷美味,加6元即可享受缤纷美味</div>
                    <div class="jt">></div>
            </div>
            <div class="content">
                    <div class="text">网上订餐，每单任意消费后，加6元即可享受缤纷美味,加6元即可享受缤纷美味</div>
                    <div class="jt">></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    template:'aa',
    
    data(){
        return{
            main1:[] ,
            main2:[],
            main3:[],
            main4:[]
        }
    },
   mounted() {
        let url = '/data/indexmain.json'
        this.$http({
            url : url ,

        }).then((res)=>{
            console.log(res.data)
            this.main1=res.data.slice(0,3);
            this.main2=res.data.slice(3,6);
            this.main3=res.data.slice(6,9);
            this.main4=res.data.slice(9,12);
            console.log(this.main1)
        })
    }
}
</script>
<style scoped>
    /*首页主要部分*/
    .indexmain{ width:100%;  margin:0px auto; text-align:center; padding-top:5px; background:#FFF; padding-bottom:10px;}
    .indexmain_1{margin:10px auto; text-align:center; width:100%; }
    .main_1{ width:30%; text-align:center; padding-left:5px;}
    .main_2{width:90%; text-align:center; border:#CCC 1px solid;}
    .indetext{ font-family: "微软雅黑"; font-size:14px; color:#999; margin-top:5px; width:90%; text-align:center; }
    /*优惠中心*/
    #activity{ width:100%; background:#FFF; margin-top:10px; height:150px;  padding-bottom:10px;  border-top:#CCC 1px solid;  }
    #activity .title {font-family:"微软雅黑"; font-size:12px; color:#fff; background:#ff8000; height:30px; line-height:30px; padding-left:20px; }
    #activity .content{ height:30px; line-height:30px; width:100%; border-bottom:#CCC 1px solid;}
    #activity .content .text{font-family:"微软雅黑"; font-size:12px; color:#666;  height:30px; line-height:30px; padding-left:20px; width:70%; text-overflow:ellipsis; overflow:hidden; white-space:nowrap; float:left;}
    #activity .content .jt{ font-size:18px; color:#999;  height:30px; line-height:30px; padding-left:20px; width:10%; text-align:right; padding-right:10px;  float:right;}
</style>

