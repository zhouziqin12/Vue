<template>
    <div>
          <div class="header">
            <table width="100%" border="0" cellspacing="0" class="header_nav">
                <tr>
                    <td width="10%" class="nav_left1"><a  href='javascript:window.history.go(-1)'></a></td>
                    <td width="80%" class="nav_title">我的中心</td>
                    <td width="10%" class="nav_r"></td>
                </tr>
            </table>
        </div>
         <div class="my">

            <table width="100%" border="0" cellspacing="0" class="my_name">
            	<tr>
                	<td class="my_main_1"><a href="address.html">
                    	<div><h3>中韩用户名</h3></div>
                        <div>手机：158 0000 1111  </div></a>
                    </td>
                    <td class="my_mainn"><a href="address.html">></a></td>
                </tr>
            </table>
            <table width="100%" border="0" cellspacing="0" class="my_2">
            	<tr>
                	<td width="30" class="my_3" @click="gopj"><a href="javascript:;"><img src="../assets/img/pj.jpg" width="30%" height="auto" /><p>商家评价</p></a></td>
                    <td width="30" class="my_4" @click="gojf"><a href="javascript:;"><img src="../assets/img/xh.jpg" width="30%" height="auto" /><p>我的积分</p></a></td>
                    <td width="30" class="my_4" @click="gojk"><a href="javascript:;"><img src="../assets/img/jk.jpg" width="30%" height="auto" /><p>我的金库</p></a></td>
                </tr>
            </table>
            
        	<table width="100%" border="0" cellspacing="0" class="my_n">
            	<tr>
                	<td class="my_main" @click="myorder"><a href="javascript:;" >我的订单</a></td>
                    <td class="my_mainn"><a href="javascript:;">></a></td>
                </tr>
                <tr>
                	<td class="my_main_p" @click="gobuycar"><a href="javascript:;">我的购物车</a></td>
                    <td class="my_mainn_p" @click="gobuycar"><a href="javascript:;">></a></td>
                </tr>
             </table> 
             <table width="100%" border="0" cellspacing="0" class="my_n">   
				<tr>
                	<td class="my_main"  @click="goyy"><a href="javascript:;">语言</a></td>
                    <td class="my_mainn"  @click="goyy"><a href="javascript:;">></a></td>
                </tr>
                <tr>
                	<td class="my_main_p" @click="checkpassword"><a href="javascript:;">修改密码</a></td>
                    <td class="my_mainn_p" @click="checkpassword"><a href="javascript:;">></a></td>
                </tr>
                <tr>
                	<td class="my_main_p"><a href="javascript:;">服务与广告</a></td>
                    <td class="my_mainn_p"><a href="javascript:;">></a></td>
                </tr>
                <tr>
                	<td class="my_main_p">推荐给好友</td>
                    <td class="my_mainn_p">></td>
                </tr>
                <tr>
                	<td class="my_main_p"><a href="javascript:;">最新消息</a></td>
                    <td class="my_mainn_p"><a href="javascript:;">></a></td>
                </tr>
            </table>
        </div>
        <div class="button1"><a href="javascript:;"><input type="button" value="退出当前账号" class="text2" @click="logout" /></a></div>
    </div>
</template>
<script>

export default {
    methods: {
        logout(){
            let con = confirm('您确认退出吗？')
            // console.log(con)
            if(con){
                document.cookie = '' ;
                this.$router.push('/welcome')
            }
        },
        myorder(){
            this.$router.push('/myorder')
        },
        gopj(){
            this.$router.push('/pingjia')
        },
        gojf(){
            this.$router.push('/myjf')
        },
        gojk(){
            this.$router.push('/myjk')
        },
        gobuycar(){
            this.$router.push('/buycar')
        },
        goyy(){
            this.$router.push('/language')
        },
        checkpassword(){
            this.$router.push('/updatepassword')
        }
    },
}
</script>
<style scoped>
    /*我的中心*/
.my{width:100%; margin-top:40px; margin-top:40px;}
.my_main{ background:#FFF; width:100%; height:50px; border-bottom:#CCC 1px solid; border-top:#CCC 1px solid; font-size:14px; font-family:"微软雅黑"; color:#666; padding-left:30px; }
.my_mainn{ background:#FFF; width:100%; height:50px; border-bottom:#CCC 1px solid; border-top:#CCC 1px solid; font-size:20px; color:#999; padding-right:30px;}
.my_name{ width:100%; height:100px;}
.my_main_1{background:#FFF; width:100%; height:50px; border-bottom:#CCC 1px solid;  border-top:#CCC 1px solid; font-size:14px; font-family:"微软雅黑"; color:#666; padding-left:30px; line-height:30px;}
.my_n{ margin-top:10px; margin-bottom:10px; }
.button1{ width:90%; margin:0px auto; padding-top:20px;}
.text2{ height:50px; width:100%; border:none; color:#fff; font-size:16px; font-family:"微软雅黑"; background:#ff7f00; border-radius:50px; }
.my_main_1 a { color:#666;}
.my_mainn a { color:#666;}
.my_mainn_p a{ color:#090;}
.my_main_p{ background:#FFF; width:85%; height:50px; border-bottom:#CCC 1px solid; font-size:14px; font-family:"微软雅黑"; color:#666; padding-left:30px; }
.my_mainn_p{ background:#FFF; width:15%; height:50px; border-bottom:#CCC 1px solid; font-size:20px; color:#666; padding-right:30px;}
.name_1{ border:0px; font-size:14px; font-family:"微软雅黑"; color:#666;}
.my_2{ width:100%; background:#FFF; text-align:center; font-size:14px; font-family:"微软雅黑"; color:#333; border-bottom:#CCC 1px solid; height:90px;}
.my_3{ width:30%; height:30px; line-height:30px;}
.my_4{ width:30%; border-left:#CCC 1px solid; height:30px; line-height:30px;}
.my_mainn_p a{ color:#666;}
</style>