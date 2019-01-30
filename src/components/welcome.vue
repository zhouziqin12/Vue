<template>
    <div >
        <div class="login">
            <div class="zhmm">中韩欢迎您</div>
        </div>
        <div class="di">
            <div class="button" ><a href="javascript:;"><input type="button" value="登 录" class="text2" @click="gologin"/></a></div>
            <div class="button" ><a href="javascript:;"><input type="button" value="注 册" class="text2" @click="goregister"/></a></div>
        </div>
        <div class="footrt">
            <div class="footrt_left"><a href="javascript:;">已有账号？立即登录</a></div>
        </div>
        </div>
</template>
<script>
export default {
    methods:{
        gologin(){
            console.log('....')
            this.$router.push('/login')
        },
        goregister(){
            this.$router.push('/register')
        }
    }
}
</script>
<style>
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
        /*忘记密码*/
    .zhmm{ width:100%; font-size:24px; font-family:"微软雅黑"; color:#666; text-align:center; padding-top:50px;}
    .text_yz{ text-align:center; width:100%; border:#CCC 1px solid; height:30px; line-height:30px;}
    .text_yzz{ width:100%; border:#CCC 1px solid; height:40px; line-height:40px; font-size:16px; font-family:"微软雅黑"; }
    .main_2{ margin-top:30px;}

    /*欢迎*/
    .di{ bottom:60px; height:auto; left:0px; right:0px; position:fixed; overflow:hidden;z-index: 9999;}
</style>
