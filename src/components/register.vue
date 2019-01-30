<template>
    <div>
        <div class="login">
            <div class="logo"></div>
            <div class="main">
                <table width="100%" border="0" cellspacing="0" class="main1">
                    <tr>
                        <td class="text"><input type="text/css" class="text1" placeholder="输入手机号" v-model="userName"/></td>
                    </tr>
                </table>
                <div class="linee"></div>
                <table width="100%" border="0" cellspacing="0" class="main1">
                    <tr>
                        <td class="text"><input type="text/css" class="text1" placeholder="输入新密码" v-model="passWord"/></td>
                    </tr>
                </table>
                <div class="linee"></div>
                <table width="100%" border="0" cellspacing="0" class="main1">
                    <tr>
                        <td class="text"><input type="text/css" class="text1" placeholder="输入确认密码" v-model="confirm"/></td>
                    </tr>
                </table>
                <div class="linee"></div>
            </div>
        <div class="button"><input type="button" value="注 册" class="text2" @click="reg1"/></div>
    </div>
    <div class="footrt">
            <div class="footrt_left"><a href="login.html">已有账号？立即登录</a></div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userName :'' ,
            passWord:'',
            confirm :''
        }
    },
    methods: {
        reg1(){
           this.$http({
               url:'http://localhost:3000/register',
               params:{userName:this.userName ,passWord:this.passWord}
           }).then((res)=>{
               console.log(res)
               if(res.data.error == 0){
                   alert('注册成功')
                   this.$router.push('./login')
               }else if(res.data.error==1){
                   alert('注册失败，请重新注册')
               }
           })
        }
    },
}
</script>
<style scoped>
    /*登录 注册*/
    .login{ width:100%; height:auto;}
    .logo{padding-top:50px; width:35%; height:35%; margin:0px auto;}
    .main{ width:80%; margin:0px auto; padding-top:50px; }
    .mainl{ width:100%; margin:0px auto; }
    .text{ width:100%; color:#FFF; height:30px; text-align:left; }
    .text1{  width:100%; height:30px; margin-top:30px; border:none; color:#666; font-size:14px; font-family:"微软雅黑"; line-height:30px;  background:#f0f0f0;  }
    .button{ width:80%; margin:0px auto; padding-top:30px;}
    .text2{ height:50px; width:100%; border:none; color:#FFF; font-size:16px; font-family:"微软雅黑"; background:#ff8000; border-radius:50px; font-weight:bold;}
    .linee{ width:100%; height:1px; margin:0px auto; background:#ccc; margin-top:5px; margin-bottom:5px;}
    .footrt{ width:80%; height:20px; margin:0px auto; padding-top:150px; bottom:20px; left:0px; right:0px; position:fixed; overflow:hidden;}
    .footrt_left{ width:50%; float:left; text-align:left; color:#999; font-size:14px; font-family:"微软雅黑";}
    .footrt_right{ width:50%; float:right; text-align:right; color:#999; font-size:14px; font-family:"微软雅黑";}
    .footrt_left a{ color:#999;}
    .footrt_right a{ color:#999;}
</style>